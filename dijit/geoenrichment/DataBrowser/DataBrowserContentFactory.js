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

define(["dojo/_base/declare","dojo/dom-class","../_WizardPage","./Breadcrumb","./DataBrowserBase","./DataBrowserManager","./DataCategoriesPage","./DataCollectionsPage","./DataVariablesPage","./DataVariableGrid","dojo/i18n!../../../nls/jsapi"],function(e,a,t,n,r,i,o,s,c,u,d){return e(null,{createManager:function(e){return new i(e)},createBreadcrumb:function(e){return new n(e)},createPage:function(a,n){var i;switch(a){case r.CATEGORIES_PAGE:i=o;break;case r.COLLECTIONS_PAGE:i=s;break;case r.VARIABLES_PAGE:i=c}return new(i=e([t,i],{buildRendering:function(){function e(e){var n=e.toLowerCase(),r=t[n+"Button"];r===!0&&(r=d.geoenrichment.dijit.WizardButtons[n]),r&&a.push({id:n,label:r,onClick:function(){t.emit(e,{bubbles:!1})}})}this.inherited(arguments);var a=[],t=this;e("Cancel"),e("OK"),e("Back"),a.length?this.addButtons(a):this.buttonsNode&&(this.buttonsNode.style.display="none")}}))(n)},createVariableGrid:function(e,a){return new u(e,a)}})});