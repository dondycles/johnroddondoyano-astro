import { o as decodeKey } from './chunks/astro/server_C3miGVYS.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_0eGwKvAZ.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_nGrP53rC.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/dev/johnroddondoyano-astro/","cacheDir":"file:///D:/dev/johnroddondoyano-astro/node_modules/.astro/","outDir":"file:///D:/dev/johnroddondoyano-astro/dist/","srcDir":"file:///D:/dev/johnroddondoyano-astro/src/","publicDir":"file:///D:/dev/johnroddondoyano-astro/public/","buildClientDir":"file:///D:/dev/johnroddondoyano-astro/dist/client/","buildServerDir":"file:///D:/dev/johnroddondoyano-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"web-development/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/web-development","isIndex":false,"type":"page","pattern":"^\\/web-development\\/?$","segments":[[{"content":"web-development","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/web-development.astro","pathname":"/web-development","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"site":"https://johnroddondoyano.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/dev/johnroddondoyano-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/dev/johnroddondoyano-astro/src/pages/web-development.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/web-development@_@astro":"pages/web-development.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CJDbZvt3.mjs","D:/dev/johnroddondoyano-astro/node_modules/.pnpm/astro@5.17.1_@types+node@24_7fd4584ae3b415975df63f0b4329c627/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_8e1-A8Bc.mjs","lucide-react":"_astro/_astro-entry_lucide-react.eo4vyO8N.js","@/components/FormWithRecaptcha":"_astro/FormWithRecaptcha.DqSYISe0.js","@/components/ui/sonner":"_astro/sonner.BR05sbM5.js","react-icons/tb":"_astro/tb.ChzduL6Z.js","@astrojs/react/client.js":"_astro/client.CJ2mfJId.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/google-sans-flex-nushu-400-normal.jz6krS4Y.woff2","/_astro/google-sans-flex-vietnamese-400-normal.C2MH6lqP.woff2","/_astro/google-sans-flex-symbols-400-normal.DlyfKEZy.woff2","/_astro/google-sans-flex-latin-400-normal.BVieJp-T.woff2","/_astro/google-sans-flex-latin-ext-400-normal.BxxU3kic.woff2","/_astro/google-sans-flex-math-400-normal.i3q9pxMf.woff2","/_astro/google-sans-flex-vietnamese-400-normal.Btqe7-5R.woff","/_astro/google-sans-flex-latin-ext-400-normal.B5EdjTsh.woff","/_astro/google-sans-flex-nushu-400-normal.BvnEn2KF.woff","/_astro/google-sans-flex-latin-400-normal.4TWk-uPb.woff","/_astro/google-sans-flex-symbols-400-normal.7PrI1EOM.woff","/_astro/google-sans-flex-math-400-normal.40WoLksJ.woff","/_astro/index.CPdmr1zV.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/JRLOGO-black.gif","/JRLOGO-transparent-black.webp","/JRLOGO-transparent-white.webp","/JRLOGO-white.gif","/JRLOGO.webp","/robots.txt","/site.webmanifest","/summary-new.png","/transparent-logo.png","/_astro/client.CJ2mfJId.js","/_astro/createLucideIcon.CtVFhDUJ.js","/_astro/FormWithRecaptcha.DqSYISe0.js","/_astro/index.6otl1p8d.js","/_astro/index.71xa6xuy.js","/_astro/index.CGqfUJ1b.js","/_astro/sonner.BR05sbM5.js","/_astro/tb.ChzduL6Z.js","/_astro/_astro-entry_lucide-react.eo4vyO8N.js","/web-development/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"C9a8BzGNSG5d56WjBgiUoBcioMJ1kPpdGZAsXvQRkbk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
