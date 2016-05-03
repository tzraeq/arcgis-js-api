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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","../core/JSONSupporter"],function(e,i){var t='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',r=[-20037508.342788905,20037508.342788905],a=[-20037508.342787,20037508.342787],n=[102113,102100,3857,3785],l=[102113,102100,3857,3785,4326],s=i.createSubclass({declaredClass:"esri.SpatialReference",classMetadata:{properties:{isWebMercator:{dependsOn:["wkid"],readOnly:!0},isWrappable:{dependsOn:["wkid"],readOnly:!0},isWGS84:{dependsOn:["wkid"],readOnly:!0}}},_info:{102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:r,origin:a,dx:1e-5},102100:{wkTemplate:t,valid:r,origin:a,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:r,origin:a,dx:1e-5},3857:{wkTemplate:t,valid:r,origin:a,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,180],dx:1e-5}},normalizeCtorArgs:function(i){var t,r={};return"object"==typeof i?e.mixin(r,i):(t="string"==typeof i?"wkt":"wkid",r[t]=i,r)},isWGS84:null,_isWGS84Getter:function(){return 4326===this.wkid},isWebMercator:null,_isWebMercatorGetter:function(){return-1!==n.indexOf(this.wkid)},isWrappable:null,_isWrappableGetter:function(){return-1!==l.indexOf(this.wkid)},wkid:null,wkt:null,clone:function(){if(this===s.WGS84)return s.WGS84;if(this===s.WebMercator)return s.WebMercator;var e=new s;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),e},equals:function(e){var i=!1;return e&&(this===e&&(i=!0),this.wkid||e.wkid?i=this.wkid===e.wkid||this.isWebMercator&&e.isWebMercator||this.wkid===e.latestWkid||e.wkid===this.latestWkid:this.wkt&&e.wkt&&(i=this.wkt.toUpperCase()===e.wkt.toUpperCase())),i},toJSON:function(){var e=null;return null!=this.wkid?(e={wkid:this.wkid},null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e={wkt:this.wkt}),e},_getInfo:function(){return this.wkid?this._info[this.wkid]:null},_canProject:function(e){var i=!1;return e&&(i=this.isWebMercator&&4326===e.wkid||e.isWebMercator&&4326===this.wkid),i}});return s.fromJSON=function(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return s.WebMercator;if(4326===e.wkid)return s.WGS84}var i=new s;return i.read(e),i},s.WGS84=new s(4326),s.WebMercator=new s({wkid:102100,latestWkid:3857}),Object.freeze&&(Object.freeze(s.WGS84),Object.freeze(s.WebMercator)),s});