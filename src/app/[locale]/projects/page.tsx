import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {notFound} from 'next/navigation';
import {copy,locales,type Locale} from '@/lib/content';
import {Header,Footer,CaseCards,SectionLabel} from '@/components/site';
export default async function Projects({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();const lang=locale as Locale,t=copy[lang];
 return <><Header locale={lang}/><main className="wrap inner-page"><Link className="text-link" href={'/'+lang}><ArrowLeft size={17}/>{t.back}</Link><SectionLabel>{t.work}</SectionLabel><h1>{t.all}</h1><p className="inner-lede">{t.workTitle}</p><CaseCards locale={lang}/></main><Footer locale={lang}/></>;
}
