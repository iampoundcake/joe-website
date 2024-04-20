import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft training based on the environment */
export async function getAllTraining() {
	return await getCollection("training", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDate(training: Array<CollectionEntry<"training">>) {
	return training.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft training, pass it the result of getAllTraining above to do so. */
export function getAllTags(training: Array<CollectionEntry<"training">>) {
	return training.flatMap((t) => [...t.data.tags]);
}

/** Note: This function doesn't filter draft training, pass it the result of getAllTraining above to do so. */
export function getUniqueTags(training: Array<CollectionEntry<"training">>) {
	return [...new Set(getAllTags(training))];
}

/** Note: This function doesn't filter draft training, pass it the result of getAllTraining above to do so. */
export function getUniqueTagsWithCount(
	training: Array<CollectionEntry<"training">>,
): Array<[string, number]> {
	return [
		...getAllTags(training).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
