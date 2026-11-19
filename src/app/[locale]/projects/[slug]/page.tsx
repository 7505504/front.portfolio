import Link from 'next/link';
import {ArrowLeft,ExternalLink} from 'lucide-react';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {copy,locales,type Locale} from '@/lib/content';
import {Header,Footer,SectionLabel,ProjectNavigation} from '@/components/site';

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
 if(!project)notFound();
 return <><Header locale={lang}/><main className="wrap inner-page project-detail">
   <Link href={'/'+lang+'/projects'} className="text-link"><ArrowLeft size={17}/>{t.all}</Link>
   <SectionLabel>{t.work}</SectionLabel>
   <h1>{project.name}</h1>
   <p className="inner-lede">{project.sub}</p>
   <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
   <div className={'project-banner banner-'+slug} role="img" aria-label={project.sub}>
     <span aria-hidden="true">{slug==='hype'?'HYPE':slug==='payments'?'PAYHYPE':slug==='microcommerce'?'B2B':'PINHYPE'}</span>
   </div>
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
   <p className="rights-note">{t.caseLabels.rights} {t.caseLabels.image}</p>
   <ProjectNavigation locale={lang} slug={slug}/>
 </main><Footer locale={lang}/></>;
}
