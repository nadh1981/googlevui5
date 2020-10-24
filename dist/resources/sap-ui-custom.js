//@ui5-bundle sap-ui-custom.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"budhil/ui5/googlev/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/core/ComponentSupport"],function(e){"use strict";return e.extend("budhil.ui5.googlev.Component",{metadata:{manifest:"json"}})});
},
	"budhil/ui5/googlev/controller/App.controller.js":function(){sap.ui.define(["sap/ui/Device","sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/json/JSONModel"],function(e,o,i,r,t){"use strict";return o.extend("sap.ui.demo.todo.controller.App",{})});
},
	"budhil/ui5/googlev/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"budhil.ui5.googlev","type":"application"},"sap.ui5":{"dependencies":{"minUI5Version":"1.75.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.ui.unified":{}}},"rootView":{"viewName":"budhil.ui5.googlev.view.App","type":"XML","async":true,"id":"app"},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"budhil.ui5.googlev.i18n.i18n","supportedLocales":["en","de"],"fallbackLocale":"en"}},"":{"type":"sap.ui.model.json.JSONModel","uri":"model/todoitems.json"}},"resources":{"css":[{"uri":"css/styles.css"}]}}}',
	"budhil/ui5/googlev/view/App.view.xml":'<mvc:View controllerName="budhil.ui5.googlev.controller.App" displayBlock="true" xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:f="sap.f" xmlns:mvc="sap.ui.core.mvc"><App><page><content><Title text="Hello" /></content></page></App></mvc:View>'
}});
