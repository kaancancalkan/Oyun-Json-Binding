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
            getAssignedFilters: function(filterItems) {
                const assignedFilters = [];
              
                filterItems.forEach((item) => {
                  if (item.isChecked) {
                    assignedFilters.push(item);
                  }
                });
              
                return assignedFilters;
              },
            
              onFilterChange: function(oEvent) {
                const oTable = this.byId("charactersTable");
                const oBinding = oTable.getBinding("items");
                
                // Create an array for all filter values
                const aFilters = [];
                
                // Get the filter data from the filter bar
                const oFilterBar = this.byId("filterbar");
                const aFilterData = oFilterBar.getFilterGroupItems();
                
                // Loop through the filter data and create filters
                if (aFilterData.length > 0) {
                  for (let i = 0; i < aFilterData.length; i++) {
                    const oControl = aFilterData[i].getControl();
                    const sValue = oControl.getValue();
                    if (sValue) {
                      const oFilter = new sap.ui.model.Filter(aFilterData[i].getKey(), sap.ui.model.FilterOperator.Contains, sValue);
                      aFilters.push(oFilter);
                    }
                  }
                }
                
                // Apply filters to the binding
                oBinding.filter(aFilters);
                console.log("F tEST")
              }
              
              
              
              
              
        });
    });
