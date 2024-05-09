/**
 * TinyMCE version 7.1.0 (2024-05-08)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=o=e,(r=String).prototype.isPrototypeOf(n)||(null===(l=o.constructor)||void 0===l?void 0:l.name)===r.name)?"string":t;var n,o,r,l})(t)===e,n=e=>t=>typeof t===e,o=t("string"),r=t("object"),l=t("array"),i=(null,e=>null===e);const a=n("boolean"),s=e=>!(e=>null==e)(e),c=n("function"),u=(e,t)=>{if(l(e)){for(let n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return!0}return!1},g=()=>{},d=(e,t)=>e===t;class m{constructor(e,t){this.tag=e,this.value=t}static some(e){return new m(!0,e)}static none(){return m.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?m.some(e(this.value)):m.none()}bind(e){return this.tag?e(this.value):m.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:m.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return s(e)?m.some(e):m.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}m.singletonNone=new m(!1);const h=Array.prototype.indexOf,f=Array.prototype.push,p=e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);f.apply(t,e[n])}return t},k=(e,t)=>{for(let n=0;n<e.length;n++){const o=t(e[n],n);if(o.isSome())return o}return m.none()},v=(e,t,n=d)=>e.exists((e=>n(e,t))),x=e=>{const t=[],n=e=>{t.push(e)};for(let t=0;t<e.length;t++)e[t].each(n);return t},y=(e,t)=>e?m.some(t):m.none(),b=e=>t=>t.options.get(e),_=b("link_assume_external_targets"),w=b("link_context_toolbar"),C=b("link_list"),O=b("link_default_target"),N=b("link_default_protocol"),A=b("link_target_list"),S=b("link_rel_list"),E=b("link_class_list"),T=b("link_title"),R=b("allow_unsafe_link_target"),P=b("link_quicklink");var L=tinymce.util.Tools.resolve("tinymce.util.Tools");const M=e=>o(e.value)?e.value:"",D=(e,t)=>{const n=[];return L.each(e,(e=>{const r=(e=>o(e.text)?e.text:o(e.title)?e.title:"")(e);if(void 0!==e.menu){const o=D(e.menu,t);n.push({text:r,items:o})}else{const o=t(e);n.push({text:r,value:o})}})),n},B=(e=M)=>t=>m.from(t).map((t=>D(t,e))),I=e=>B(M)(e),K=B,j=(e,t)=>n=>({name:e,type:"listbox",label:t,items:n}),U=M,q=Object.keys,F=Object.hasOwnProperty,V=(e,t)=>F.call(e,t);var $=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),z=tinymce.util.Tools.resolve("tinymce.util.URI");const G=e=>s(e)&&"a"===e.nodeName.toLowerCase(),H=e=>G(e)&&!!Q(e),J=(e,t)=>{if(e.collapsed)return[];{const n=e.cloneContents(),o=n.firstChild,r=new $(o,n),l=[];let i=o;do{t(i)&&l.push(i)}while(i=r.next());return l}},W=e=>/^\w+:/i.test(e),Q=e=>{var t,n;return null!==(n=null!==(t=e.getAttribute("data-mce-href"))&&void 0!==t?t:e.getAttribute("href"))&&void 0!==n?n:""},X=(e,t)=>{const n=["noopener"],o=e?e.split(/\s+/):[],r=e=>e.filter((e=>-1===L.inArray(n,e))),l=t?(e=>(e=r(e)).length>0?e.concat(n):n)(o):r(o);return l.length>0?(e=>L.trim(e.sort().join(" ")))(l):""},Y=(e,t)=>(t=t||te(e.selection.getRng())[0]||e.selection.getNode(),le(t)?m.from(e.dom.select("a[href]",t)[0]):m.from(e.dom.getParent(t,"a[href]"))),Z=(e,t)=>Y(e,t).isSome(),ee=(e,t)=>t.fold((()=>e.getContent({format:"text"})),(e=>e.innerText||e.textContent||"")).replace(/\uFEFF/g,""),te=e=>J(e,H),ne=e=>L.grep(e,H),oe=e=>ne(e).length>0,re=e=>{const t=e.schema.getTextInlineElements();if(Y(e).exists((e=>e.hasAttribute("data-mce-block"))))return!1;const n=e.selection.getRng();return!!n.collapsed||0===J(n,(e=>1===e.nodeType&&!G(e)&&!V(t,e.nodeName.toLowerCase()))).length},le=e=>s(e)&&"FIGURE"===e.nodeName&&/\bimage\b/i.test(e.className),ie=(e,t,n)=>{const o=e.selection.getNode(),r=Y(e,o),l=((e,t)=>{const n={...t};if(0===S(e).length&&!R(e)){const e=X(n.rel,"_blank"===n.target);n.rel=e||null}return m.from(n.target).isNone()&&!1===A(e)&&(n.target=O(e)),n.href=((e,t)=>"http"!==t&&"https"!==t||W(e)?e:t+"://"+e)(n.href,_(e)),n})(e,(e=>{return t=["title","rel","class","target"],n=(t,n)=>(e[n].each((e=>{t[n]=e.length>0?e:null})),t),o={href:e.href},((e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)})(t,((e,t)=>{o=n(o,e)})),o;var t,n,o})(n));e.undoManager.transact((()=>{n.href===t.href&&t.attach(),r.fold((()=>{((e,t,n,o)=>{const r=e.dom;le(t)?ge(r,t,o):n.fold((()=>{e.execCommand("mceInsertLink",!1,o)}),(t=>{e.insertContent(r.createHTML("a",o,r.encode(t)))}))})(e,o,n.text,l)}),(t=>{e.focus(),((e,t,n,o)=>{n.each((e=>{V(t,"innerText")?t.innerText=e:t.textContent=e})),e.dom.setAttribs(t,o),e.selection.select(t)})(e,t,n.text,l)}))}))},ae=e=>{const{class:t,href:n,rel:o,target:r,text:l,title:a}=e;return((e,t)=>{const n={};var o;return((e,t,n,o)=>{((e,t)=>{const n=q(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}})(e,((e,r)=>{(t(e,r)?n:o)(e,r)}))})(e,((e,t)=>!1===i(e)),(o=n,(e,t)=>{o[t]=e}),g),n})({class:t.getOrNull(),href:n,rel:o.getOrNull(),target:r.getOrNull(),text:l.getOrNull(),title:a.getOrNull()})},se=(e,t,n)=>{const o=((e,t)=>{const n=e.options.get,o={allow_html_data_urls:n("allow_html_data_urls"),allow_script_urls:n("allow_script_urls"),allow_svg_data_urls:n("allow_svg_data_urls")},r=t.href;return{...t,href:z.isDomSafe(r,"a",o)?r:""}})(e,n);e.hasPlugin("rtc",!0)?e.execCommand("createlink",!1,ae(o)):ie(e,t,o)},ce=e=>{e.hasPlugin("rtc",!0)?e.execCommand("unlink"):(e=>{e.undoManager.transact((()=>{const t=e.selection.getNode();le(t)?ue(e,t):(e=>{const t=e.dom,n=e.selection,o=n.getBookmark(),r=n.getRng().cloneRange(),l=t.getParent(r.startContainer,"a[href]",e.getBody()),i=t.getParent(r.endContainer,"a[href]",e.getBody());l&&r.setStartBefore(l),i&&r.setEndAfter(i),n.setRng(r),e.execCommand("unlink"),n.moveToBookmark(o)})(e),e.focus()}))})(e)},ue=(e,t)=>{var n;const o=e.dom.select("img",t)[0];if(o){const r=e.dom.getParents(o,"a[href]",t)[0];r&&(null===(n=r.parentNode)||void 0===n||n.insertBefore(o,r),e.dom.remove(r))}},ge=(e,t,n)=>{var o;const r=e.select("img",t)[0];if(r){const t=e.create("a",n);null===(o=r.parentNode)||void 0===o||o.insertBefore(t,r),t.appendChild(r)}},de=(e,t)=>k(t,(t=>(e=>{return V(t=e,n="items")&&void 0!==t[n]&&null!==t[n];var t,n})(t)?de(e,t.items):y(t.value===e,t))),me=(e,t)=>{const n={text:e.text,title:e.title},o=(e,o)=>{const r=(l=t,i=o,"link"===i?l.link:"anchor"===i?l.anchor:m.none()).getOr([]);var l,i;return((e,t,n,o)=>{const r=o[t],l=e.length>0;return void 0!==r?de(r,n).map((t=>({url:{value:t.value,meta:{text:l?e:t.text,attach:g}},text:l?e:t.text}))):m.none()})(n.text,o,r,e)};return{onChange:(e,t)=>{const r=t.name;return"url"===r?(e=>{const t=(o=e.url,y(n.text.length<=0,m.from(null===(r=o.meta)||void 0===r?void 0:r.text).getOr(o.value)));var o,r;const l=(e=>{var t;return y(n.title.length<=0,m.from(null===(t=e.meta)||void 0===t?void 0:t.title).getOr(""))})(e.url);return t.isSome()||l.isSome()?m.some({...t.map((e=>({text:e}))).getOr({}),...l.map((e=>({title:e}))).getOr({})}):m.none()})(e()):((e,t)=>h.call(e,t))(["anchor","link"],r)>-1?o(e(),r):"text"===r||"title"===r?(n[r]=e()[r],m.none()):m.none()}}};var he=tinymce.util.Tools.resolve("tinymce.util.Delay");const fe=e=>{const t=e.href;return t.indexOf("@")>0&&-1===t.indexOf("/")&&-1===t.indexOf("mailto:")?m.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:e=>({...e,href:"mailto:"+t})}):m.none()},pe=(e,t)=>n=>{const o=n.href;return 1===e&&!W(o)||0===e&&/^\s*www(\.|\d\.)/i.test(o)?m.some({message:`The URL you entered seems to be an external link. Do you want to add the required ${t}:// prefix?`,preprocess:e=>({...e,href:t+"://"+o})}):m.none()},ke=e=>{const t=e.dom.select("a:not([href])"),n=p(((e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o})(t,(e=>{const t=e.name||e.id;return t?[{text:t,value:"#"+t}]:[]})));return n.length>0?m.some([{text:"None",value:""}].concat(n)):m.none()},ve=e=>{const t=E(e);return t.length>0?I(t):m.none()},xe=e=>{try{return m.some(JSON.parse(e))}catch(e){return m.none()}},ye=(e,t)=>{const n=S(e);if(n.length>0){const o=v(t,"_blank"),r=e=>X(U(e),o);return(!1===R(e)?K(r):I)(n)}return m.none()},be=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],_e=e=>{const t=A(e);return l(t)?I(t).orThunk((()=>m.some(be))):!1===t?m.none():m.some(be)},we=(e,t,n)=>{const o=e.getAttrib(t,n);return null!==o&&o.length>0?m.some(o):m.none()},Ce=(e,t)=>(e=>{const t=t=>e.convertURL(t.value||t.url||"","href"),n=C(e);return new Promise((e=>{o(n)?fetch(n).then((e=>e.ok?e.text().then(xe):Promise.reject())).then(e,(()=>e(m.none()))):c(n)?n((t=>e(m.some(t)))):e(m.from(n))})).then((e=>e.bind(K(t)).map((e=>e.length>0?[{text:"None",value:""}].concat(e):e))))})(e).then((n=>{const o=((e,t)=>{const n=e.dom,o=re(e)?m.some(ee(e.selection,t)):m.none(),r=t.bind((e=>m.from(n.getAttrib(e,"href")))),l=t.bind((e=>m.from(n.getAttrib(e,"target")))),i=t.bind((e=>we(n,e,"rel"))),a=t.bind((e=>we(n,e,"class")));return{url:r,text:o,title:t.bind((e=>we(n,e,"title"))),target:l,rel:i,linkClass:a}})(e,t);return{anchor:o,catalogs:{targets:_e(e),rels:ye(e,o.target),classes:ve(e),anchor:ke(e),link:n},optNode:t,flags:{titleEnabled:T(e)}}})),Oe=e=>{const t=(e=>{const t=Y(e);return Ce(e,t)})(e);t.then((t=>{const n=((e,t)=>n=>{const o=n.getData();if(!o.url.value)return ce(e),void n.close();const r=e=>m.from(o[e]).filter((n=>!v(t.anchor[e],n))),l={href:o.url.value,text:r("text"),target:r("target"),rel:r("rel"),class:r("linkClass"),title:r("title")},i={href:o.url.value,attach:void 0!==o.url.meta&&o.url.meta.attach?o.url.meta.attach:g};((e,t)=>k([fe,pe(_(e),N(e))],(e=>e(t))).fold((()=>Promise.resolve(t)),(n=>new Promise((o=>{((e,t,n)=>{const o=e.selection.getRng();he.setEditorTimeout(e,(()=>{e.windowManager.confirm(t,(t=>{e.selection.setRng(o),n(t)}))}))})(e,n.message,(e=>{o(e?n.preprocess(t):t)}))})))))(e,l).then((t=>{se(e,i,t)})),n.close()})(e,t);return((e,t,n)=>{const o=e.anchor.text.map((()=>({name:"text",type:"input",label:"Text to display"}))).toArray(),r=e.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],l=((e,t)=>{const n=e.anchor,o=n.url.getOr("");return{url:{value:o,meta:{original:{value:o}}},text:n.text.getOr(""),title:n.title.getOr(""),anchor:o,link:o,rel:n.rel.getOr(""),target:n.target.or(t).getOr(""),linkClass:n.linkClass.getOr("")}})(e,m.from(O(n))),i=e.catalogs,a=me(l,i);return{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:p([[{name:"url",type:"urlinput",filetype:"file",label:"URL",picker_text:"Browse links"}],o,r,x([i.anchor.map(j("anchor","Anchors")),i.rels.map(j("rel","Rel")),i.targets.map(j("target","Open link in...")),i.link.map(j("link","Link list")),i.classes.map(j("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:l,onChange:(e,{name:t})=>{a.onChange(e.getData,{name:t}).each((t=>{e.setData(t)}))},onSubmit:t}})(t,n,e)})).then((t=>{e.windowManager.open(t)}))};var Ne=tinymce.util.Tools.resolve("tinymce.util.VK");const Ae=e=>e.selection.isCollapsed()||(e=>{const t=e.selection.getRng(),n=t.startContainer;return H(n)&&t.startContainer===t.endContainer&&1===e.dom.select("img",n).length})(e)?ne(e.dom.getParents(e.selection.getStart())):te(e.selection.getRng()),Se=e=>Ae(e)[0],Ee=(e,t)=>{if(t){const n=Q(t);if(/^#/.test(n)){const t=e.dom.select(n);t.length&&e.selection.scrollIntoView(t[0],!0)}else(e=>{const t=document.createElement("a");t.target="_blank",t.href=e,t.rel="noreferrer noopener";const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),((e,t)=>{document.body.appendChild(e),e.dispatchEvent(t),document.body.removeChild(e)})(t,n)})(t.href)}},Te=e=>()=>{e.execCommand("mceLink",!1,{dialog:!0})},Re=e=>()=>{Ee(e,Se(e))},Pe=(e,t)=>(e.on("NodeChange",t),()=>e.off("NodeChange",t)),Le=e=>t=>{const n=()=>{t.setActive(!e.mode.isReadOnly()&&Z(e,e.selection.getNode())),t.setEnabled(e.selection.isEditable())};return n(),Pe(e,n)},Me=e=>t=>{const n=()=>{t.setEnabled(e.selection.isEditable())};return n(),Pe(e,n)},De=e=>t=>{const n=()=>t.setEnabled((e=>1===Ae(e).length)(e));return n(),Pe(e,n)},Be=e=>t=>{const n=e.dom.getParents(e.selection.getStart()),o=n=>{t.setEnabled((t=>{return oe(t)||(n=e.selection.getRng(),te(n).length>0);var n})(n)&&e.selection.isEditable())};return o(n),Pe(e,(e=>o(e.parents)))};e.add("link",(e=>{(e=>{const t=e.options.register;t("link_assume_external_targets",{processor:e=>{const t=o(e)||a(e);return t?!0===e?{value:1,valid:t}:"http"===e||"https"===e?{value:e,valid:t}:{value:0,valid:t}:{valid:!1,message:"Must be a string or a boolean."}},default:!1}),t("link_context_toolbar",{processor:"boolean",default:!1}),t("link_list",{processor:e=>o(e)||c(e)||u(e,r)}),t("link_default_target",{processor:"string"}),t("link_default_protocol",{processor:"string",default:"https"}),t("link_target_list",{processor:e=>a(e)||u(e,r),default:!0}),t("link_rel_list",{processor:"object[]",default:[]}),t("link_class_list",{processor:"object[]",default:[]}),t("link_title",{processor:"boolean",default:!0}),t("allow_unsafe_link_target",{processor:"boolean",default:!1}),t("link_quicklink",{processor:"boolean",default:!1})})(e),(e=>{e.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Te(e),onSetup:Le(e),shortcut:"Meta+K"}),e.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Re(e),onSetup:De(e)}),e.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:()=>ce(e),onSetup:Be(e)})})(e),(e=>{e.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Re(e),onSetup:De(e)}),e.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onSetup:Me(e),onAction:Te(e)}),e.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:()=>ce(e),onSetup:Be(e)})})(e),(e=>{e.ui.registry.addContextMenu("link",{update:t=>e.dom.isEditable(t)?oe(e.dom.getParents(t,"a"))?"link unlink openlink":"link":""})})(e),(e=>{const t=t=>{const n=e.selection.getNode();return t.setEnabled(Z(e,n)),g};e.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Le(e)},label:"Link",predicate:t=>w(e)&&Z(e,t),initValue:()=>Y(e).fold((()=>""),Q),commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:t=>{const n=e.selection.getNode();return t.setActive(Z(e,n)),Le(e)(t)},onAction:t=>{const n=t.getValue(),o=(t=>{const n=Y(e),o=re(e);if(n.isNone()&&o){const o=ee(e.selection,n);return y(0===o.length,t)}return m.none()})(n);se(e,{href:n,attach:g},{href:n,text:o,title:m.none(),rel:m.none(),target:m.from(O(e)),class:m.none()}),(e=>{e.selection.collapse(!1)})(e),t.hide()}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:t,onAction:t=>{ce(e),t.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:t,onAction:t=>{Re(e)(),t.hide()}}]})})(e),(e=>{e.on("click",(t=>{const n=ne(e.dom.getParents(t.target));1===n.length&&Ne.metaKeyPressed(t)&&(t.preventDefault(),Ee(e,n[0]))})),e.on("keydown",(t=>{if(!t.isDefaultPrevented()&&13===t.keyCode&&(e=>!0===e.altKey&&!1===e.shiftKey&&!1===e.ctrlKey&&!1===e.metaKey)(t)){const n=Se(e);n&&(t.preventDefault(),Ee(e,n))}}))})(e),(e=>{e.addCommand("mceLink",((t,n)=>{!0!==(null==n?void 0:n.dialog)&&P(e)?e.dispatch("contexttoolbar-show",{toolbarKey:"quicklink"}):Oe(e)}))})(e),(e=>{e.addShortcut("Meta+K","",(()=>{e.execCommand("mceLink")}))})(e)}))}();