import { f as createComponent, e as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../astro_03esds4C.mjs';
import { g as getCollection, $ as $$CollectionPreview, a as $$Paginator } from './__Pn_eqc5M.mjs';
import { $ as $$Base } from './404_CAanZK12.mjs';
/* empty css                            */

const $$Astro$2 = createAstro("https://itsjoescott.xyz");
async function getStaticPaths$2() {
  const posts = await getCollection("dailies");
  const dates = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    const match = post.id.match(/.*-(\d{4})(\d{2})/);
    if (match) {
      dates.add(`${match[1]}/${match[2]}`);
    }
  });
  return Array.from(dates).map((date) => {
    const [year, month] = date.split("/");
    return { params: { year, month } };
  });
}
const $$month$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$month$2;
  const { year, month } = Astro2.params;
  const posts = await getCollection("dailies", (post) => {
    const match = post.id.match(/.*-(\d{4})(\d{2})/);
    return match && match[1] === year && match[2] === month;
  });
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const monthYear = (/* @__PURE__ */ new Date(`${year}-${month}-01`)).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: monthYear } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">Posts from ${monthYear}</h1> <ul class="space-y-4"> ${sortedPosts.map((post) => renderTemplate`<li> <a${addAttribute(`/dailies/${post.slug}`, "href")}>${post.data.title}</a> </li>`)} </ul> ` })}`;
}, "D:/joe-website/src/pages/blog/[year]/[month].astro", void 0);

const $$file$2 = "D:/joe-website/src/pages/blog/[year]/[month].astro";
const $$url$2 = "/blog/[year]/[month]";

const _month_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$month$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://itsjoescott.xyz");
async function getStaticPaths$1() {
  const posts = await getCollection("post");
  const pageSize = 10;
  const dates = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    const match = post.id.match(/.*-(\d{4})(\d{2})/);
    if (match) {
      dates.add(`${match[1]}/${match[2]}`);
    }
  });
  const sortedDates = Array.from(dates).sort();
  const paths = [];
  sortedDates.forEach((date, index) => {
    const [year, month] = date.split("/");
    const prevDate = index > 0 ? sortedDates[index - 1].split("/") : null;
    const nextDate = index < sortedDates.length - 1 ? sortedDates[index + 1].split("/") : null;
    const monthPosts = posts.filter((post) => {
      const match = post.id.match(/.*-(\d{4})(\d{2})/);
      return match && match[1] === year && match[2] === month;
    }).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
    const totalPages = Math.ceil(monthPosts.length / pageSize);
    for (let page = 1; page <= totalPages; page++) {
      const pageSlice = monthPosts.slice((page - 1) * pageSize, page * pageSize);
      paths.push({
        params: { year, month, page: page === 1 ? void 0 : page },
        props: {
          posts: pageSlice,
          totalPages,
          currentPage: page,
          year,
          month,
          prevMonth: prevDate ? { year: prevDate[0], month: prevDate[1] } : null,
          nextMonth: nextDate ? { year: nextDate[0], month: nextDate[1] } : null
        }
      });
    }
  });
  return paths;
}
const $$month$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$month$1;
  const { posts, totalPages, currentPage, year, month, prevMonth, nextMonth } = Astro2.props;
  const displayDate = (/* @__PURE__ */ new Date(`${year}-${month}-01`)).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });
  const meta = {
    title: `Posts from ${displayDate}`,
    description: `Archive of posts from ${displayDate}`
  };
  const paginationBase = `/posts/${year}/${month}`;
  function getMonthDisplay(year2, month2) {
    return (/* @__PURE__ */ new Date(`${year2}-${month2}-01`)).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta, "data-astro-cid-o5vfq2si": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6" data-astro-cid-o5vfq2si> <div class="flex items-center justify-between" data-astro-cid-o5vfq2si> <h1 class="title" data-astro-cid-o5vfq2si>Posts from ${displayDate}</h1> <div class="flex items-center gap-4" data-astro-cid-o5vfq2si> ${prevMonth && renderTemplate`<a${addAttribute(`/posts/${prevMonth.year}/${prevMonth.month}`, "href")} class="hover:text-accent-dark flex items-center gap-1 text-accent"${addAttribute(`View posts from ${getMonthDisplay(prevMonth.year, prevMonth.month)}`, "title")} data-astro-cid-o5vfq2si> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-o5vfq2si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-o5vfq2si></path> </svg> </a>`} ${nextMonth && renderTemplate`<a${addAttribute(`/posts/${nextMonth.year}/${nextMonth.month}`, "href")} class="hover:text-accent-dark flex items-center gap-1 text-accent"${addAttribute(`View posts from ${getMonthDisplay(nextMonth.year, nextMonth.month)}`, "title")} data-astro-cid-o5vfq2si> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-o5vfq2si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-o5vfq2si></path> </svg> </a>`} </div> </div> <ul class="space-y-8 text-start" data-astro-cid-o5vfq2si> ${posts.map((post) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full" data-astro-cid-o5vfq2si> ${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "as": "h2", "item": post, "withDesc": true, "data-astro-cid-o5vfq2si": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { "prevUrl": currentPage > 1 ? currentPage === 2 ? paginationBase : `${paginationBase}/${currentPage - 1}` : void 0, "nextUrl": currentPage < totalPages ? `${paginationBase}/${currentPage + 1}` : void 0, "data-astro-cid-o5vfq2si": true })} </div> ` })} `;
}, "D:/joe-website/src/pages/posts/[year]/[month].astro", void 0);

const $$file$1 = "D:/joe-website/src/pages/posts/[year]/[month].astro";
const $$url$1 = "/posts/[year]/[month]";

const _month_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$month$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://itsjoescott.xyz");
async function getStaticPaths() {
  const training = await getCollection("training");
  const dates = /* @__PURE__ */ new Set();
  training.forEach((entry) => {
    const match = entry.id.match(/training-log-\d+-(\d{4})(\d{2})/);
    if (match) {
      dates.add(`${match[1]}/${match[2]}`);
    }
  });
  return Array.from(dates).map((date) => {
    const [year, month] = date.split("/");
    return { params: { year, month } };
  });
}
const $$month = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$month;
  const { year, month } = Astro2.params;
  const entries = await getCollection("training", (entry) => {
    const match = entry.id.match(/training-log-\d+-(\d{4})(\d{2})/);
    return match && match[1] === year && match[2] === month;
  });
  const sortedEntries = entries.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const monthYear = (/* @__PURE__ */ new Date(`${year}-${month}-01`)).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: monthYear } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">Training from ${monthYear}</h1> <ul class="space-y-4"> ${sortedEntries.map((entry) => renderTemplate`<li> <a${addAttribute(`/training/${entry.slug}`, "href")}>${entry.data.title}</a> </li>`)} </ul> ` })}`;
}, "D:/joe-website/src/pages/training/[year]/[month].astro", void 0);

const $$file = "D:/joe-website/src/pages/training/[year]/[month].astro";
const $$url = "/training/[year]/[month]";

const _month_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$month,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _month_$2 as _, _month_$1 as a, _month_ as b };
