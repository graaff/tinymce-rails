/**
 * TinyMCE version 7.1.0 (2024-05-08)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const o=("function",e=>"function"==typeof e);var n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),t=tinymce.util.Tools.resolve("tinymce.util.Tools");const a=e=>o=>o.options.get(e),c=a("save_enablewhendirty"),i=a("save_onsavecallback"),s=a("save_oncancelcallback"),r=(e,o)=>{e.notificationManager.open({text:o,type:"error"})},l=e=>o=>{const n=()=>{o.setEnabled(!c(e)||e.isDirty())};return n(),e.on("NodeChange dirty",n),()=>e.off("NodeChange dirty",n)};e.add("save",(e=>{(e=>{const o=e.options.register;o("save_enablewhendirty",{processor:"boolean",default:!0}),o("save_onsavecallback",{processor:"function"}),o("save_oncancelcallback",{processor:"function"})})(e),(e=>{e.ui.registry.addButton("save",{icon:"save",tooltip:"Save",enabled:!1,onAction:()=>e.execCommand("mceSave"),onSetup:l(e),shortcut:"Meta+S"}),e.ui.registry.addButton("cancel",{icon:"cancel",tooltip:"Cancel",enabled:!1,onAction:()=>e.execCommand("mceCancel"),onSetup:l(e)}),e.addShortcut("Meta+S","","mceSave")})(e),(e=>{e.addCommand("mceSave",(()=>{(e=>{const t=n.DOM.getParent(e.id,"form");if(c(e)&&!e.isDirty())return;e.save();const a=i(e);if(o(a))return a.call(e,e),void e.nodeChanged();t?(e.setDirty(!1),t.onsubmit&&!t.onsubmit()||("function"==typeof t.submit?t.submit():r(e,"Error: Form submit field collision.")),e.nodeChanged()):r(e,"Error: No form element found.")})(e)})),e.addCommand("mceCancel",(()=>{(e=>{const n=t.trim(e.startContent),a=s(e);o(a)?a.call(e,e):e.resetContent(n)})(e)}))})(e)}))}();