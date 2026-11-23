import Link from 'next/link';
import Image from 'next/image';
import {ArrowRight,ArrowUpRight,ArrowLeft,Github,Mail,Linkedin,FileDown,Layers,Package,ShoppingBag,CreditCard} from 'lucide-react';
import {copy,type Locale} from '@/lib/content';
export function Header({locale}:{locale:Locale}){
 const t=copy[locale]; const base='/'+locale;
 return <header className="header wrap"><Link href={base} className="brand"><span className="brand-mark">CA.</span><span>Caio Andrade<small>Software Engineer</small></span></Link><nav><Link href={base+'/#top'}>{t.nav[0]}</Link><Link href={base+'/#work'}>{t.nav[1]}</Link><Link href={base+'/#experience'}>{t.nav[2]}</Link><Link href={base+'/#about'}>{t.nav[3]}</Link></nav><div className="header-actions"><div className="lang"><Link aria-current={locale==='en'?'page':undefined} href="/en">EN</Link><Link aria-current={locale==='pt-br'?'page':undefined} href="/pt-br">PT-BR</Link></div><a href="/cv/Caio_Andrade_CV.pdf" target="_blank" rel="noopener noreferrer" className="header-resume" aria-label={locale==='en'?'View résumé PDF':'Ver currículo PDF'}><FileDown size={17}/>{locale==='en'?'Résumé':'Currículo'}</a><a href="https://www.linkedin.com/in/caio-andrade-978baa92" target="_blank" rel="noopener noreferrer" className="header-linkedin" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:caioandradedevcontato@gmail.com" className="button primary header-contact">{t.contact}<ArrowUpRight size={15}/></a></div></header>;
}
export function Footer({locale}:{locale:Locale}){
 return <footer className="footer wrap"><span>© {new Date().getFullYear()} Caio Andrade</span><div className="social"><a href="/cv/Caio_Andrade_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label={locale==='en'?'Résumé PDF':'Currículo PDF'}><FileDown size={20}/></a><a href="https://www.linkedin.com/in/caio-andrade-978baa92" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a href="https://github.com/7505504" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="mailto:caioandradedevcontato@gmail.com" aria-label="Email"><Mail size={20}/></a></div><Link href={'/'+locale+'/#top'}>↑ Top</Link></footer>;
}
export function SectionLabel({children}:{children:React.ReactNode}){return <div className="section-label"><i/>{children}</div>}

const caseThumbnails:Record<string,string>={hype:'/cases/hype-1.jpg',payments:'/cases/payhype-1.jpg',microcommerce:'/cases/microcommerce-1.jpg'};
const cardIcons = [ShoppingBag, CreditCard, Layers, Package];
export function CaseCards({locale}:{locale:Locale}){
 const cards=copy[locale].projects;
 return <div className="case-grid">{cards.map((p,i)=>{
  const Icon=cardIcons[i];
  return <Link key={p.slug} href={'/'+locale+'/projects/'+p.slug} className={'case case-'+p.slug}>
    {caseThumbnails[p.slug]&&<span className="case-thumbnail"><Image src={caseThumbnails[p.slug]} width={900} height={520} alt="" sizes="(max-width: 720px) 100vw, 50vw" /></span>}
    <span className="case-symbol"><Icon size={24} strokeWidth={1.6}/></span>
    <div className="case-content">
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      <span className="case-tags">{p.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</span>
      <span className="case-link"><ArrowRight size={22}/></span>
    </div>
  </Link>;
 })}</div>;
}
export function ProjectNavigation({locale,slug}:{locale:Locale,slug:string}){
 const t=copy[locale],index=t.projects.findIndex(p=>p.slug===slug);
 const prev=index>0?t.projects[index-1]:null;
 const next=index>=0&&index<t.projects.length-1?t.projects[index+1]:null;
 return <nav className="project-navigation" aria-label="Case study navigation">
    <Link href={'/'+locale+'/projects'}><ArrowLeft size={17}/>{t.all}</Link>
    {prev&&<Link href={'/'+locale+'/projects/'+prev.slug}><ArrowLeft size={17}/>{t.previous}: {prev.name}</Link>}
    {next&&<Link href={'/'+locale+'/projects/'+next.slug}>{t.next}: {next.name}<ArrowRight size={17}/></Link>}
 </nav>;
}
