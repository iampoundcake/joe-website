const id = "test-book-example-8/index.md";
						const collection = "media-library";
						const slug = "test-book-example-8";
						const body = "\r\ncurrently reading...\r\n\r\n## author\r\n\r\n## genre\r\n\r\n## my one sentence synop\r\n\r\n## rating\r\n\r\n## longer review\r\n\r\n";
						const data = {title:"Test book example #8",description:"another test run of books",publishDate:new Date(1742616000000),coverImage:{src:
						new Proxy({"src":"/_astro/placeholder.CG5-aZZf.jpg","width":1920,"height":1920,"format":"jpg","orientation":1,"fsPath":"D:/joe-website/src/assets/defaults/placeholder.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/joe-website/src/assets/defaults/placeholder.jpg";
							}
							
							return target[name];
						}
					})
					,alt:"Test book example #8 cover"},draft:true,tags:["📚"]};
						const _internal = {
							type: 'content',
							filePath: "D:/joe-website/src/content/media-library/test-book-example-8/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
