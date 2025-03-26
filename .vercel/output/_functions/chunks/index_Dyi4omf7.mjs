const id = "markdown-elements/index.md";
						const collection = "post_archive";
						const slug = "markdown-elements";
						const body = "\r\n## This is a H2 Heading\r\n\r\n### This is a H3 Heading\r\n\r\n#### This is a H4 Heading\r\n\r\n##### This is a H5 Heading\r\n\r\n###### This is a H6 Heading\r\n\r\n## Horizontal Rules\r\n\r\n---\r\n\r\n---\r\n\r\n---\r\n\r\n## Emphasis\r\n\r\n**This is bold text**\r\n\r\n_This is italic text_\r\n\r\n~~Strikethrough~~\r\n\r\n## Quotes\r\n\r\n\"Double quotes\" and 'single quotes'\r\n\r\n## Blockquotes\r\n\r\n> Blockquotes can also be nested...\r\n>\r\n> > ...by using additional greater-than signs right next to each other...\r\n\r\n## References\r\n\r\nAn example containing a clickable reference[^1] with a link to the source.\r\n\r\nSecond example containing a reference[^2] with a link to the source.\r\n\r\n[^1]: Reference first footnote with a return to content link.\r\n[^2]: Second reference with a link.\r\n\r\nIf you check out this example in `src/content/post/markdown-elements/index.md`, you'll notice that the references and the heading \"Footnotes\" are added to the bottom of the page via the [remark-rehype](https://github.com/remarkjs/remark-rehype#options) plugin.\r\n\r\n## Lists\r\n\r\nUnordered\r\n\r\n- Create a list by starting a line with `+`, `-`, or `*`\r\n- Sub-lists are made by indenting 2 spaces:\r\n  - Marker character change forces new list start:\r\n    - Ac tristique libero volutpat at\r\n    - Facilisis in pretium nisl aliquet\r\n    - Nulla volutpat aliquam velit\r\n- Very easy!\r\n\r\nOrdered\r\n\r\n1. Lorem ipsum dolor sit amet\r\n2. Consectetur adipiscing elit\r\n3. Integer molestie lorem at massa\r\n\r\n4. You can use sequential numbers...\r\n5. ...or keep all the numbers as `1.`\r\n\r\nStart numbering with offset:\r\n\r\n57. foo\r\n1. bar\r\n\r\n## Code\r\n\r\nInline `code`\r\n\r\nIndented code\r\n\r\n    // Some comments\r\n    line 1 of code\r\n    line 2 of code\r\n    line 3 of code\r\n\r\nBlock code \"fences\"\r\n\r\n```\r\nSample text here...\r\n```\r\n\r\nSyntax highlighting\r\n\r\n```js\r\nvar foo = function (bar) {\r\n\treturn bar++;\r\n};\r\n\r\nconsole.log(foo(5));\r\n```\r\n\r\n### Expressive code examples\r\n\r\nAdding a title\r\n\r\n```js title=\"file.js\"\r\nconsole.log(\"Title example\");\r\n```\r\n\r\nA bash terminal\r\n\r\n```bash\r\necho \"A base terminal example\"\r\n```\r\n\r\nHighlighting code lines\r\n\r\n```js title=\"line-markers.js\" del={2} ins={3-4} {6}\r\nfunction demo() {\r\n\tconsole.log(\"this line is marked as deleted\");\r\n\t// This line and the next one are marked as inserted\r\n\tconsole.log(\"this is the second inserted line\");\r\n\r\n\treturn \"this line uses the neutral default marker type\";\r\n}\r\n```\r\n\r\n[Expressive Code](https://expressive-code.com/) can do a ton more than shown here, and includes a lot of [customisation](https://expressive-code.com/reference/configuration/).\r\n\r\n## Tables\r\n\r\n| Option | Description                                                               |\r\n| ------ | ------------------------------------------------------------------------- |\r\n| data   | path to data files to supply the data that will be passed into templates. |\r\n| engine | engine to be used for processing templates. Handlebars is the default.    |\r\n| ext    | extension to be used for dest files.                                      |\r\n\r\nRight aligned columns\r\n\r\n| Option |                                                               Description |\r\n| -----: | ------------------------------------------------------------------------: |\r\n|   data | path to data files to supply the data that will be passed into templates. |\r\n| engine |    engine to be used for processing templates. Handlebars is the default. |\r\n|    ext |                                      extension to be used for dest files. |\r\n\r\n## Images\r\n\r\nImage in the same folder: `src/content/post/markdown-elements/logo.png`\r\n\r\n![Astro theme cactus logo](./logo.png)\r\n\r\nImage in the aliased assets folder: `src/assets/about-astro.png`\r\n\r\n![A cartoon cactus looking at the Astro.build logo](@/assets/about-astro.png)\r\n\r\n## Links\r\n\r\n[Content from markdown-it](https://markdown-it.github.io/)\r\n";
						const data = {title:"A post of Markdown elements",description:"This post is for testing and listing a number of different markdown elements",publishDate:"22 Feb 2023",updatedDate:"22 Jan 2024",tags:["test","markdown"]};
						const _internal = {
							type: 'content',
							filePath: "D:/joe-website/src/content/post_archive/markdown-elements/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
