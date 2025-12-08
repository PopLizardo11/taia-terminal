import{f as b,a as o,c as k}from"../chunks/l-Hom03N.js";import{o as Ia}from"../chunks/Dwhrx9QQ.js";import{e as Ee,o as Ca,w as ke,h as B,V as Ea,n as Fa,C as I,F as Sa,t as qa,H as Da,v as Ne,x as xe,i as pe,a0 as Na,aE as Pa,an as Ba,c as $,f as Fe,s as Ma,aH as za,af as Pe,aC as Ye,aL as ja,aM as La,r as He,p as Ya,aN as Ha,aO as Ra,aP as Ae,a1 as Ka,aQ as Oa,aR as Ua,aB as Va,d as Ga,aS as Ja,aJ as Wa,k as Za,z as Qa,aT as Xa,a9 as qe,ab as ee,ad as $a,aU as et,ac as M,a3 as Se,aa as De,a2 as x,ao as P,aI as Be,G as at,I as Me}from"../chunks/C4O1lLgS.js";import{p as ge,b as tt,u as ze,i as _}from"../chunks/DtvTKk9n.js";import{d as rt,e as je,s as Le}from"../chunks/BTIcfTqm.js";import{r as ot}from"../chunks/CZzzuZJQ.js";function it(a,e){return e}function nt(a,e,r){for(var m=[],d=e.length,c=0;c<d;c++)Oa(e[c].e,m,!0);Ua(m,()=>{var i=m.length===0&&r!==null;if(i){var t=r,h=t.parentNode;Va(h),h.append(t),a.items.clear(),S(a,e[0].prev,e[d-1].next)}for(var l=0;l<d;l++){var n=e[l];i||(a.items.delete(n.k),S(a,n.prev,n.next)),Ga(n.e,!i)}a.first===e[0]&&(a.first=e[0].prev)})}function st(a,e,r,m,d,c=null){var i=a,t=new Map,h=null;{var l=a;i=B?ke(Ea(l)):l.appendChild(Ee())}B&&Fa();var n=null,p=Sa(()=>{var f=r();return ja(f)?f:f==null?[]:Ye(f)}),u,y=!0;function s(){lt(g,u,i,e,m),n!==null&&(u.length===0?(n.fragment?(i.before(n.fragment),n.fragment=null):He(n.effect),v.first=n.effect):Ya(n.effect,()=>{n=null}))}var v=Ca(()=>{u=I(p);var f=u.length;let w=!1;if(B){var C=qa(i)===Da;C!==(f===0)&&(i=Ne(),ke(i),xe(!1),w=!0)}for(var q=new Set,E=$,T=null,F=Ma(),D=0;D<f;D+=1){B&&pe.nodeType===Na&&pe.data===Pa&&(i=pe,w=!0,xe(!1));var ae=u[D],z=m(ae,D),A=y?null:t.get(z);A?(Ba(A.v,ae),A.i=D,F&&E.skipped_effects.delete(A.e)):(A=ct(y?i:null,T,ae,z,D,d,e,r),y&&(A.o=!0,T===null?h=A:T.next=A,T=A),t.set(z,A)),q.add(z)}if(f===0&&c&&!n)if(y)n={fragment:null,effect:Fe(()=>c(i))};else{var N=document.createDocumentFragment(),re=Ee();N.append(re),n={fragment:N,effect:Fe(()=>c(re))}}if(B&&f>0&&ke(Ne()),!y)if(F){for(const[be,ye]of t)q.has(be)||E.skipped_effects.add(ye.e);E.oncommit(s),E.ondiscard(()=>{})}else s();w&&xe(!0),I(p)}),g={effect:v,items:t,first:h};y=!1,B&&(i=pe)}function lt(a,e,r,m,d){var c=e.length,i=a.items,t=a.first,h,l=null,n=[],p=[],u,y,s,v;for(v=0;v<c;v+=1){if(u=e[v],y=d(u,v),s=i.get(y),a.first??=s,!s.o){s.o=!0;var g=l?l.next:t;S(a,l,s),S(a,s,g),Te(s,g,r),l=s,n=[],p=[],t=l.next;continue}if((s.e.f&Ae)!==0&&He(s.e),s!==t){if(h!==void 0&&h.has(s)){if(n.length<p.length){var f=p[0],w;l=f.prev;var C=n[0],q=n[n.length-1];for(w=0;w<n.length;w+=1)Te(n[w],f,r);for(w=0;w<p.length;w+=1)h.delete(p[w]);S(a,C.prev,q.next),S(a,l,C),S(a,q,f),t=f,l=q,v-=1,n=[],p=[]}else h.delete(s),Te(s,t,r),S(a,s.prev,s.next),S(a,s,l===null?a.first:l.next),S(a,l,s),l=s;continue}for(n=[],p=[];t!==null&&t.k!==y;)(t.e.f&Ae)===0&&(h??=new Set).add(t),p.push(t),t=t.next;if(t===null)continue;s=t}n.push(s),l=s,t=s.next}if(t!==null||h!==void 0){for(var E=h===void 0?[]:Ye(h);t!==null;)(t.e.f&Ae)===0&&E.push(t),t=t.next;var T=E.length;if(T>0){var F=c===0?r:null;nt(a,E,F)}}}function ct(a,e,r,m,d,c,i,t){var h=(i&Ha)!==0,l=(i&Ra)===0,n=h?l?za(r,!1,!1):Pe(r):r,p=(i&La)===0?d:Pe(d),u={i:p,v:n,k:m,a:null,e:null,o:!1,prev:e,next:null};try{if(a===null){var y=document.createDocumentFragment();y.append(a=Ee())}return u.e=Fe(()=>c(a,n,p,t)),e!==null&&(e.next=u),u}finally{}}function Te(a,e,r){for(var m=a.next?a.next.e.nodes_start:r,d=e?e.e.nodes_start:r,c=a.e.nodes_start;c!==null&&c!==m;){var i=Ka(c);d.before(c),c=i}}function S(a,e,r){e===null?(a.first=r,a.effect.first=r&&r.e):(e.e.next&&(e.e.next.prev=null),e.next=r,e.e.next=r&&r.e),r===null?a.effect.last=e&&e.e:(r.e.prev&&(r.e.prev.next=null),r.prev=e,r.e.prev=e&&e.e)}function mt(a,e,r=e){var m=new WeakSet;Ja(a,"input",async d=>{var c=d?a.defaultValue:a.value;if(c=Ie(a)?Ce(c):c,r(c),$!==null&&m.add($),await Wa(),c!==(c=e())){var i=a.selectionStart,t=a.selectionEnd,h=a.value.length;if(a.value=c??"",t!==null){var l=a.value.length;i===t&&t===h&&l>h?(a.selectionStart=l,a.selectionEnd=l):(a.selectionStart=i,a.selectionEnd=Math.min(t,l))}}}),(B&&a.defaultValue!==a.value||Za(e)==null&&a.value)&&(r(Ie(a)?Ce(a.value):a.value),$!==null&&m.add($)),Qa(()=>{var d=e();if(a===document.activeElement){var c=Xa??$;if(m.has(c))return}Ie(a)&&d===Ce(a.value)||a.type==="date"&&!d&&!a.value||d!==a.value&&(a.value=d??"")})}function Ie(a){var e=a.type;return e==="number"||e==="range"}function Ce(a){return a===""?null:+a}var ft=b('<div class="font-mono font-bold antialised" style="color:  var(--color-text-base)"><form><span style="color: var(--color-tertiary)" class="svelte-rybs3v"></span><span class="svelte-rybs3v">@</span><span style="color:var(--color-secondary)" class="svelte-rybs3v">term.taia.dev</span><span class="svelte-rybs3v"></span><span class="svelte-rybs3v">:~$</span> <br/> <span class="svelte-rybs3v">&gt;</span> <input type="text" class="svelte-rybs3v"/></form></div>');function ht(a,e){qe(e,!0);let r,m=ge(e,"termBlocks",15),d=ge(e,"command",15),c=ge(e,"isDone",15),i=ge(e,"collProg",15);function t(){r.focus()}function h(){r.style.width=r.value.length+1+"ch"}let l=["default","abyss","amber","arctic","coffee","cosmic","cyberpunk","forest","synthwave","toxic"];function n(v){let g=v.value.trim(),f=g.split(" ").filter(w=>w!=="");if(g=f.join(" "),g==="clear"){m([{isDone:!1}]),m(m().push=m().push({type:"prompt",command:"",isDone:!1}),!0);return}if(g==="next"&&i()<8&&(ze(i),g=i()),g==="prev"&&i()>0&&(ze(i,-1),g=i()),g===i())switch(i()){case 0:e.onThemeChange("default");break;case 1:e.onThemeChange("coffee");break;case 2:e.onThemeChange("arctic");break;case 3:e.onThemeChange("synthwave");break;case 4:e.onThemeChange("cosmic");break;case 5:e.onThemeChange("forest");break;case 6:e.onThemeChange("cyberpunk");break;case 7:e.onThemeChange("abyss");break;case 8:e.onThemeChange("amber");break}f[0]==="theme"&&f.length==2&&f[1]!=="ls"&&l.includes(f[1])&&e.onThemeChange(f[1]),m().push({type:"response",command:g}),c(!0),m().push({type:"prompt",command:"",isDone:!1})}var p=ft(),u=ee(p),y=ee(u);y.textContent="guest";var s=$a(y,10);ot(s),s.__input=h,et(s),tt(s,v=>r=v,()=>r),M(u),M(p),Se(()=>s.disabled=c()),je("submit",u,v=>{v.preventDefault(),n(r)}),je("blur",s,t),mt(s,d),o(a,p),De()}rt(["input"]);var dt=b(`<pre>
Available commands:

System:
  help
  clear
  exit
  date

Navigation:
  next
  prev

Customization:
  theme
  banner

Contact:
  repo
  about
  refs

</pre>`),ut=b(`<pre>
#    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
#    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
#       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
#       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
#       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
#       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
#                                                              
#    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
#    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
#    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
#    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
#    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
#    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

Type 'help' to see list of available commands.
Type 'next' to proceed through the collection.</pre>`),vt=b("<pre>please close the tab window to exit</pre>"),pt=b("<pre></pre>"),gt=b(`<pre>
Usage: theme [args]
  ls: list all available themes
  [theme]: set your theme of choice from the theme list

[Examples]:
  theme ls
  theme cyberpunk </pre>`),bt=b(`<pre>Theme list:
- default 
- abyss
- amber
- arctic
- coffee 
- cosmic 
- cyberpunk
- forest
- synthwave
- toxic</pre>`),yt=b("<pre> </pre>"),wt=b(`<pre>
#    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
#    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
#       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
#       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
#       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
#       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
#                                                              
#    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
#    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
#    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
#    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
#    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
#    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

Type 'help' to see list of available commands.
Type 'next' to proceed through the collection.</pre>`),_t=b('<div class="block-con svelte-1kqa948"><div class="img-con svelte-1kqa948"><img src="https://i.redd.it/tzzive0upnsb1.jpg" alt="" id="img1" class="svelte-1kqa948"/></div> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948"><i>What is art?</i> This already blurry line has become more blurred out with the rise of generative artificial intelligence where “creativity” from a machine can match those of a human. The piece above was intended to serve as a reminder that even with the seemingly increasing number of machine made art, it is still noteworthy to remember the importance of the human spirit that is embedded in the art we create.  Ironically, just like how the message is held by a robot in the image, the artwork itself is AI Generated. Its self-contradicting nature mirrors the tension society is currently experiencing as we rethink what AI-made art really means.</p></div>'),kt=b('<div class="block-con svelte-1kqa948"><div class="iframe-con"><iframe width="570.75" height="321" src="https://www.youtube.com/embed/gYbFUM6gB7Q" title="Tralalero Tralala vs Bombardino Crocodilo BATTLE ALL FIGHTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1kqa948"></iframe></div> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">"Tralalero tralala vs Bombardino Crocodilo" is one of the most well-known pieces of media that AI has brought to the internet. It is one of the many that emerged in what is known in internet culture as brainrot, which is characterized by low-quality, addictive media formed around the exaggerated idea of content preoccupying one’s mind to the point of mental deterioration. "Tralalero tralala vs Bombardino Crocodilo" in particular became influential as it became like a new cartoon or nursery rhyme for Gen Alpha due to its continuous mental stimulation. In a way, brainrot can be seen as the first informal art movement brought by AI because of how it momentarily became a shared aesthetic in AI art.</p></div>'),xt=b(`<iframe width="570.75" height="321" src="https://www.youtube.com/embed/cZiEtknJ5KE" title="Nouvelle Story - She Said I'm Gloomy 「Remastered」" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1kqa948"></iframe> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">"She said I'm Gloomy" by Nouvelle Story is instrumental music which in itself is purely made by a human. Its cover photo, as seen in the thumbnail, however, is an AI-generated artwork as confirmed by its creator. One can expect that it would receive backlash due to this, but the internet argued that, practicality wise, AI art like this helps small artists to be discovered. This example highlights AI art not as a replacement as most would fear, but as a tool something that we can leverage to improve and show the world the marvels of our own creativity.</p>`,1),At=b(`<iframe width="570.75" height="321" src="https://www.youtube.com/embed/E5h2kta9EE8" title="Frank Sinatra (A.I Cover) - 'Five Nights at Freddy's'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1kqa948"></iframe> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">This is an AI rendition of the song "Five Nights at Freddy's" as how it would be sung by Frank Sinatra in the 1970s. This piece, unlike the previous one, uses AI in the music creation process by using a machine-generated Frank Sinatra voice to sing a video game inspired song. While some may view this as a form of digital impersonation or even plagiarism, it's difficult to deny that AI also opens up possibilities in enabling us to explore more and put our imaginations into reality. The piece highlights that despite the ethical concerns toward the use of AI in art, what it creates can still count as art.</p>`,1),Tt=b(`<div id="img-con5" class="svelte-1kqa948"><img src="https://sothebys-md.brightspotcdn.com/dims4/default/576b412/2147483647/strip/true/crop/1026x1444+0+0/resize/4096x5765!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F34%2Fac%2F15f9b1224dfb8e5044aa095af182%2Fnfn112-xxxxx-cs-cropped.jpg" alt="" class="svelte-1kqa948"/></div> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">"AI God: Portrait of Alan Turing" is an AI robot's painting of one of computer science's important figures that was sold for $1.08 million, becoming what has yet to be the most valuable AI-made art. The person painted, Alan Turing, laid the foundations for the development of early computers which in return helped lead to what we have today in the form of artificial intelligence. The portrait can be seen as a creation's homage to its long-gone creator, grateful for what it has become today. The piece is also one of the major leaps of AI art as it penetrates the field of high art, a space long defined by exclusivity, tradition, and human craft. Its acceptance in the "elite level" could be attributed to the increasing number of young collectors who are more familiar with and open to the technology, another effect of the everchanging elements of art circulation.</p>`,1),It=b('<iframe width="570.75" height="321" src="https://www.youtube.com/embed/wY_K5El781E" title="Step into the world of Chingu Cafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1kqa948"></iframe> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">The ability of artificial intelligence to generate fast, quality visuals in mass quantities quickly caught the attention of corporations, an unsurprising occurrence given the capitalism-based system of our society. NutriAsia’s Chingu Café advertisement stands as one of the earliest and most prominent commercial uses of AI-generated imagery in the Philippines. Most of the people who watched AI-made advertisements pointed out their lazy and greedy nature and how they affect real-world artists in getting jobs. Additionally, it can also be seen as one of the first attempts at commodifying AI art, as it is used solely for the sake of cutting costs and gaining more profit.</p>',1),Ct=b('<div id="img-con10" class="svelte-1kqa948"><img src="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/526567635_1195403142631960_1125685597945235677_n.jpg?stp=dst-jpg_p180x540_tt6&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=f727a1&amp;_nc_eui2=AeHOWxkOxOBILN986IPbHKYiij4lqCNKuK6KPiWoI0q4rj7nUeVkFbzeg6XaLcOUAbO3E-vYzDeF3uFT0c04ppKE&amp;_nc_ohc=HvPauRn_imsQ7kNvwF_eYz1&amp;_nc_oc=Adm1FZF8x1lDiI5pLVXyl95DnUDy3gv0z7uJ2rsW6JikpyyPiNLWPl2peXjHJlskVK4&amp;_nc_zt=23&amp;_nc_ht=scontent-mnl1-2.xx&amp;_nc_gid=OJKDxCoURvPzWNRiiNnwrg&amp;oh=00_AfneUNBKvFY1ZV7jmdV761U7r5K8C-hEmH1YSF8puAFVyA&amp;oe=693C8AB7" alt="" class="svelte-1kqa948"/></div> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">The political nature of art is one of its most interesting characteristics, as it shows that it has real bearing on real-world events and does not exist solely for the purpose of just being art. Above is an AI-generated editorial cartoon posted by Manila Bulletin on their Facebook page which received a lot of backlash from the internet. Even though the reasons for criticism are valid—mostly talking about the livelihood of editorial cartoonists and the effects of AI on climate change—the hate toward AI art led to the message of the editorial cartoon being lost.</p>',1),Et=b(`<p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">AI art has proven to be one of the most difficult challenges in the current state of art in the modern world. Despite the ethical concerns and problems it has brought, it's hard to deny that it allows us to expand our capabilities to express ourselves in ways we could not before. As seen in works ranging from AI-driven brainrot videos to AI-generated music, portraits, advertisements, and even editorial cartoons, its influence ripples through nearly every space of contemporary media. If used correctly, AI acts as a modern paintbrush that helps those who struggle with the craft of art-making create art, as art should not be exclusive only to those who already have the skills. Like any other form of art, AI art is not immune to the everchanging landscape of the world, and whatever changes occur in the arts may also reflect what is happening in the real world. The rise of AI art has introduced a new perspective on creativity which, if dismissed, may lead us to develop a narrower understanding of its effects. After all, art should not only be seen as something humans create but also as something that shapes us in return.</p>`),Ft=b(`<pre>
    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
                                                                  
    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

</pre> <p class="w-[100ch] text-justify indent-[4ch] svelte-1kqa948">This terminal app serves as the home for The Art in AI Art, a small curatorial exhibition presented through a stripped-down, code-driven interface. Instead of the usual gallery walls, everything is in a command-line space letting the ideas behind each piece be revealed as if the computer itself is delivering it. The design on the website is greatly inspired on the M4TT72 terminal styled website by 
m4tt72 which is unfortunately currently down due to an unknown problem. <br/><br/> You can check it out currently on its repository/codebase <a href="https://github.com/m4tt72/terminal" class="underline">here</a> ^^</p> <br/>`,1),St=b('<a href="https://github.com/PopLizardo11/taia-terminal">https://github.com/PopLizardo11/taia-terminal</a>'),qt=b(`<pre>
    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
                                                                  
    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

</pre> <pre><b class="text-lg">References:</b>

“A.I. God. Portrait of Alan Turing | Digital Art Day Auction | Contemporary NFT |
     Sotheby’s.” Sotheby’s, www.sothebys.com/en/buy/auction/2024/digital-art-day-auction-2/a-i-god-portrait-of-alan-turing.

Manila Bulletin. “Dangerous crests.” Facebook.com, Aug. 2025, www.facebook.com/ManilaStandardPH/posts 
    opinionaited-august-2-2025-dangerous-crestsprompt-generate-a-political-cartoon-i/1195403229298618. Accessed 3 Dec. 2025.

Nazar’s Memes. “Tralalero Tralala Vs Bombardino Crocodilo BATTLE ALL FIGHTS.” YouTube, 29 Mar. 2025, 
    www.youtube.com/watch?v=gYbFUM6gB7Q.

Nouvelle Story. “Nouvelle Story - She Said I’m Gloomy 「Remastered」.” YouTube, 22 Nov. 2024, 
    www.youtube.com/watch?v=cZiEtknJ5KE.

NutriAsia. “Step Into the World of Chingu Cafe.” YouTube, 3 June 2025, www.youtube.com/watch?v=wY_K5El781E.

Ponemos Z. “Frank Sinatra (A.I Cover) - ‘Five Nights at Freddy’s.’” YouTube, 5 July 2023, www.youtube.com/watch?v=E5h2kta9EE8.

UnionPacifik. “People really hate on AI art.” Reddit.com, 2023, 
    www.reddit.com/r/ChatGPT/comments/171phbq/people_really_hate_on_ai_art. Accessed 3 Dec. 2025.
</pre> <br/>`,1),Dt=b('<p class="svelte-1kqa948"> </p>'),Nt=b('<div class="font-mono antialised flex-col" style="color:  var(--color-text-base)"><!></div>');function Pt(a,e){qe(e,!0);let r=["default","abyss","amber","arctic","coffee","cosmic","cyberpunk","forest","synthwave","toxic"];var m=Nt(),d=ee(m);{var c=t=>{var h=dt();o(t,h)},i=t=>{var h=k(),l=x(h);{var n=u=>{var y=ut();o(u,y)},p=u=>{var y=k(),s=x(y);{var v=f=>{var w=vt();o(f,w)},g=f=>{var w=k(),C=x(w);{var q=T=>{var F=pt();F.textContent=new Date,o(T,F)},E=T=>{var F=k(),D=x(F);{var ae=A=>{var N=gt();o(A,N)},z=A=>{var N=k(),re=x(N);{var be=j=>{var oe=bt();o(j,oe)},ye=j=>{var oe=k(),Re=x(oe);{var Ke=L=>{var Y=yt(),we=ee(Y);M(Y),Se(_e=>Le(we,`Theme successfully changed to ${_e??""}`),[()=>e.command.split(" ")[1]]),o(L,Y)},Oe=L=>{var Y=k(),we=x(Y);{var _e=H=>{var ie=wt();o(H,ie)},Ue=H=>{var ie=k(),Ve=x(ie);{var Ge=R=>{var ne=_t();o(R,ne)},Je=R=>{var ne=k(),We=x(ne);{var Ze=K=>{var se=kt();o(K,se)},Qe=K=>{var se=k(),Xe=x(se);{var $e=O=>{var le=xt();P(2),o(O,le)},ea=O=>{var le=k(),aa=x(le);{var ta=U=>{var ce=At();P(2),o(U,ce)},ra=U=>{var ce=k(),oa=x(ce);{var ia=V=>{var me=Tt();P(2),o(V,me)},na=V=>{var me=k(),sa=x(me);{var la=G=>{var fe=It();P(2),o(G,fe)},ca=G=>{var fe=k(),ma=x(fe);{var fa=J=>{var he=Ct();P(2),o(J,he)},ha=J=>{var he=k(),da=x(he);{var ua=W=>{var de=Et();o(W,de)},va=W=>{var de=k(),pa=x(de);{var ga=Z=>{var ue=Ft();P(4),o(Z,ue)},ba=Z=>{var ue=k(),ya=x(ue);{var wa=Q=>{var ve=St();o(Q,ve)},_a=Q=>{var ve=k(),ka=x(ve);{var xa=X=>{var te=qt();P(4),o(X,te)},Aa=X=>{var te=Dt(),Ta=ee(te);M(te),Se(()=>Le(Ta,`${e.command??""}: command not found`)),o(X,te)};_(ka,X=>{e.command==="refs"?X(xa):X(Aa,!1)},!0)}o(Q,ve)};_(ya,Q=>{e.command==="repo"?Q(wa):Q(_a,!1)},!0)}o(Z,ue)};_(pa,Z=>{e.command==="about"?Z(ga):Z(ba,!1)},!0)}o(W,de)};_(da,W=>{e.command===8?W(ua):W(va,!1)},!0)}o(J,he)};_(ma,J=>{e.command===7?J(fa):J(ha,!1)},!0)}o(G,fe)};_(sa,G=>{e.command===6?G(la):G(ca,!1)},!0)}o(V,me)};_(oa,V=>{e.command===5?V(ia):V(na,!1)},!0)}o(U,ce)};_(aa,U=>{e.command===4?U(ta):U(ra,!1)},!0)}o(O,le)};_(Xe,O=>{e.command===3?O($e):O(ea,!1)},!0)}o(K,se)};_(We,K=>{e.command===2?K(Ze):K(Qe,!1)},!0)}o(R,ne)};_(Ve,R=>{e.command===1?R(Ge):R(Je,!1)},!0)}o(H,ie)};_(we,H=>{e.command===0?H(_e):H(Ue,!1)},!0)}o(L,Y)};_(Re,L=>{r.includes((e.command+" ").split(" ")[1])?L(Ke):L(Oe,!1)},!0)}o(j,oe)};_(re,j=>{e.command==="theme ls"?j(be):j(ye,!1)},!0)}o(A,N)};_(D,A=>{e.command==="theme"?A(ae):A(z,!1)},!0)}o(T,F)};_(C,T=>{e.command==="date"?T(q):T(E,!1)},!0)}o(f,w)};_(s,f=>{e.command==="exit"?f(v):f(g,!1)},!0)}o(u,y)};_(l,u=>{e.command==="banner"?u(n):u(p,!1)},!0)}o(t,h)};_(d,t=>{e.command==="help"?t(c):t(i,!1)})}M(m),o(a,m),De()}var Bt=b(`<div id="bg-container" class="h-screen w-screen flex items-center justify-center p-8 overflow-y-auto
  [&amp;::-webkit-scrollbar]:w-2
  [&amp;::-webkit-scrollbar-track]:rounded-full
  [&amp;::-webkit-scrollbar-track]:bg-gray-100
  [&amp;::-webkit-scrollbar-thumb]:rounded-full
  [&amp;::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500"><div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto scroll-smooth" style="border-color: var(--color-secondary)"></div></div>`);function Rt(a,e){qe(e,!0);let r=!1,m=null,d=Be(0);function c(l){r?document.body.setAttribute("data-theme",l):m=l}Ia(()=>{r=!0,m&&document.body.setAttribute("data-theme",m)});let i=Be(at([{type:"prompt",command:"banner",isDone:!0},{type:"response",command:"banner"},{type:"prompt",command:"",isDone:!1}]));var t=Bt(),h=ee(t);st(h,21,()=>I(i),it,(l,n)=>{var p=k(),u=x(p);{var y=v=>{ht(v,{get command(){return I(n).command},get isDone(){return I(n).isDone},onThemeChange:c,get termBlocks(){return I(i)},set termBlocks(g){Me(i,g,!0)},get collProg(){return I(d)},set collProg(g){Me(d,g,!0)}})},s=v=>{var g=k(),f=x(g);{var w=C=>{Pt(C,{get command(){return I(n).command},get collProg(){return I(d)}})};_(f,C=>{I(n).type==="response"&&C(w)},!0)}o(v,g)};_(u,v=>{I(n).type==="prompt"?v(y):v(s,!1)})}o(l,p)}),M(h),M(t),o(a,t),De()}export{Rt as component};
