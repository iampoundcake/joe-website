import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft garden based on the environment */
export async function getAllGarden() {
    return await getCollection("garden", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
}

export function sortMDByDate(garden: Array<CollectionEntry<"garden">>) {
    return garden.sort((a, b) => {
        const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
        const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
        return bDate - aDate;
    });
}

/** Note: This function doesn't filter draft garden, pass it the result of getAllGarden above to do so. */
export function getAllTags(garden: Array<CollectionEntry<"garden">>) {
    return garden.flatMap((g) => [...g.data.tags]);
}

/** Note: This function doesn't filter draft garden, pass it the result of getAllGarden above to do so. */
export function getUniqueTags(garden: Array<CollectionEntry<"garden">>) {
    return [...new Set(getAllTags(garden))];
}

/** Note: This function doesn't filter draft garden, pass it the result of getAllGarden above to do so. */
export function getUniqueTagsWithCount(
    garden: Array<CollectionEntry<"garden">>,
): Array<[string, number]> {
    return [
        ...getAllTags(garden).reduce(
            (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
            new Map<string, number>(),
        ),
    ].sort((a, b) => b[1] - a[1]);
}
