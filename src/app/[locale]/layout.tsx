import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
export function generateStaticParams(){return [{locale:'en'},{locale:'pt-br'}];}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return {alternates:{canonical:'/'+locale,languages:{en:'/en','pt-BR':'/pt-br'}}};}
export default async function Layout({children,params}:{children:React.ReactNode,params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','pt-br'].includes(locale))notFound();return children;}