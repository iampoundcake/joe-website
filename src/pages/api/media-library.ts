import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import MediaLibraryPreview from "@/components/MediaLibraryPreview.astro";

export const GET: APIRoute = async ({ url }) => {
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
        const component = await MediaLibraryPreview.render({ media: entry });
        return component.toString();
      })
    );

    return new Response(JSON.stringify({ html: html.join("") }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load media" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}; 