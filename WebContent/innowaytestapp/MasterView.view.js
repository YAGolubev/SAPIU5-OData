sap.ui.jsview("innowaytestapp.MasterView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf innowaytestapp.MasterView
	*/ 
	getControllerName : function() {
		return "innowaytestapp.MasterView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf innowaytestapp.MasterView
	*/ 
	createContent : function(oController) {
		oTemplate = new sap.m.StandardListItem("idItems", {
						//title : "{CategoryName}",
						title : "{Name}",
						   type : sap.m.ListType.Navigation,
						   press : function(oEvent) {
								 oController.handlePress(oEvent); }
							  });

		olistCatgery =  new sap.m.List("idHdr", {			
			inset : true,
			itemPress : function(oEvent) {  //Item Press Event
			 oController.onSelect(oEvent); }
		});
		
		olistCatgery.bindAggregation( "items", { 
			 path : "/value",
			 template: oTemplate
			 
		});		

		return new sap.m.Page({
			title: "Categories",		
			content: [olistCatgery]
		});
	}
});