import"./hoisted.ClJRerM2.js";function e(n){console.log(n);const i=document.getElementById("debug-output");i&&(i.innerHTML+=`<div>${n}</div>`)}function E(n){const i=new Date(n);return`${i.getDate()} ${i.toLocaleString("default",{month:"short"})} ${i.getFullYear()}`}function p(){const n=document.getElementById("toggle-debug"),i=document.getElementById("debug-output");n&&i&&n.addEventListener("click",()=>{i.style.display==="none"?i.style.display="block":i.style.display="none"})}function h(){e("Initializing media library...");try{const n=document.getElementById("media-grid");if(!n){e("ERROR: Media grid not found");return}const i=n.getAttribute("data-entries");if(!i){e("ERROR: No entries data found");return}const c=JSON.parse(i);e(`Found ${c.length} total entries`);const a=new Set;document.querySelectorAll("#media-grid > div a").forEach(m=>{const d=m.getAttribute("href");if(d){const o=d.split("/").pop();o&&(a.add(o),e(`Added initially displayed slug: ${o}`))}}),e(`Already displaying ${a.size} items with slugs: ${Array.from(a).join(", ")}`);let u=1;const y=6,s=document.getElementById("load-more-btn");if(!s){e("ERROR: Load more button not found");return}e("Found load more button, attaching click handler"),s.addEventListener("click",function(){e("Load more button clicked"),u++,e(`Loading page ${u}`),a.clear(),document.querySelectorAll("#media-grid > div a").forEach(t=>{const l=t.getAttribute("href");if(l){const r=l.split("/").pop();r&&(a.add(r),e(`Tracking currently displayed slug: ${r}`))}});const d=c.filter(t=>!a.has(t.slug));if(e(`${d.length} entries not yet displayed`),d.length===0){e("No more new entries to load"),s.style.display="none";return}const o=0,b=Math.min(d.length,y),f=d.slice(o,b);e(`Adding ${f.length} new items`),f.forEach((t,l)=>{if(e(`Adding item ${l+1}: ${t.data.title} (${t.slug})`),document.querySelector(`a[href="/media-library/${t.slug}"]`)){e(`SKIPPING: Item ${t.slug} is already displayed`);return}a.add(t.slug);const g=document.createElement("div");g.className="p-2";const $=E(t.data.publishDate);g.innerHTML=`
						<a
							class="block h-full rounded-2xl bg-[#FEC686] px-6 py-3 text-center text-black transition-transform hover:scale-105"
							href="/media-library/${t.slug}"
						>
							<div class="flex justify-center">
								<img
									class="h-[200px] w-[200px] rounded-lg object-cover"
									src="${t.data.coverImage.src.src}"
									alt="${t.data.coverImage.alt||""}"
									width="200"
									height="200"
								/>
							</div>
							<div class="mt-3 font-mono">
								<h2 class="text-sm font-bold">${t.data.title}</h2>
								<p class="mt-2 text-sm">${$}</p>
								${t.data.tags&&t.data.tags.length>0?`<div class="mt-2 flex flex-wrap justify-center gap-2">
											${t.data.tags.map(x=>`<span class="rounded-md bg-[#5D6B00] px-2 py-1 text-xs text-[#FFFFFF]">${x}</span>`).join("")}
										</div>`:""}
								<p class="mt-2 text-xs italic">${t.data.description||""}</p>
							</div>
						</a>
					`,n.appendChild(g)}),c.filter(t=>!a.has(t.slug)).length===0&&(e("No more entries to load, hiding button"),s.style.display="none")}),e("Media library initialization complete")}catch(n){e(`ERROR: ${n.message}`)}}document.addEventListener("DOMContentLoaded",function(){h(),p()});(document.readyState==="complete"||document.readyState==="interactive")&&setTimeout(function(){h(),p()},1);
