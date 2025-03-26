import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../astro_03esds4C.mjs';
import { $ as $$Base } from './404_CAanZK12.mjs';
import { e as getAllPosts, f as getAllWeeklies, h as getAllGarden, i as getAllTraining, j as getAllMediaLibrary, k as getUniqueTagsWithCount, s as sortMDByDate, $ as $$CollectionPreview } from './__Pn_eqc5M.mjs';
import { $ as $$Icon } from './_slug__DybrF6kF.mjs';

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allWeeklies = await getAllWeeklies();
  const allGarden = await getAllGarden();
  const allTraining = await getAllTraining();
  const allMediaLibrary = await getAllMediaLibrary();
  const allTags = getUniqueTagsWithCount([
    ...allPosts,
    ...allWeeklies,
    ...allGarden,
    ...allTraining,
    ...allMediaLibrary
  ]);
  const meta = {
    description: "A list of all the topics I've written about in my collections",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">Tags</h1> <ul class="space-y-4"> ${allTags.map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2"> <a class="cactus-link inline-block" data-astro-prefetch${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View with the tag: ${tag}`, "title")}>
&#35;${tag} </a> <span class="inline-block">
- ${val} Article${val > 1 && "s"} </span> </li>`)} </ul> ` })}`;
}, "D:/joe-website/src/pages/tags/index.astro", void 0);

const $$file$1 = "D:/joe-website/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      friendlyName: "Github",
      link: "https://github.com/iampoundcake",
      name: "mdi:github"
    },
    {
      friendlyName: "LinkedIn",
      link: "https://www.linkedin.com/in/itsjoescott",
      name: "mdi:linkedin"
    },
    {
      friendlyName: "Mastodon",
      link: "https://mastodon.social/@poundcake",
      name: "mdi:mastodon"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-2"> <p>other stuff ⟶</p> <ul class="flex flex-1 items-center gap-x-2 sm:flex-initial"> ${socialLinks.map(({ friendlyName, isWebmention, link, name }) => renderTemplate`<li class="flex"> <a class="inline-block p-1 sm:hover:text-link"${addAttribute(link, "href")}${addAttribute(`noopener noreferrer ${isWebmention ? "me authn" : ""}`, "rel")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "aria-hidden": "true", "class": "h-6 w-6", "focusable": "false", "name": name })} <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "D:/joe-website/src/components/SocialList.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Home" } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title mb-6">welcome 👋</h1> <p class="mb-4">
you've stumbled upon my (joe's) online commonplace. this is an area where i log, park, and
			expand upon ideas and thoughts that linger. <br><br>
please visit my garden/personal wiki <a style="color:#fec686" href="/garden/">HERE</a>. <br><br>thanks for stopping by.
</p> ${renderComponent($$result2, "SocialList", $$SocialList, {})} </section> <section aria-label="Blog post list" class="mt-16"> <h2 class="title mb-4 text-xl">posts 📓</h2> <ul class="space-y-4"> ${allPostsByDate.map((c) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "item": c })} </li>`)} </ul> </section> <section class="mt-16"> <h1 class="title mb-6">book challenge 📖</h1> <p>2024 list <a style="color:#fec686" href="/post/book-challenge">here.</a></p><br> <table> <tr> <td class="column1">books read</td> <td class="column2">12</td> </tr> <tr> <td class="column1">current</td> <td class="column2">Fourth Wing (#1 The Empyrean), Rebecca Yarros</td> </tr> <tr> <td class="column1">up next</td> <td class="column2">undecided</td> </tr> </table> </section> <section class="mt-16"> <h2 class="title mb-4 text-xl">current 📌</h2> <table> <tr> <td class="column1">version</td> <td class="column2">1.0.1 alpha</td> </tr> <tr> <td class="column1">alias</td> <td class="column2">poundcake</td> </tr> <tr> <td class="column1">location</td> <td class="column2">new jersey</td> </tr> <tr> <td class="column1"><a style="color:#fec686" href="/resume">work 👈</a></td> <td class="column2">marketing manager @ investment advisory/management firm</td> </tr> <tr> <td class="column1">writing stack</td> <td class="column2">lamy safari fountain pen / sailor #16 night dream / lechtturm 1917</td> </tr> <tr> <td class="column1">planner</td> <td class="column2">hobonichi techo cousin (a5)</td> </tr><tr> <td class="column1">obsession</td> <td class="column2">tek it - cafuné</td> </tr> </table> </section> ` })}`;
}, "D:/joe-website/src/pages/index.astro", void 0);

const $$file = "D:/joe-website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
