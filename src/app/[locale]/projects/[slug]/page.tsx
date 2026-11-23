import Link from 'next/link';
import Image from 'next/image';
import {ArrowLeft,ExternalLink} from 'lucide-react';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {copy,locales,type Locale} from '@/lib/content';
import {Header,Footer,SectionLabel,ProjectNavigation} from '@/components/site';

const screenshots: Record<string, {src:string; width:number; height:number; altEn:string; altPt:string}[]> = {
 hype: [
  {src:'/cases/hype-1.jpg',width:900,height:446,altEn:'Hype Games storefront with a featured digital game campaign',altPt:'Loja Hype Games com campanha de destaque de jogos digitais'},
  {src:'/cases/hype-2.jpg',width:900,height:444,altEn:'Hype Games product page with digital game gift card details',altPt:'Página de produto Hype Games com detalhes de gift card digital'}
 ],
 payments: [
  {src:'/cases/payhype-1.jpg',width:874,height:716,altEn:'PayHype payment methods and order summary interface',altPt:'Interface PayHype com métodos de pagamento e resumo do pedido'},
  {src:'/cases/payhype-2.jpg',width:799,height:800,altEn:'PayHype Pix checkout form and order summary',altPt:'Formulário de checkout Pix do PayHype e resumo de pedido'}
 ],
 microcommerce: [
  {src:'/cases/microcommerce-1.jpg',width:900,height:702,altEn:'Public white-label micro-commerce storefront example',altPt:'Exemplo público de vitrine de micro-e-commerce white-label'},
  {src:'/cases/microcommerce-2.jpg',width:900,height:654,altEn:'White-label micro-commerce product catalog',altPt:'Catálogo de produtos de micro-e-commerce white-label'}
 ]
};
type Params = {params:Promise<{locale:string;slug:string}>};
export function generateStaticParams(){return locales.flatMap(locale=>['hype','payments','microcommerce','pinhype'].map(slug=>({locale,slug})));}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {locale,slug}=await params;
 if(!locales.includes(locale as Locale))return {};
 const project=copy[locale as Locale].projects.find(p=>p.slug===slug);
 if(!project)return {};
 return {title:project.name+' | Caio Andrade',description:project.summary,
   alternates:{canonical:'/'+locale+'/projects/'+slug,languages:{en:'/en/projects/'+slug,'pt-BR':'/pt-br/projects/'+slug}}};
}
export default async function Project({params}:Params){
 const {locale,slug}=await params;
 if(!locales.includes(locale as Locale))notFound();
 const lang=locale as Locale,t=copy[lang],project=t.projects.find(p=>p.slug===slug);
 const gallery=screenshots[slug]||[];
 if(!project)notFound();
 return <><Header locale={lang}/><main className="wrap inner-page project-detail">
   <Link href={'/'+lang+'/projects'} className="text-link"><ArrowLeft size={17}/>{t.all}</Link>
   <SectionLabel>{t.work}</SectionLabel>
   <h1>{project.name}</h1>
   <p className="inner-lede">{project.sub}</p>
   <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
   {gallery.length > 0 && <div className="project-gallery" aria-label={lang==='en'?'Product screenshots':'Capturas dos produtos'}>
     {gallery.map((item,i)=><figure key={item.src}>
       <Image src={item.src} alt={lang==='en'?item.altEn:item.altPt} width={item.width} height={item.height} sizes="(max-width: 720px) 100vw, 50vw" />
       <figcaption>{lang==='en'?'Public interface example':'Exemplo de interface pública'} · {i+1}/{gallery.length}</figcaption>
     </figure>)}
   </div>}
   <div className="case-details">
     <section><h2>{t.overview}</h2><p>{project.overview}</p></section>
     <section><h2>{t.challenge}</h2><p>{project.challenge}</p></section>
     <section><h2>{t.contribution}</h2><p>{project.contribution}</p></section>
     <section><h2>{t.impact}</h2><p>{project.impact}</p></section>
     <section><h2>{t.caseLabels.features}</h2><ul className="feature-list">{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul></section>
     <section><h2>{t.caseLabels.architecture}</h2><div className="pattern-grid">
       <div><h3>{lang==='en'?'Technologies':'Tecnologias'}</h3><div className="tags">{project.technologies.map(item=><span key={item}>{item}</span>)}</div></div>
       <div><h3>{lang==='en'?'Practices & patterns':'Práticas e padrões'}</h3><div className="tags">{project.patterns.map(item=><span key={item}>{item}</span>)}</div></div>
     </div></section>
   </div>
   {slug==='hype'&&<a className="text-link" target="_blank" rel="noopener noreferrer" href="https://hype.games/br">{lang==='en'?'View public storefront':'Ver loja pública'}<ExternalLink size={16}/></a>}
   {slug==='microcommerce'&&<a className="text-link project-public-link" target="_blank" rel="noopener noreferrer" href="https://direct.levelup.com.br/gamescom">{lang==='en'?'Visit a public storefront example':'Ver exemplo público de loja'}<ExternalLink size={16}/></a>}
   <p className="rights-note">{t.caseLabels.rights} {t.caseLabels.image}</p>
   <ProjectNavigation locale={lang} slug={slug}/>
 </main><Footer locale={lang}/></>;
}
