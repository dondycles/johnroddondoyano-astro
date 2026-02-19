import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Ck-5GLNg.mjs';
import { manifest } from './manifest_CJDbZvt3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/web-development.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/web-development.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "34e938b4-9ab2-434f-8914-af35b7f7754f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
