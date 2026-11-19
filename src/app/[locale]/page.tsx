import Link from 'next/link';
import {ArrowRight,ArrowUpRight} from 'lucide-react';
import {notFound} from 'next/navigation';
import {copy,locales,type Locale} from '@/lib/content';
import {Header,Footer,CaseCards,SectionLabel} from '@/components/site';
export default async function Home({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();
 const lang=locale as Locale,t=copy[lang];
 return <><Header locale={lang}/><main id="top">
 <section className="hero wrap"><div className="halo" aria-hidden="true"/><div className="hero-copy"><p className="location"><span className="dot"/> {t.location}</p><h1>{t.hero[0]}<br/>{t.hero[1]}<br/><em>{t.hero[2]}</em></h1><p className="lede">{t.intro}</p><div className="actions"><Link href={'/'+lang+'/#work'} className="button primary">{lang==='en'?'Explore my work':'Ver projetos'}<ArrowUpRight size={18}/></Link><a href="mailto:caioandradedevcontato@gmail.com" className="button outline">{t.contact}<ArrowRight size={18}/></a></div></div></section>
 <div className="wrap"><div className="separator"/></div>
 <section className="section wrap" id="work"><div className="section-top"><div><SectionLabel>{t.work}</SectionLabel><h2>{t.workTitle}</h2></div><Link href={'/'+lang+'/projects'} className="text-link">{t.all}<ArrowRight size={17}/></Link></div><CaseCards locale={lang}/></section>
 <section className="section wrap dual" id="experience"><div><SectionLabel>{t.exp}</SectionLabel><h2>{t.expTitle}</h2><div className="timeline">{t.roles.map((r,i)=><article className="timeline-entry" key={i}><h3>{r[0]}</h3><div className="date">Level Up Latam · {r[1]}</div><p>{r[2]}</p></article>)}</div></div><div><SectionLabel>{t.stack}</SectionLabel><h2>{t.stackTitle}</h2><div className="stack">{t.groups.map(g=><div className="stack-item" key={g[0]}><h3>{g[0]}</h3><p>{g[1]}</p></div>)}</div></div></section>
 <section className="section wrap" id="ai"><div className="ai-panel"><SectionLabel>{t.ai}</SectionLabel><h2>{t.aiTitle}</h2><p>{t.aiBody}</p><div className="tags">{['GitHub Copilot','Claude Code','SDD','Code Review','TDD'].map(x=><span key={x}>{x}</span>)}</div></div></section>
 <section className="section wrap" id="about"><div className="about-card"><div className="monogram" aria-hidden="true">CA.</div><div><SectionLabel>{t.about}</SectionLabel><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p><a href="mailto:caioandradedevcontato@gmail.com" className="text-link">{t.contact}<ArrowUpRight size={17}/></a></div></div></section>
 </main><Footer locale={lang}/></>;
}
