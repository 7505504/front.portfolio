import type { MetadataRoute } from 'next';
const slugs=['hype','payments','microcommerce','pinhype'];
export default function sitemap():MetadataRoute.Sitemap{const host='https://caioandradedev.vercel.app';return ['en','pt-br'].flatMap(locale=>['','/projects',...slugs.map(slug=>'/projects/'+slug)].map(path=>({url:host+'/'+locale+path})));}
