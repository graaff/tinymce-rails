/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.4.0 (2020-06-30)
 */
!function(){"use strict";var e,t,n,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=function(){return(m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e){return function(){return e}},r=i(!1),s=i(!0),o=function(){return c},c=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:r,isSome:r,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(undefined),or:n,orThunk:t,map:o,each:function(){},bind:o,exists:r,forall:s,filter:o,equals:e,equals_:e,toArray:function(){return[]},toString:i("none()")}),l=function(n){var e=i(n),t=function(){return o},a=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:s,isNone:r,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return l(e(n))},each:function(e){e(n)},bind:a,exists:a,forall:a,filter:function(e){return e(n)?o:c},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(r,function(e){return t(n,e)})}};return o},d={some:l,none:o,from:function(e){return null===e||e===undefined?c:l(e)}},u=Array.prototype.indexOf,h=function(e,t){return n=e,a=t,-1<u.call(n,a);var n,a},p=function(e,t){for(var n=e.length,a=new Array(n),o=0;o<n;o++){var i=e[o];a[o]=t(i,o)}return a},f=function(e,t){return function(e,t,n){for(var a=0,o=e.length;a<o;a++){var i=e[a];if(t(i,a))return d.some(i);if(n(i,a))break}return d.none()}(e,t,r)},g=Object.keys,b=Object.hasOwnProperty,y=function(e,t){return b.call(e,t)},k=[{shortcuts:["Meta + B"],action:"Bold"},{shortcuts:["Meta + I"],action:"Italic"},{shortcuts:["Meta + U"],action:"Underline"},{shortcuts:["Meta + A"],action:"Select all"},{shortcuts:["Meta + Y","Meta + Shift + Z"],action:"Redo"},{shortcuts:["Meta + Z"],action:"Undo"},{shortcuts:["Access + 1"],action:"Header 1"},{shortcuts:["Access + 2"],action:"Header 2"},{shortcuts:["Access + 3"],action:"Header 3"},{shortcuts:["Access + 4"],action:"Header 4"},{shortcuts:["Access + 5"],action:"Header 5"},{shortcuts:["Access + 6"],action:"Header 6"},{shortcuts:["Access + 7"],action:"Paragraph"},{shortcuts:["Access + 8"],action:"Div"},{shortcuts:["Access + 9"],action:"Address"},{shortcuts:["Alt + 0"],action:"Open help dialog"},{shortcuts:["Alt + F9"],action:"Focus to menubar"},{shortcuts:["Alt + F10"],action:"Focus to toolbar"},{shortcuts:["Alt + F11"],action:"Focus to element path"},{shortcuts:["Ctrl + F9"],action:"Focus to contextual toolbar"},{shortcuts:["Shift + Enter"],action:"Open popup menu for split buttons"},{shortcuts:["Meta + K"],action:"Insert link (if link plugin activated)"},{shortcuts:["Meta + S"],action:"Save (if save plugin activated)"},{shortcuts:["Meta + F"],action:"Find (if searchreplace plugin activated)"},{shortcuts:["Meta + Shift + F"],action:"Switch to or from fullscreen mode"}],v=tinymce.util.Tools.resolve("tinymce.Env"),w=function(e){var n=v.mac?{alt:"&#x2325;",ctrl:"&#x2303;",shift:"&#x21E7;",meta:"&#x2318;",access:"&#x2303;&#x2325;"}:{meta:"Ctrl ",access:"Shift + Alt "},t=e.split("+"),a=p(t,function(e){var t=e.toLowerCase().trim();return y(n,t)?n[t]:e});return v.mac?a.join("").replace(/\s/,""):a.join("+")},A=tinymce.util.Tools.resolve("tinymce.util.I18n"),C=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"},{key:"advcode",name:"Advanced Code Editor*"},{key:"formatpainter",name:"Format Painter*"},{key:"powerpaste",name:"PowerPaste*"},{key:"drive",name:"Tiny Drive*"},{key:"tinymcespellchecker",name:"Spell Checker Pro*"},{key:"a11ychecker",name:"Accessibility Checker*"},{key:"linkchecker",name:"Link Checker*"},{key:"mentions",name:"Mentions*"},{key:"mediaembed",name:"Enhanced Media Embed*"},{key:"checklist",name:"Checklist*"},{key:"casechange",name:"Case Change*"},{key:"permanentpen",name:"Permanent Pen*"},{key:"pageembed",name:"Page Embed*"},{key:"comments",name:"Tiny Comments*"},{key:"advtable",name:"Advanced Tables*"},{key:"autocorrect",name:"Autocorrect*"}],T=function(e){var t,n,c=function(e){return'<a href="'+e.url+'" target="_blank" rel="noopener">'+e.name+"</a>"};return{name:"plugins",title:"Plugins",items:[{type:"htmlpanel",presets:"document",html:[null==(n=e)?"":'<div data-mce-tabstop="1" tabindex="-1">'+function(a){var e,t,n,o=(t=g((e=a).plugins),(n=e.getParam("forced_plugins"))===undefined?t:function(e,t){for(var n=[],a=0,o=e.length;a<o;a++){var i=e[a];t(i,a)&&n.push(i)}return n}(t,function(e){return!h(n,e)})),i=p(o,function(e){return"<li>"+(t=a,n=e,f(C,function(e){return e.key===n}).fold(function(){var e=t.plugins[n].getMetadata;return"function"==typeof e?c(e()):n},function(e){return c({name:e.name,url:"https://www.tiny.cloud/docs/plugins/"+e.key})}))+"</li>";var t,n}),r=i.length,s=i.join("");return"<p><b>"+A.translate(["Plugins installed ({0}):",r])+"</b></p><ul>"+s+"</ul>"}(n)+"</div>",(t=p(["Accessibility Checker","Advanced Code Editor","Advanced Tables","Case Change","Checklist","Tiny Comments","Tiny Drive","Enhanced Media Embed","Format Painter","Link Checker","Mentions","MoxieManager","Page Embed","Permanent Pen","PowerPaste","Spell Checker Pro"],function(e){return"<li>"+A.translate(e)+"</li>"}).join(""),'<div data-mce-tabstop="1" tabindex="-1"><p><b>'+A.translate("Premium plugins:")+"</b></p><ul>"+t+'<li class="tox-help__more-link" "><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+A.translate("Learn more...")+"</a></li></ul></div>")].join("")}]}},x=tinymce.util.Tools.resolve("tinymce.EditorManager"),P=function(e,t){var n,a,o,i,r,s={name:"shortcuts",title:"Handy Shortcuts",items:[{type:"table",header:["Action","Shortcut"],cells:p(k,function(e){var t=p(e.shortcuts,w).join(" or ");return[e.action,t]})}]},c={name:"keyboardnav",title:"Keyboard Navigation",items:[{type:"htmlpanel",presets:"document",html:"<h1>Editor UI keyboard navigation</h1>\n\n<h2>Activating keyboard navigation</h2>\n\n<p>The sections of the outer UI of the editor - the menubar, toolbar, sidebar and footer - are all keyboard navigable. As such, there are multiple ways to activate keyboard navigation:</p>\n<ul>\n  <li>Focus the menubar: Alt + F9 (Windows) or &#x2325;F9 (MacOS)</li>\n  <li>Focus the toolbar: Alt + F10 (Windows) or &#x2325;F10 (MacOS)</li>\n  <li>Focus the footer: Alt + F11 (Windows) or &#x2325;F11 (MacOS)</li>\n</ul>\n\n<p>Focusing the menubar or toolbar will start keyboard navigation at the first item in the menubar or toolbar, which will be highlighted with a gray background. Focusing the footer will start keyboard navigation at the first item in the element path, which will be highlighted with an underline. </p>\n\n<h2>Moving between UI sections</h2>\n\n<p>When keyboard navigation is active, pressing tab will move the focus to the next major section of the UI, where applicable. These sections are:</p>\n<ul>\n  <li>the menubar</li>\n  <li>each group of the toolbar </li>\n  <li>the sidebar</li>\n  <li>the element path in the footer </li>\n  <li>the wordcount toggle button in the footer </li>\n  <li>the branding link in the footer </li>\n</ul>\n\n<p>Pressing shift + tab will move backwards through the same sections, except when moving from the footer to the toolbar. Focusing the element path then pressing shift + tab will move focus to the first toolbar group, not the last.</p>\n\n<h2>Moving within UI sections</h2>\n\n<p>Keyboard navigation within UI sections can usually be achieved using the left and right arrow keys. This includes:</p>\n<ul>\n  <li>moving between menus in the menubar</li>\n  <li>moving between buttons in a toolbar group</li>\n  <li>moving between items in the element path</li>\n</ul>\n\n<p>In all these UI sections, keyboard navigation will cycle within the section. For example, focusing the last button in a toolbar group then pressing right arrow will move focus to the first item in the same toolbar group. </p>\n\n<h1>Executing buttons</h1>\n\n<p>To execute a button, navigate the selection to the desired button and hit space or enter.</p>\n\n<h1>Opening, navigating and closing menus</h1>\n\n<p>When focusing a menubar button or a toolbar button with a menu, pressing space, enter or down arrow will open the menu. When the menu opens the first item will be selected. To move up or down the menu, press the up or down arrow key respectively. This is the same for submenus, which can also be opened and closed using the left and right arrow keys.</p>\n\n<p>To close any active menu, hit the escape key. When a menu is closed the selection will be restored to its previous selection. This also works for closing submenus.</p>\n\n<h1>Context toolbars and menus</h1>\n\n<p>To focus an open context toolbar such as the table context toolbar, press Ctrl + F9 (Windows) or &#x2303;F9 (MacOS).</p>\n\n<p>Context toolbar navigation is the same as toolbar navigation, and context menu navigation is the same as standard menu navigation.</p>\n\n<h1>Dialog navigation</h1>\n\n<p>There are two types of dialog UIs in TinyMCE: tabbed dialogs and non-tabbed dialogs.</p>\n\n<p>When a non-tabbed dialog is opened, the first interactive component in the dialog will be focused. Users can navigate between interactive components by pressing tab. This includes any footer buttons. Navigation will cycle back to the first dialog component if tab is pressed while focusing the last component in the dialog. Pressing shift + tab will navigate backwards.</p>\n\n<p>When a tabbed dialog is opened, the first button in the tab menu is focused. Pressing tab will navigate to the first interactive component in that tab, and will cycle through the tab\u2019s components, the footer buttons, then back to the tab button. To switch to another tab, focus the tab button for the current tab, then use the arrow keys to cycle through the tab buttons.</p>"}]},l=T(e),u=(i='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+(a=x.majorVersion,o=x.minorVersion,0===a.indexOf("@")?"X.X.X":a+"."+o)+"</a>",{name:"versions",title:"Version",items:[{type:"htmlpanel",html:"<p>"+A.translate(["You are using {0}",i])+"</p>",presets:"document"}]}),h=m(((n={})[s.name]=s,n[c.name]=c,n[l.name]=l,n[u.name]=u,n),t.get());return r=e,d.from(r.getParam("help_tabs")).fold(function(){return t=g(e=h),-1!==(n=t.indexOf("versions"))&&(t.splice(n,1),t.push("versions")),{tabs:e,names:t};var e,t,n},function(e){return t=h,n={},a=p(e,function(e){return"string"==typeof e?(y(t,e)&&(n[e]=t[e]),e):(n[e.name]=e).name}),{tabs:n,names:a};var t,n,a})},M=function(o,i){return function(){var e=P(o,i),a=e.tabs,t=e.names,n={type:"tabpanel",tabs:function(e){for(var t=[],n=function(e){t.push(e)},a=0;a<e.length;a++)e[a].each(n);return t}(p(t,function(e){return y(t=a,n=e)?d.from(t[n]):d.none();var t,n}))};o.windowManager.open({title:"Help",size:"medium",body:n,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{}})}};!function F(){a.add("help",function(e){var t,n,a,o,i,r=(t={},{get:function(){return t},set:function(e){t=e}}),s={addTab:function(e){var t=n.get();t[e.name]=e,n.set(t)}},c=M(e,n=r);return o=c,(a=e).ui.registry.addButton("help",{icon:"help",tooltip:"Help",onAction:o}),a.ui.registry.addMenuItem("help",{text:"Help",icon:"help",shortcut:"Alt+0",onAction:o}),i=c,e.addCommand("mceHelp",i),e.shortcuts.add("Alt+0","Open help dialog","mceHelp"),s})}()}();