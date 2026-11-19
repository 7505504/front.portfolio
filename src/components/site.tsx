import Link from 'next/link';
import {ArrowRight,ArrowUpRight,ArrowLeft,Github,Mail} from 'lucide-react';
import {copy,type Locale} from '@/lib/content';
export function Header({locale}:{locale:Locale}){
 const t=copy[locale]; const base='/'+locale;
 return <header className="header wrap"><Link href={base} className="brand"><span className="brand-mark">CA.</span><span>Caio Andrade<small>Software Engineer</small></span></Link><nav><Link href={base+'/#top'}>{t.nav[0]}</Link><Link href={base+'/#work'}>{t.nav[1]}</Link><Link href={base+'/#experience'}>{t.nav[2]}</Link><Link href={base+'/#about'}>{t.nav[3]}</Link></nav><div className="header-actions"><div className="lang"><Link aria-current={locale==='en'?'page':undefined} href="/en">EN</Link><Link aria-current={locale==='pt-br'?'page':undefined} href="/pt-br">PT-BR</Link></div><a href="mailto:caioandradedevcontato@gmail.com" className="button primary header-contact">{t.contact}<ArrowUpRight size={15}/></a></div></header>;
}
export function Footer({locale}:{locale:Locale}){
 return <footer className="footer wrap"><span>© {new Date().getFullYear()} Caio Andrade</span><div className="social"><a href="https://github.com/7505504" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="mailto:caioandradedevcontato@gmail.com" aria-label="Email"><Mail size={20}/></a></div><Link href={'/'+locale+'/#top'}>↑ Top</Link></footer>;
}
export function SectionLabel({children}:{children:React.ReactNode}){return <div className="section-label"><i/>{children}</div>}
export function CaseCards({locale}:{locale:Locale}){
 return <div className="case-grid">{copy[locale].projects.map((p,i)=><Link key={p.slug} href={'/'+locale+'/projects/'+p.slug} className={'case case-'+p.slug}><span className="case-symbol">{i===0?'▣':'◇'}</span><div><h3>{p.name}</h3><p>{p.summary}</p><ArrowRight size={22}/></div><span className="case-visual" aria-hidden="true"/></Link>)}</div>;
}
export function ProjectNavigation({locale,slug}:{locale:Locale,slug:string}){
 const t=copy[locale],other=t.projects.find(p=>p.slug!==slug);
 return <div className="project-navigation"><Link href={'/'+locale+'/projects'}><ArrowLeft size={17}/>{t.all}</Link>{other&&<Link href={'/'+locale+'/projects/'+other.slug}>{t.next}: {other.name}<ArrowRight size={17}/></Link>}</div>;
}
