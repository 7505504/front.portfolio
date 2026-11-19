import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {notFound} from 'next/navigation';
import {copy,locales,type Locale} from '@/lib/content';
import {Header,Footer,SectionLabel,ProjectNavigation} from '@/components/site';
export function generateStaticParams(){return locales.flatMap(locale=>['payments','ecommerce'].map(slug=>({locale,slug})));}
export default async function Project({params}:{params:Promise<{locale:string;slug:string}>}){
 const {locale,slug}=await params;if(!locales.includes(locale as Locale))notFound();const lang=locale as Locale,t=copy[lang];const project=t.projects.find(x=>x.slug===slug);if(!project)notFound();
 return <><Header locale={lang}/><main className="wrap inner-page"><Link href={'/'+lang+'/projects'} className="text-link"><ArrowLeft size={17}/>{t.all}</Link><SectionLabel>{t.work}</SectionLabel><h1>{project.name}</h1><p className="inner-lede">{project.sub}</p><div className="tags">{project.tags.map(x=><span key={x}>{x}</span>)}</div><div className={'project-banner banner-'+slug} aria-hidden="true"><span>{slug==='payments'?'▣':'◇'}</span></div><div className="case-details">{([[t.overview,project.overview],[t.challenge,project.challenge],[t.contribution,project.contribution],[t.impact,project.impact]] as const).map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}</div><ProjectNavigation locale={lang} slug={slug}/></main><Footer locale={lang}/></>;
}
