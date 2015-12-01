sap.ui.controller("innowaytestapp.MasterView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf innowaytestapp.MasterView
*/
	onInit: function() {
//		var sUrl = "http://services.odata.org/Northwind/Northwind.svc/Categories";
		var sUrl = "http://services.odata.org/V3/OData/OData.svc/Categories";
		var omodel = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().byId("idHdr").setModel(omodel);
	},

/**
 * 
 */
	onSelect: function(oEvent) {
		// To get the selected Category ID
		var oItemSelect = oEvent.getParameter("listItem");
		var Context = oItemSelect.getBindingContext();
//		var CatID = Context.getProperty("CategoryID");
		var CatID = Context.getProperty("ID");
			
		// Get the products for the select Category ID
//		var sUrl = "http://services.odata.org/Northwind/Northwind.svc/Categories(" + CatID + ")/Products";//?$format=json";
		var sUrl = "http://services.odata.org/V3/OData/OData.svc/Categories(" + CatID + ")/Products?$format=json";		
		var omodel = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().byId("idPrdList").setModel(omodel);		
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf innowaytestapp.MasterView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf innowaytestapp.MasterView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf innowaytestapp.MasterView
*/
//	onExit: function() {
//
//	}

});