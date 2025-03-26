import { A as AstroError, n as UnknownContentCollectionError, f as createComponent, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, i as renderComponent, r as renderTemplate, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, j as Fragment } from '../astro_03esds4C.mjs';
import { s as siteConfig, $ as $$Base } from './404_CAanZK12.mjs';
import * as fs from 'node:fs';
import { AsyncResource } from 'async_hooks';
import { p as prependForwardSlash } from '../astro/assets-service_DXJkVnNF.mjs';

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	* drain() {
		while (this.#head) {
			yield this.dequeue();
		}
	}
}

function pLimit(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (function_, resolve, arguments_) => {
		activeCount++;

		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		queue.enqueue(
			AsyncResource.bind(run.bind(undefined, function_, resolve, arguments_)),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
	});

	return generator;
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://itsjoescott.xyz", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/dailies/2024-04-21/index.md": () => import('../index_BHvozPLP.mjs'),"/src/content/dailies/2024-04-22/index.md": () => import('../index_CM0m3MuF.mjs'),"/src/content/dailies/2024-04-23/index.md": () => import('../index_DuoJWYU6.mjs'),"/src/content/dailies/2024-04-24/index.md": () => import('../index_DJ7TtML7.mjs'),"/src/content/dailies/2024-04-25/index.md": () => import('../index_C2K_Hz23.mjs'),"/src/content/dailies/2024-04-26/index.md": () => import('../index_5qtlINZn.mjs'),"/src/content/dailies/2024-04-27/index.md": () => import('../index_b3yt2olM.mjs'),"/src/content/dailies/2024-04-28/index.md": () => import('../index_nN9t_stM.mjs'),"/src/content/dailies/2024-04-29/index.md": () => import('../index_BHPXN31c.mjs'),"/src/content/dailies/2024-04-30/index.md": () => import('../index_D7YGga5I.mjs'),"/src/content/dailies/2024-05-week-1/index.md": () => import('../index_BIMJSKxS.mjs'),"/src/content/garden/health-20240423.md": () => import('../health-20240423_HPWaLa7n.mjs'),"/src/content/garden/house-20240509.md": () => import('../house-20240509_CaG3SNy_.mjs'),"/src/content/media-library/3bodyproblem/index.md": () => import('../index_DKbEdI9k.mjs'),"/src/content/media-library/alone-with-you/index.md": () => import('../index_B7vjktCC.mjs'),"/src/content/media-library/beloved/index.md": () => import('../index_s_aLBMkj.mjs'),"/src/content/media-library/common-side-effects-test/index.md": () => import('../index_EwZQXNwi.mjs'),"/src/content/media-library/currently-reading/index.md": () => import('../index_D2fBdo4y.mjs'),"/src/content/media-library/currently-watching/index.md": () => import('../index_B7zB_5ch.mjs'),"/src/content/media-library/deeper-well/index.md": () => import('../index_Cl7RMsa3.mjs'),"/src/content/media-library/foster/index.md": () => import('../index_jQh0Ixbi.mjs'),"/src/content/media-library/fourthwing/index.md": () => import('../index_DZVJOPFs.mjs'),"/src/content/media-library/test-book-example-8/index.md": () => import('../index_DrSnyBh3.mjs'),"/src/content/media-library/theatlassix/index.md": () => import('../index_DQdnE-Sb.mjs'),"/src/content/post/book-challenge-20240401.md": () => import('../book-challenge-20240401_BJpP_I9k.mjs'),"/src/content/post/first-post-20240323.md": () => import('../first-post-20240323_CpUPXVDm.mjs'),"/src/content/post/garden-open-20240424.md": () => import('../garden-open-20240424_CcA4L9cn.mjs'),"/src/content/post/small-update-20240624.md": () => import('../small-update-20240624_DDu8sqpq.mjs'),"/src/content/post/test-blog-1.md": () => import('../test-blog-1_8KCXVdJK.mjs'),"/src/content/post/todays-commute-20240402.md": () => import('../todays-commute-20240402_Y_H9Xp_U.mjs'),"/src/content/post_archive/cover-image/index.md": () => import('../index_CWwpdrRb.mjs'),"/src/content/post_archive/draft-post-20230910.md": () => import('../draft-post-20230910_akYCVAy7.mjs'),"/src/content/post_archive/long-title-20230201.md": () => import('../long-title-20230201_Bw4aHrXP.mjs'),"/src/content/post_archive/markdown-elements/index.md": () => import('../index_Dyi4omf7.mjs'),"/src/content/post_archive/missing-content-20230222.md": () => import('../missing-content-20230222_KFge1F67.mjs'),"/src/content/post_archive/panting-list-20240509.md": () => import('../panting-list-20240509_BlCBuuWE.mjs'),"/src/content/post_archive/social-image-20230127.md": () => import('../social-image-20230127_CGZTPOlM.mjs'),"/src/content/post_archive/unique-tags-20230130.md": () => import('../unique-tags-20230130_B-KU-nOx.mjs'),"/src/content/post_archive/webmentions/index.md": () => import('../index_Bzz5hhjo.mjs'),"/src/content/training/training-log-1-20240327.md": () => import('../training-log-1-20240327_3LLXPKhM.mjs'),"/src/content/training/training-log-2-20240331.md": () => import('../training-log-2-20240331_CsLqDeBs.mjs'),"/src/content/weeklies/2024-04-21/index.md": () => import('../index_N0Hbdjvq.mjs'),"/src/content/weeklies/2024-04-22/index.md": () => import('../index_DpHHF7p6.mjs'),"/src/content/weeklies/2024-04-23/index.md": () => import('../index_D2dNTITx.mjs'),"/src/content/weeklies/2024-04-24/index.md": () => import('../index_BH6rn5yC.mjs'),"/src/content/weeklies/2024-04-25/index.md": () => import('../index_vgc9sX7A.mjs'),"/src/content/weeklies/2024-04-26/index.md": () => import('../index_BmCIWfOU.mjs'),"/src/content/weeklies/2024-04-27/index.md": () => import('../index_CBB5kPal.mjs'),"/src/content/weeklies/2024-04-28/index.md": () => import('../index_B3BTPWkl.mjs'),"/src/content/weeklies/2024-04-29/index.md": () => import('../index_t2P-fz-q.mjs'),"/src/content/weeklies/2024-04-30/index.md": () => import('../index_CBtCG0pq.mjs'),"/src/content/weeklies/2024-05-week-1/index.md": () => import('../index_D9EZIHph.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"garden":{"type":"content","entries":{"health-20240423":"/src/content/garden/health-20240423.md","house-20240509":"/src/content/garden/house-20240509.md"}},"post":{"type":"content","entries":{"book-challenge-20240401":"/src/content/post/book-challenge-20240401.md","first-post-20240323":"/src/content/post/first-post-20240323.md","garden-open-20240424":"/src/content/post/garden-open-20240424.md","small-update-20240624":"/src/content/post/small-update-20240624.md","test-blog-1":"/src/content/post/test-blog-1.md","todays-commute-20240402":"/src/content/post/todays-commute-20240402.md"}},"post_archive":{"type":"content","entries":{"long-title-20230201":"/src/content/post_archive/long-title-20230201.md","draft-post-20230910":"/src/content/post_archive/draft-post-20230910.md","missing-content-20230222":"/src/content/post_archive/missing-content-20230222.md","panting-list-20240509":"/src/content/post_archive/panting-list-20240509.md","social-image-20230127":"/src/content/post_archive/social-image-20230127.md","unique-tags-20230130":"/src/content/post_archive/unique-tags-20230130.md","cover-image":"/src/content/post_archive/cover-image/index.md","markdown-elements":"/src/content/post_archive/markdown-elements/index.md","webmentions":"/src/content/post_archive/webmentions/index.md"}},"training":{"type":"content","entries":{"training-log-1-20240327":"/src/content/training/training-log-1-20240327.md","training-log-2-20240331":"/src/content/training/training-log-2-20240331.md"}},"dailies":{"type":"content","entries":{"2024-04-21":"/src/content/dailies/2024-04-21/index.md","2024-04-22":"/src/content/dailies/2024-04-22/index.md","2024-04-23":"/src/content/dailies/2024-04-23/index.md","2024-04-24":"/src/content/dailies/2024-04-24/index.md","2024-04-25":"/src/content/dailies/2024-04-25/index.md","2024-04-26":"/src/content/dailies/2024-04-26/index.md","2024-04-27":"/src/content/dailies/2024-04-27/index.md","2024-04-28":"/src/content/dailies/2024-04-28/index.md","2024-04-30":"/src/content/dailies/2024-04-30/index.md","2024-04-29":"/src/content/dailies/2024-04-29/index.md","2024-05-week-1":"/src/content/dailies/2024-05-week-1/index.md"}},"media-library":{"type":"content","entries":{"3bodyproblem":"/src/content/media-library/3bodyproblem/index.md","alone-with-you":"/src/content/media-library/alone-with-you/index.md","beloved":"/src/content/media-library/beloved/index.md","common-side-effects-test":"/src/content/media-library/common-side-effects-test/index.md","currently-reading":"/src/content/media-library/currently-reading/index.md","currently-watching":"/src/content/media-library/currently-watching/index.md","foster":"/src/content/media-library/foster/index.md","deeper-well":"/src/content/media-library/deeper-well/index.md","fourthwing":"/src/content/media-library/fourthwing/index.md","test-book-example-8":"/src/content/media-library/test-book-example-8/index.md","theatlassix":"/src/content/media-library/theatlassix/index.md"}},"weeklies":{"type":"content","entries":{"2024-04-21":"/src/content/weeklies/2024-04-21/index.md","2024-04-22":"/src/content/weeklies/2024-04-22/index.md","2024-04-23":"/src/content/weeklies/2024-04-23/index.md","2024-04-24":"/src/content/weeklies/2024-04-24/index.md","2024-04-25":"/src/content/weeklies/2024-04-25/index.md","2024-04-26":"/src/content/weeklies/2024-04-26/index.md","2024-04-27":"/src/content/weeklies/2024-04-27/index.md","2024-04-28":"/src/content/weeklies/2024-04-28/index.md","2024-04-29":"/src/content/weeklies/2024-04-29/index.md","2024-04-30":"/src/content/weeklies/2024-04-30/index.md","2024-05-week-1":"/src/content/weeklies/2024-05-week-1/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/dailies/2024-04-21/index.md": () => import('../index_DKTc1yPN.mjs'),"/src/content/dailies/2024-04-22/index.md": () => import('../index_RENPMi_i.mjs'),"/src/content/dailies/2024-04-23/index.md": () => import('../index_BxCgPCht.mjs'),"/src/content/dailies/2024-04-24/index.md": () => import('../index_a-KMHESn.mjs'),"/src/content/dailies/2024-04-25/index.md": () => import('../index_DoUoHzwA.mjs'),"/src/content/dailies/2024-04-26/index.md": () => import('../index_BSMcwM_R.mjs'),"/src/content/dailies/2024-04-27/index.md": () => import('../index_B_rTGOmp.mjs'),"/src/content/dailies/2024-04-28/index.md": () => import('../index_Bg1GZVnX.mjs'),"/src/content/dailies/2024-04-29/index.md": () => import('../index_CmoDIR0T.mjs'),"/src/content/dailies/2024-04-30/index.md": () => import('../index_DEK4Ry2u.mjs'),"/src/content/dailies/2024-05-week-1/index.md": () => import('../index_B4_q6B5f.mjs'),"/src/content/garden/health-20240423.md": () => import('../health-20240423_BZJBK_jy.mjs'),"/src/content/garden/house-20240509.md": () => import('../house-20240509_Br4ZVsvU.mjs'),"/src/content/media-library/3bodyproblem/index.md": () => import('../index_BkugDyn7.mjs'),"/src/content/media-library/alone-with-you/index.md": () => import('../index_BXCYhqsp.mjs'),"/src/content/media-library/beloved/index.md": () => import('../index_Mx7M1XAw.mjs'),"/src/content/media-library/common-side-effects-test/index.md": () => import('../index_D7Vuc-41.mjs'),"/src/content/media-library/currently-reading/index.md": () => import('../index_CSj-69Ga.mjs'),"/src/content/media-library/currently-watching/index.md": () => import('../index_ClsJcHgT.mjs'),"/src/content/media-library/deeper-well/index.md": () => import('../index_BTBPtjCG.mjs'),"/src/content/media-library/foster/index.md": () => import('../index_BAuEAQfu.mjs'),"/src/content/media-library/fourthwing/index.md": () => import('../index_C7lfYf4V.mjs'),"/src/content/media-library/test-book-example-8/index.md": () => import('../index_XUehMQGa.mjs'),"/src/content/media-library/theatlassix/index.md": () => import('../index_BvjX79Tx.mjs'),"/src/content/post/book-challenge-20240401.md": () => import('../book-challenge-20240401_B33GK23M.mjs'),"/src/content/post/first-post-20240323.md": () => import('../first-post-20240323_BdpFndRq.mjs'),"/src/content/post/garden-open-20240424.md": () => import('../garden-open-20240424_DwQZCCfc.mjs'),"/src/content/post/small-update-20240624.md": () => import('../small-update-20240624_DuM7Dld0.mjs'),"/src/content/post/test-blog-1.md": () => import('../test-blog-1_0NA_1G4m.mjs'),"/src/content/post/todays-commute-20240402.md": () => import('../todays-commute-20240402_CL7JysB0.mjs'),"/src/content/post_archive/cover-image/index.md": () => import('../index_D5o6Jw6B.mjs'),"/src/content/post_archive/draft-post-20230910.md": () => import('../draft-post-20230910_DJTQiSnh.mjs'),"/src/content/post_archive/long-title-20230201.md": () => import('../long-title-20230201_CbSS8FWL.mjs'),"/src/content/post_archive/markdown-elements/index.md": () => import('../index_-ghXwANg.mjs'),"/src/content/post_archive/missing-content-20230222.md": () => import('../missing-content-20230222_DSH3bJ4H.mjs'),"/src/content/post_archive/panting-list-20240509.md": () => import('../panting-list-20240509_C4vQiGp4.mjs'),"/src/content/post_archive/social-image-20230127.md": () => import('../social-image-20230127_CenXM3-E.mjs'),"/src/content/post_archive/unique-tags-20230130.md": () => import('../unique-tags-20230130_D7uIrQ1z.mjs'),"/src/content/post_archive/webmentions/index.md": () => import('../index_BTeAX-6H.mjs'),"/src/content/training/training-log-1-20240327.md": () => import('../training-log-1-20240327_COl8Sp5X.mjs'),"/src/content/training/training-log-2-20240331.md": () => import('../training-log-2-20240331_CAOjaJsE.mjs'),"/src/content/weeklies/2024-04-21/index.md": () => import('../index_BNGbQke4.mjs'),"/src/content/weeklies/2024-04-22/index.md": () => import('../index_CMia8Z0X.mjs'),"/src/content/weeklies/2024-04-23/index.md": () => import('../index_BdPKX16O.mjs'),"/src/content/weeklies/2024-04-24/index.md": () => import('../index_Cs2prsZD.mjs'),"/src/content/weeklies/2024-04-25/index.md": () => import('../index_D7NWnZwn.mjs'),"/src/content/weeklies/2024-04-26/index.md": () => import('../index_Cw9alkjn.mjs'),"/src/content/weeklies/2024-04-27/index.md": () => import('../index_Bwuu8q6e.mjs'),"/src/content/weeklies/2024-04-28/index.md": () => import('../index_2nNXpKyd.mjs'),"/src/content/weeklies/2024-04-29/index.md": () => import('../index_BCT6gAdx.mjs'),"/src/content/weeklies/2024-04-30/index.md": () => import('../index_L-Rlzep5.mjs'),"/src/content/weeklies/2024-05-week-1/index.md": () => import('../index_jl1VKGrG.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    injectChild(lastItem.children, item);
    return;
  }
}
function generateToc(headings, { maxHeadingLevel = 4, minHeadingLevel = 2 } = {}) {
  const bodyHeadings = headings.filter(
    ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
  );
  const toc = [];
  for (const heading of bodyHeadings) injectChild(toc, { ...heading, children: [] });
  return toc;
}

const DOMAIN = "https://itsjoescott.xyz";
const CACHE_DIR = ".data";
const filePath = `${CACHE_DIR}/webmentions.json`;
const validWebmentionTypes = ["like-of", "mention-of", "in-reply-to"];
new URL(DOMAIN).hostname;
async function fetchWebmentions(timeFrom, perPage = 1e3) {
  {
    console.warn("No webmention api token specified in .env");
    return null;
  }
}
function mergeWebmentions(a, b) {
  return Array.from(
    [...a.children, ...b.children].reduce((map, obj) => map.set(obj["wm-id"], obj), /* @__PURE__ */ new Map()).values()
  );
}
function filterWebmentions(webmentions) {
  return webmentions.filter((webmention) => {
    if (!validWebmentionTypes.includes(webmention["wm-property"])) return false;
    if (webmention["wm-property"] === "mention-of" || webmention["wm-property"] === "in-reply-to") {
      return webmention.content && webmention.content.text !== "";
    }
    return true;
  });
}
function writeToCache(data) {
  const fileContent = JSON.stringify(data, null, 2);
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`Webmentions saved to ${filePath}`);
  });
}
function getFromCache() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  }
  return {
    lastFetched: null,
    children: []
  };
}
async function getAndCacheWebmentions() {
  const cache = getFromCache();
  const mentions = await fetchWebmentions(cache.lastFetched);
  if (mentions) {
    mentions.children = filterWebmentions(mentions.children);
    const webmentions = {
      lastFetched: (/* @__PURE__ */ new Date()).toISOString(),
      // Make sure the first arg is the cache
      children: mergeWebmentions(cache, mentions)
    };
    writeToCache(webmentions);
    return webmentions;
  }
  return cache;
}
let webMentions;
async function getWebmentionsForUrl(url) {
  if (!webMentions) webMentions = await getAndCacheWebmentions();
  return webMentions.children.filter((entry) => entry["wm-target"] === url);
}

const $$Astro$5 = createAstro("https://itsjoescott.xyz");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const dateObject = date instanceof Date ? date : new Date(date);
  const formattedDate = getFormattedDate(dateObject, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(dateObject.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${formattedDate} </time>`;
}, "D:/joe-website/src/components/FormattedDate.astro", void 0);

const $$Astro$4 = createAstro("https://itsjoescott.xyz");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { nextUrl, prevUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="mt-8 flex items-center gap-x-4">${prevUrl && renderTemplate`<a class="me-auto py-2 sm:hover:text-accent" data-astro-prefetch${addAttribute(prevUrl.url, "href")}>${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="ms-auto py-2 sm:hover:text-accent" data-astro-prefetch${addAttribute(nextUrl.url, "href")}>${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "D:/joe-website/src/components/Paginator.astro", void 0);

const $$Astro$3 = createAstro("https://itsjoescott.xyz");
const $$CollectionPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CollectionPreview;
  const { as: Tag = "div", item, withDesc = false } = Astro2.props;
  const postDate = item.data.updatedDate ?? item.data.publishDate;
  return renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[120px] text-gray-600 dark:text-gray-400", "date": postDate })} ${renderComponent($$result, "Tag", Tag, {}, { "default": ($$result2) => renderTemplate`${item.data.draft && renderTemplate`${maybeRenderHead()}<span class="text-red-500">(Draft) </span>`}<a class="cactus-link" data-astro-prefetch${addAttribute(`/${item.collection === "post" ? "posts" : item.collection}/${item.slug}/`, "href")}> ${item.data.title} </a> ` })} ${withDesc && renderTemplate`<q class="line-clamp-3 block italic">${item.data.description}</q>`}`;
}, "D:/joe-website/src/components/CollectionPreview.astro", void 0);

async function getAllMediaLibrary() {
  return await getCollection("media-library", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate$4(mediaLibrary) {
  return mediaLibrary.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags$4(mediaLibrary) {
  return mediaLibrary.flatMap((t) => [...t.data.tags]);
}
function getUniqueTags$4(mediaLibrary) {
  return [...new Set(getAllTags$4(mediaLibrary))];
}

const $$Astro$2 = createAstro("https://itsjoescott.xyz");
const prerender = false;
const getStaticPaths$2 = async ({ paginate }) => {
  const mediaEntries = await getCollection("media-library", ({ data }) => !data.draft);
  const sortedEntries = mediaEntries.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const allTags = [...new Set(mediaEntries.flatMap((post) => post.data.tags))];
  return paginate(sortedEntries, {
    pageSize: 6,
    props: { allTags }
    // Pass tags to the page props
  });
};
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$3;
  const { page, allTags } = Astro2.props;
  const ssrData = async () => {
    if (!page || !allTags) {
      const mediaEntries2 = await getCollection("media-library", ({ data }) => !data.draft);
      const sortedEntries2 = mediaEntries2.sort(
        (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
      );
      return {
        pageData: {
          data: sortedEntries2.slice(0, 6),
          url: {
            next: sortedEntries2.length > 6 ? "/media-library/2" : void 0,
            prev: void 0
          },
          currentPage: 1,
          lastPage: Math.ceil(sortedEntries2.length / 6),
          total: sortedEntries2.length
        },
        tagData: [...new Set(mediaEntries2.flatMap((post) => post.data.tags))],
        allEntries: sortedEntries2
      };
    }
    const mediaEntries = await getCollection("media-library", ({ data }) => !data.draft);
    const sortedEntries = mediaEntries.sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );
    return {
      pageData: page,
      tagData: allTags,
      allEntries: sortedEntries
    };
  };
  const { pageData, tagData, allEntries } = await ssrData();
  const serializedEntries = JSON.stringify(
    allEntries.map((entry) => ({
      slug: entry.slug,
      data: {
        title: entry.data.title,
        publishDate: entry.data.publishDate.toISOString(),
        description: entry.data.description,
        tags: entry.data.tags,
        coverImage: {
          src: {
            src: typeof entry.data.coverImage.src === "string" ? entry.data.coverImage.src : entry.data.coverImage.src.src
          },
          alt: entry.data.coverImage.alt
        }
      }
    }))
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Media Library" } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-[3fr,1fr] gap-8"> <div class="flex flex-col items-center"> <h1 class="title mb-8 w-full text-left">media library ▶️</h1> <div id="media-grid" class="grid w-full grid-cols-2 gap-4"${addAttribute(pageData.currentPage || 1, "data-current-page")}${addAttribute(pageData.total || allEntries.length, "data-total-items")}${addAttribute(serializedEntries, "data-entries")}> ${pageData.data.map((media) => renderTemplate`<div class="p-2"> <a class="block h-full rounded-2xl bg-[#FEC686] px-6 py-3 text-center text-black transition-transform hover:scale-105"${addAttribute(`/media-library/${media.slug}`, "href")}> <div class="flex justify-center"> <img class="h-[200px] w-[200px] rounded-lg object-cover"${addAttribute(media.data.coverImage.src.src, "src")}${addAttribute(media.data.coverImage.alt, "alt")} width="200" height="200"> </div> <div class="mt-3 font-mono"> <h2 class="text-sm font-bold">${media.data.title}</h2> <p class="mt-2 text-sm"> ${new Date(media.data.publishDate).getDate()}${" "} ${new Date(media.data.publishDate).toLocaleString("default", { month: "short" })}${" "} ${new Date(media.data.publishDate).getFullYear()} </p> ${media.data.tags.length > 0 && renderTemplate`<div class="mt-2 flex flex-wrap justify-center gap-2"> ${media.data.tags.map((tag) => renderTemplate`<span class="rounded-md bg-[#5D6B00] px-2 py-1 text-xs text-[#FFFFFF]"> ${tag} </span>`)} </div>`} <p class="mt-2 text-xs italic">${media.data.description}</p> </div> </a> </div>`)} </div> ${(pageData.currentPage < pageData.lastPage || pageData.url?.next) && renderTemplate`<button id="load-more-btn" class="mt-16 rounded-lg bg-[#5D6B00] px-6 py-2 text-white transition-colors hover:bg-[#5D6B00]">
Load More Media
</button>`} <!-- Hidden debug output for troubleshooting --> <div id="debug-output" class="mt-4 w-full rounded bg-gray-800 p-2 text-left text-xs" style="display: none;"></div> <!-- Debug toggle button - only visible in dev mode --> ${false} </div> <aside class="sticky top-20 h-fit"> <h2 class="mb-4 flex items-center text-lg font-semibold"> <svg aria-hidden="true" class="mr-2 h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h2> <ul class="flex flex-wrap gap-2 text-bgColor"> ${tagData && tagData.map((tag) => renderTemplate`<li> <a${addAttribute(`View all posts with the tag: ${tag}`, "aria-label")} class="flex items-center justify-center rounded-lg bg-accent p-1"${addAttribute(`/tags/${tag}`, "href")}> ${tag} </a> </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" class="sm:hover:text-accent" href="/tags/">
View all →
</a> </span> </aside> </div> ` })} `;
}, "D:/joe-website/src/pages/media-library/[...page].astro", void 0);
const $$file$3 = "D:/joe-website/src/pages/media-library/[...page].astro";
const $$url$3 = "/media-library/[...page]";

const ____page_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$3,
	file: $$file$3,
	getStaticPaths: getStaticPaths$2,
	prerender,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getAllPosts() {
  return await getCollection("post", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate$3(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags$3(posts) {
  return posts.flatMap((post) => [...post.data.tags]);
}
function getUniqueTags$3(posts) {
  return [...new Set(getAllTags$3(posts))];
}
function getUniqueTagsWithCount(posts) {
  return [
    ...getAllTags$3(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

async function getAllGarden() {
  return await getCollection("garden", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate$2(garden) {
  return garden.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags$2(garden) {
  return garden.flatMap((g) => [...g.data.tags]);
}
function getUniqueTags$2(garden) {
  return [...new Set(getAllTags$2(garden))];
}

async function getAllTraining() {
  return await getCollection("training", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate$1(training) {
  return training.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags$1(training) {
  return training.flatMap((t) => [...t.data.tags]);
}
function getUniqueTags$1(training) {
  return [...new Set(getAllTags$1(training))];
}

async function getAllWeeklies() {
  return await getCollection("weeklies", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate(weeklies) {
  return weeklies.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(weeklies) {
  return weeklies.flatMap((weekly) => [...weekly.data.tags]);
}
function getUniqueTags(weeklies) {
  return [...new Set(getAllTags(weeklies))];
}

const $$Astro$1 = createAstro("https://itsjoescott.xyz");
const getStaticPaths$1 = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate$3(allPosts);
  const uniqueTags = getUniqueTags$3(allPosts);
  return paginate(allPostsByDate, { pageSize: 10, props: { uniqueTags } });
};
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$2;
  const { page, uniqueTags } = Astro2.props;
  const meta = {
    description: "Ready my collection of posts and the things that interest me",
    title: "Posts"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Posts`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Posts \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">blog 📝</h1> <div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="Blog post list"> <ul class="space-y-8 text-start"> ${page.data.map((c) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full"> ${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "as": "h2", "item": c, "withDesc": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> ${!!uniqueTags.length && renderTemplate`<aside> <h2 class="mb-4 flex items-center text-lg font-semibold"> <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h2> <ul class="flex flex-wrap gap-2 text-bgColor"> ${uniqueTags.map((tag) => renderTemplate`<li> <a${addAttribute(`View all posts with the tag: ${tag}`, "aria-label")} class="flex items-center justify-center rounded-lg bg-accent p-1"${addAttribute(`/tags/${tag}/`, "href")}> ${tag} </a> </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" class="sm:hover:text-accent" href="/tags/">
View all →
</a> </span> </aside>`} </div> ` })}`;
}, "D:/joe-website/src/pages/posts/[...page].astro", void 0);

const $$file$2 = "D:/joe-website/src/pages/posts/[...page].astro";
const $$url$2 = "/posts/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$2,
	file: $$file$2,
	getStaticPaths: getStaticPaths$1,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://itsjoescott.xyz");
const getStaticPaths = async ({ paginate }) => {
  function sanitizeTag(tag) {
    return tag.replace(/['"]/g, "").replace(/[^\w\s-]/g, "").trim().toLowerCase();
  }
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate$3(allPosts);
  const allWeeklies = await getAllWeeklies();
  const allWeekliesByDate = sortMDByDate(allWeeklies);
  const allGarden = await getAllGarden();
  const allGardenByDate = sortMDByDate$2(allGarden);
  const allTraining = await getAllTraining();
  const allTrainingByDate = sortMDByDate$1(allTraining);
  const allMediaLibrary = await getAllMediaLibrary();
  const allMediaLibraryByDate = sortMDByDate$4(allMediaLibrary);
  const uniqueTags = [
    ...getUniqueTags$3(allPostsByDate),
    ...getUniqueTags(allWeekliesByDate),
    ...getUniqueTags$2(allGardenByDate),
    ...getUniqueTags$1(allTrainingByDate),
    ...getUniqueTags$4(allMediaLibraryByDate)
  ];
  return uniqueTags.flatMap((tag) => {
    const sanitizedTag = sanitizeTag(tag);
    if (!sanitizedTag) return [];
    const filterPosts = allPostsByDate.filter(
      (post) => post.data.tags.map((t) => sanitizeTag(t)).includes(sanitizedTag)
    );
    const filterWeeklies = allWeekliesByDate.filter(
      (weekly) => weekly.data.tags.map((t) => sanitizeTag(t)).includes(sanitizedTag)
    );
    const filterGarden = allGardenByDate.filter(
      (garden) => garden.data.tags.map((t) => sanitizeTag(t)).includes(sanitizedTag)
    );
    const filterTraining = allTrainingByDate.filter(
      (training) => training.data.tags.map((t) => sanitizeTag(t)).includes(sanitizedTag)
    );
    const filterMediaLibrary = allMediaLibraryByDate.filter(
      (media) => media.data.tags.map((t) => sanitizeTag(t)).includes(sanitizedTag)
    );
    const filters = [
      ...filterPosts,
      ...filterWeeklies,
      ...filterGarden,
      ...filterTraining,
      ...filterMediaLibrary
    ];
    return paginate(filters, {
      pageSize: 10,
      params: { tag: sanitizedTag }
    });
  });
};
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$$1;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    description: `View all collections with the tag - ${tag}`,
    title: `Tag: ${tag}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Tags`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Tags \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6 flex items-center"> <a class="text-accent sm:hover:underline" href="/tags/">Tags</a> <span class="me-3 ms-2">→</span> <span class="text-xl">#${tag}</span> </h1> <section aria-label="Article list"> <ul class="space-y-8"> ${page.data.map((c) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full"> ${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "as": "h2", "item": c, "withDesc": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> ` })}`;
}, "D:/joe-website/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file$1 = "D:/joe-website/src/pages/tags/[tag]/[...page].astro";
const $$url$1 = "/tags/[tag]/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", PageLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">[Collection Name] [Emoji]</h1> <div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="[Collection] list"> ${description && renderTemplate`<p class="mb-6">${description}</p>`} <ul class="space-y-8 text-start"> ${page.data.map((item) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full"> ${renderComponent($$result2, "CollectionPreview", CollectionPreview, { "as": "h2", "item": item, "withDesc": true })} </li>`)} </ul> ${renderComponent($$result2, "Pagination", Pagination, { ...paginationProps })} </section> <aside> ${uniqueTags?.length ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 flex items-center text-lg font-semibold"> <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6"> <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z"></path> </svg>
Tags
</h2> <ul class="space-y-2"> ${uniqueTags.map((tag) => renderTemplate`<li> <a class="cactus-link inline-block"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`View posts with the tag: ${tag}`, "title")} rel="prefetch">
&#35;${tag} </a> </li>`)} </ul> ` })}` : null} </aside> </div> ` })}`;
}, "D:/joe-website/src/pages/[collection]/[...page].astro", void 0);

const $$file = "D:/joe-website/src/pages/[collection]/[...page].astro";
const $$url = "/[collection]/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CollectionPreview as $, ____page_$3 as _, $$Paginator as a, $$FormattedDate as b, generateToc as c, getWebmentionsForUrl as d, getAllPosts as e, getAllWeeklies as f, getCollection as g, getAllGarden as h, getAllTraining as i, getAllMediaLibrary as j, getUniqueTagsWithCount as k, getUniqueTags$3 as l, getFormattedDate as m, ____page_$2 as n, ____page_$1 as o, ____page_ as p, sortMDByDate$3 as s };
