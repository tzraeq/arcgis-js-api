// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dijit/Dialog","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../base/xml/xmlUtil","../../../form/InputTextArea","../../../form/tools/ClickableTool","../../../editor/util/OkCancelBar","dojo/i18n!../../../nls/i18nArcGIS","dijit/Editor","dijit/_editor/plugins/FontChoice","dijit/_editor/plugins/TextColor","dijit/_editor/plugins/ViewSource","dijit/_editor/plugins/LinkDialog"],function(e,t,o,i,n,r,a,l,d,s,u,c,f,h,m,p,g,j,w,v,y,_){var C=e([h],{postCreate:function(){this.inherited(arguments),this._makeEditTool()},_makeEditTool:function(){var e=this;a.add(this.domNode,"gxeInputHtmlTextArea");var t=l.create("span",{},this.focusNode,"after");new m({label:g.htmlEditor.button,whenToolClicked:function(){e._openDialog()}},t)},_openDialog:function(){var e,t=this,o=null,i=this.parentXNode.label,r=this.getInputValue();null===r&&(r=""),r=r.replace(/(\r\n|\r|\n|\n\r)/g,"<br />");var d=l.create("div",{}),s=["bold","italic","underline","foreColor","hiliteColor","|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent","createLink","unlink","removeFormat","|","undo","redo","|","viewsource",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:["Arial","Courier New","Garamond","Tahoma","Times New Roman","Verdana"]},{name:"dijit._editor.plugins.FontChoice",command:"fontSize",custom:["2","3","4","5","6"]}];e=new j({plugins:s},l.create("div",{},d)),e.setValue(r),e.startup();var u=new p({onOkClick:function(){if(e){var i=e.get("value");null!==i&&(t.setInputValue(i),o&&o.hide())}},onCancelClick:function(){o&&o.hide()}},l.create("div",{},d));o=new n({"class":"gxeDialog gxePopupDialog gxeHtmlEditorDialog",title:i,content:d}),t.isLeftToRight()||a.add(o.domNode,"gxeRtl"),t.own(o.on("hide",function(){setTimeout(function(){e.destroyRecursive(!1),u.destroyRecursive(!1),o.destroyRecursive(!1)},300)})),o.show()},getInputValue:function(){return this.focusNode?c.cleanHtml(this.focusNode.value):null},setInputValue:function(e){"undefined"==typeof e&&(e=null),e=c.cleanHtml(e),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()},setNodeText:function(e,t){if(e===this.viewOnlyNode)try{this._cleanForView(e,t)}catch(o){console.error(o)}else this.inherited(arguments)},_cleanForView:function(e,t){var o=l.create("div",{},e,"last");o.innerHTML=t,this._walkForView(o)},_walkForView:function(e){var t,i,n,a,l;e.nodeType===f.nodeTypes.ELEMENT_NODE&&(t=e.localName,"undefined"!=typeof t&&null!==t&&(i=t.toLowerCase(),o.forEach(e.attributes,function(t){n=t.localName,"undefined"!=typeof n&&null!==n&&(a=n.toLowerCase(),0===a.indexOf("on")?r.set(e,n,null):"href"===a&&(l=t.nodeValue,"undefined"!=typeof l&&null!==l&&0===l.toLowerCase().indexOf("http")&&r.remove(e,n)))},this),"a"===i&&r.set(e,"target","_blank"),o.forEach(e.childNodes,function(e){this._walkForView(e)},this)))}});return s("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputHtmlArea",C,u),C});