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
            
              onFilterChange: function() {
                var aFilters = [];
                var aSelectedItems = this.byId("charactersTable").getSelectedItems();
                for (var i = 0; i < aSelectedItems.length; i++) {
                    var sPath = aSelectedItems[i].getKey();
                    var sValue = aSelectedItems[i].getText();
                    var oFilter = new sap.ui.model.Filter(sPath, sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters.push(oFilter);
                }
                var oTable = this.byId("charactersTable");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(aFilters);
            }
              
              
              
              
              
        });
    });
