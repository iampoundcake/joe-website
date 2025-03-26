import { b as $$FormattedDate, g as getCollection } from './__Pn_eqc5M.mjs';
import { f as createComponent, e as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../astro_03esds4C.mjs';

const $$Astro = createAstro("https://itsjoescott.xyz");
const $$MediaLibraryPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MediaLibraryPreview;
  const { media } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="w-full p-2 md:w-1/2 lg:w-1/2"> <a class="block h-full rounded-2xl bg-[#FEC686] px-6 py-3 text-center text-black transition-transform hover:scale-105"${addAttribute(`/media-library/${media.slug}`, "href")}> <div class="mx-auto h-[200px] w-[200px]"> <img class="h-full w-full rounded-lg object-cover"${addAttribute(media.data.coverImage.src.src, "src")}${addAttribute(media.data.coverImage.alt, "alt")}${addAttribute(200, "width")}${addAttribute(200, "height")}> </div> <div class="mt-3 font-mono"> <h2 class="text-sm font-bold">${media.data.title}</h2> <p class="mt-2 text-sm"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": media.data.publishDate })} </p> ${media.data.tags.length > 0 && renderTemplate`<div class="mt-2 flex flex-wrap justify-center gap-2"> ${media.data.tags.map((tag) => renderTemplate`<span class="rounded-md bg-[#5D6B00] px-2 py-1 text-xs text-[#FFFFFF]">${tag}</span>`)} </div>`} <p class="mt-2 text-xs italic">${media.data.description}</p> </div> </a> </li>`;
}, "D:/joe-website/src/components/MediaLibraryPreview.astro", void 0);

const GET = async ({ url }) => {
  const start = parseInt(new URL(url).searchParams.get("start") || "0");
  const limit = 6;
  try {
    const mediaEntries = await getCollection("media-library", ({ data }) => !data.draft);
    const sortedEntries = mediaEntries.sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );
    const nextEntries = sortedEntries.slice(start, start + limit);
    const html = await Promise.all(
      nextEntries.map(async (entry) => {
        const component = await $$MediaLibraryPreview.render({ media: entry });
        return component.toString();
      })
    );
    return new Response(JSON.stringify({ html: html.join("") }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load media" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export { GET };
