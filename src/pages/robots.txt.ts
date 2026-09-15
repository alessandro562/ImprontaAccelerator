import type { APIRoute } from 'astro';
import { INDEXABLE } from '../config';

/**
 * Endpoint dinamico per due motivi: la riga `Sitemap:` è un URL assoluto che
 * cambia tra GitHub Pages (con base path) e un eventuale dominio custom, e il
 * contenuto dipende da INDEXABLE.
 *
 * Nota: su un project site GitHub Pages i crawler leggono solo
 * `https://<utente>.github.io/robots.txt`, che appartiene allo user site.
 * Questo file diventa realmente efficace con il dominio custom; il `noindex`
 * nel <head> invece vale già adesso, ed è quello che conta.
 */
export const GET: APIRoute = ({ site }) => {
  const body = INDEXABLE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site)}\n`
    // Un robots.txt che vieta tutto non ha senso se poi annuncia la sitemap.
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
