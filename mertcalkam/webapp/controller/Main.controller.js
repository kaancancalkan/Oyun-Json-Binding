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
                
                var oModel2 = this.getOwnerComponent().getModel("Metin2")
                oModel2.loadData(sap.ui.require.toUrl("json/mertcalkam/model/metin2.json"))



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
                var aFilters2 = [];
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
                var a4SelectedItems = this.byId("Metin2Name").getSelectedItems();
                for (var i = 0; i < a4SelectedItems.length; i++) {
                    var sValue = a4SelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters2.push(oFilter);
                }
                var a5SelectedItems = this.byId("Metin2Side").getSelectedItems();
                for (var i = 0; i < a5SelectedItems.length; i++) {
                    var sValue = a5SelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Side", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters2.push(oFilter);
                }
                var a6SelectedItems = this.byId("Metin2Health").getSelectedItems();
                for (var i = 0; i < a6SelectedItems.length; i++) {
                    var sValue = a6SelectedItems[i].getKey();
                    var oFilter = new sap.ui.model.Filter("Health", sap.ui.model.FilterOperator.EQ, sValue);
                    aFilters2.push(oFilter);
                }
              
                
                var oTable = this.byId("charactersTable");
                var oTable2= this.byId("charactersTable2");
                var oBinding = oTable.getBinding("items");
                var oBinding2 = oTable2.getBinding("items")
                oBinding.filter(aFilters);
                oBinding2.filter(aFilters2);
            },
            
              
              
              
              
              
        });
    });
