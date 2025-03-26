import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../astro_03esds4C.mjs';
import { g as getCollection, e as getAllPosts, s as sortMDByDate, l as getUniqueTags, $ as $$CollectionPreview, a as $$Paginator } from './__Pn_eqc5M.mjs';
import { $ as $$Base } from './404_CAanZK12.mjs';
/* empty css                          */

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("post");
  const dates = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    const match = post.id.match(/.*-(\d{4})(\d{2})/);
    if (match) {
      dates.add(`${match[1]}/${match[2]}`);
    }
  });
  const sortedDates = Array.from(dates).sort().reverse();
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPosts);
  const pageSize = 10;
  const currentPage = 1;
  const totalPages = Math.ceil(allPostsByDate.length / pageSize);
  const paginatedPosts = allPostsByDate.slice(0, pageSize);
  const meta = {
    description: "Read my collection of posts and the things that interest me",
    title: "Posts"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta, "data-astro-cid-at4y73ej": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6" data-astro-cid-at4y73ej>blog 📝</h1> <div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8" data-astro-cid-at4y73ej> <section aria-label="Blog post list" data-astro-cid-at4y73ej> <ul class="space-y-8 text-start" data-astro-cid-at4y73ej> ${paginatedPosts.map((c) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full" data-astro-cid-at4y73ej> ${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "as": "h2", "item": c, "withDesc": true, "data-astro-cid-at4y73ej": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { "prevUrl": void 0, "nextUrl": currentPage < totalPages ? `/posts/${currentPage + 1}` : void 0, "data-astro-cid-at4y73ej": true })} </section> <aside data-astro-cid-at4y73ej> <h2 class="mb-4 flex items-center text-lg font-semibold" data-astro-cid-at4y73ej> <svg aria-hidden="true" class="mr-2 h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-at4y73ej> <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" data-astro-cid-at4y73ej></path> </svg>
Archive
</h2> <ul class="space-y-2" data-astro-cid-at4y73ej> ${sortedDates.map((date) => {
    const [year, month] = date.split("/");
    const displayDate = (/* @__PURE__ */ new Date(`${year}-${month}-01`)).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });
    return renderTemplate`<li data-astro-cid-at4y73ej> <a${addAttribute(`/posts/${year}/${month}`, "href")} class="hover:text-accent" data-astro-cid-at4y73ej> ${displayDate} </a> </li>`;
  })} </ul> ${!!uniqueTags.length && renderTemplate`<div class="mt-8" data-astro-cid-at4y73ej> <h2 class="mb-4 flex items-center text-lg font-semibold" data-astro-cid-at4y73ej> <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-at4y73ej> <path d="M0 0h24v24H0z" fill="none" stroke="none" data-astro-cid-at4y73ej></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" data-astro-cid-at4y73ej></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" data-astro-cid-at4y73ej></path> <path d="M6 9h-.01" data-astro-cid-at4y73ej></path> </svg>
Tags
</h2> <ul class="flex flex-wrap gap-2 text-bgColor" data-astro-cid-at4y73ej> ${uniqueTags.map((tag) => renderTemplate`<li data-astro-cid-at4y73ej> <a${addAttribute(`View all posts with the tag: ${tag}`, "aria-label")} class="flex items-center justify-center rounded-lg bg-accent p-1"${addAttribute(`/tags/${tag}/`, "href")} data-astro-cid-at4y73ej> ${tag} </a> </li>`)} </ul> <span class="mt-4 block sm:text-end" data-astro-cid-at4y73ej> <a aria-label="View all blog categories" class="sm:hover:text-accent" href="/tags/" data-astro-cid-at4y73ej>
View all →
</a> </span> </div>`} </aside> </div> ` })} `;
}, "D:/joe-website/src/pages/posts.astro", void 0);

const $$file = "D:/joe-website/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };
