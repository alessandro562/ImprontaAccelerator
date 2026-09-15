import type { APIRoute } from 'astro';

/**
 * Endpoint dinamico: la riga `Sitemap:` è un URL assoluto che cambia tra
 * GitHub Pages (con base path) e un eventuale dominio custom.
 *
 * Nota: su un project site GitHub Pages i crawler leggono solo
 * `https://<utente>.github.io/robots.txt`, che appartiene allo user site.
 * Questo file diventa realmente efficace con il dominio custom; nel frattempo
 * la sitemap va sottomessa a mano in Search Console.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site).toString();
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
