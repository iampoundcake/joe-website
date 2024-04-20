import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft media library based on the environment */
export async function getAllMediaLibrary() {
    return await getCollection("media-library", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
}

export function sortMDByDate(mediaLibrary: Array<CollectionEntry<"media-library">>) {
    return mediaLibrary.sort((a, b) => {
        const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
        const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
        return bDate - aDate;
    });
}

/** Note: This function doesn't filter draft media library, pass it the result of getAllMediaLibrary above to do so. */
export function getAllTags(mediaLibrary: Array<CollectionEntry<"media-library">>) {
    return mediaLibrary.flatMap((t) => [...t.data.tags]);
}

/** Note: This function doesn't filter draft media library, pass it the result of getAllMediaLibrary above to do so. */
export function getUniqueTags(mediaLibrary: Array<CollectionEntry<"media-library">>) {
    return [...new Set(getAllTags(mediaLibrary))];
}

/** Note: This function doesn't filter draft media library, pass it the result of getAllMediaLibrary above to do so. */
export function getUniqueTagsWithCount(
    mediaLibrary: Array<CollectionEntry<"media-library">>,
): Array<[string, number]> {
    return [
        ...getAllTags(mediaLibrary).reduce(
            (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
            new Map<string, number>(),
        ),
    ].sort((a, b) => b[1] - a[1]);
}
