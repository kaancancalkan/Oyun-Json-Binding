sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller ,JSONModel) {
        "use strict";

        return Controller.extend("json.mertcalkam.controller.Main", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel("Wolfteam");
                oModel.loadData(sap.ui.require.toUrl("json/mertcalkam/model/wolfteam.json"));

                



            },
            handleSelectionChange: function(oEvent) {
                const oTable = this.byId("charactersTable");
                const oBinding = oTable.getBinding("items");
                const aFilters = [];
              
                // Get the selected side(s) from the MultiComboBox
                const aSelectedSides = oEvent.getSource().getSelectedKeys();
              
                // Create a filter based on the selected side(s)
                if (aSelectedSides.length > 0) {
                  const oFilter = new sap.ui.model.Filter("Side", sap.ui.model.FilterOperator.EQ, aSelectedSides);
                  aFilters.push(oFilter);
                }
              
                // Apply filters to the binding
                oBinding.filter(aFilters);
                console.log("Alert")
              }
              
             
              
              
              
              
              
        });
    });
