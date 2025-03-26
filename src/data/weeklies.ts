import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft weeklies based on the environment */
export async function getAllWeeklies() {
	return await getCollection("weeklies", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDate(weeklies: Array<CollectionEntry<"weeklies">>) {
	return weeklies.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft weeklies, pass it the result of getAllWeeklies above to do so. */
export function getAllTags(weeklies: Array<CollectionEntry<"weeklies">>) {
	return weeklies.flatMap((weekly) => [...weekly.data.tags]);
}

/** Note: This function doesn't filter draft weeklies, pass it the result of getAllWeeklies above to do so. */
export function getUniqueTags(weeklies: Array<CollectionEntry<"weeklies">>) {
	return [...new Set(getAllTags(weeklies))];
}

/** Note: This function doesn't filter draft weeklies, pass it the result of getAllWeeklies above to do so. */
export function getUniqueTagsWithCount(
	weeklies: Array<CollectionEntry<"weeklies">>
): Array<[string, number]> {
	return [
		...getAllTags(weeklies).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>()
		),
	].sort((a, b) => b[1] - a[1]);
}
