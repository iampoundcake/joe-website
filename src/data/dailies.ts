import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft dailies based on the environment */
export async function getAllDailies() {
	return await getCollection("dailies", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDate(dailies: Array<CollectionEntry<"dailies">>) {
	return dailies.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft dailies, pass it the result of getAllDailies above to do so. */
export function getAllTags(dailies: Array<CollectionEntry<"dailies">>) {
	return dailies.flatMap((daily) => [...daily.data.tags]);
}

/** Note: This function doesn't filter draft dailies, pass it the result of getAllDailies above to do so. */
export function getUniqueTags(dailies: Array<CollectionEntry<"dailies">>) {
	return [...new Set(getAllTags(dailies))];
}

/** Note: This function doesn't filter draft dailies, pass it the result of getAllDailies above to do so. */
export function getUniqueTagsWithCount(
	dailies: Array<CollectionEntry<"dailies">>,
): Array<[string, number]> {
	return [
		...getAllTags(dailies).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
