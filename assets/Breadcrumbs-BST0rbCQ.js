import{h as n,j as a,L as c}from"./index-CgJueflh.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function l({items:s}){return a.jsx("nav",{"aria-label":"Breadcrumb",className:"flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-muted",children:s.map((e,r)=>{const t=r===s.length-1;return a.jsxs("span",{className:"flex items-center gap-2",children:[e.path&&!t?a.jsx(c,{to:e.path,className:"transition-colors hover:text-accent",children:e.name}):a.jsx("span",{className:t?"text-bone":"","aria-current":t?"page":void 0,children:e.name}),!t&&a.jsx(m,{size:12,className:"text-faint"})]},e.path)})})}export{l as B};
