const id = "unique-tags-20230130.md";
						const collection = "post_archive";
						const slug = "unique-tags-20230130";
						const body = "\r\n## This post is to test zod transform\r\n\r\nIf you open the file `src/content/post/unique-tags.md`, the tags array has a number of duplicate blog strings of various cases.\r\n\r\nThese are removed as part of the removeDupsAndLowercase function found in `src/content/config.ts`.\r\n";
						const data = {title:"Unique tags validation",publishDate:"30 January 2023",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",tags:["blog","blog","Blog","test","bloG","Test","BLOG"]};
						const _internal = {
							type: 'content',
							filePath: "D:/joe-website/src/content/post_archive/unique-tags-20230130.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
