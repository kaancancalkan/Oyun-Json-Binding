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
            
              onSearch: function() {
                
                var aFilters = [];
                var aSelectedItems = this.byId("wolfteamName").getSelectedItems();
                for (var i = 0; i < aSelectedItems.length; i++) {
                    var sValue = aSelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters.push(oFilter);
                }
                var a2SelectedItems = this.byId("wolfteamSide").getSelectedItems();
                for (var i = 0; i < a2SelectedItems.length; i++) {
                    var sValue = a2SelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Side", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters.push(oFilter);
                }
                var a3SelectedItems = this.byId("wolfteamHealth").getSelectedItems();
                for (var i = 0; i < a3SelectedItems.length; i++) {
                    var sValue = a3SelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Health", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters.push(oFilter);
                }
                
                var oTable = this.byId("charactersTable");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(aFilters);
            }
              
              
              
              
              
        });
    });
