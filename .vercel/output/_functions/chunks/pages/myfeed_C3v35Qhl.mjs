import { f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_03esds4C.mjs';
import { $ as $$Base } from './404_CAanZK12.mjs';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Feed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section> <a class="mastodon-feed" href="https://mastodon.social/@poundcake" data-toot-limit="6">
a mad man's brain dump.
</a> </section> <script type="module" src="https://esm.sh/emfed@1"><\/script>`])), maybeRenderHead());
}, "D:/joe-website/src/components/feed.astro", void 0);

const $$Myfeed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Home" }, "data-astro-cid-ppjgdq3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-ppjgdq3o>  <h1 class="title mb-6" data-astro-cid-ppjgdq3o>live feed 📃</h1> <p class="mb-4" data-astro-cid-ppjgdq3o>
this is just a reference for me to look at when i am further building out this site, or things to consider for my projects. i would not recommend following.
</p> </section> <main style="display: flex; justify-content: center; width: 100%;" data-astro-cid-ppjgdq3o> ${renderComponent($$result2, "Feed", $$Feed, { "data-astro-cid-ppjgdq3o": true })} </main> ` })}`;
}, "D:/joe-website/src/pages/myfeed.astro", void 0);

const $$file = "D:/joe-website/src/pages/myfeed.astro";
const $$url = "/myfeed";

export { $$Myfeed as default, $$file as file, $$url as url };
