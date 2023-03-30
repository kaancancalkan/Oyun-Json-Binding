sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("json.mertcalkam.controller.Main", {
      onInit: function () {
        var oModel = this.getOwnerComponent().getModel("Wolfteam");
        oModel.loadData(
          sap.ui.require.toUrl("json/mertcalkam/model/wolfteam.json")
        );

        var oModel2 = this.getOwnerComponent().getModel("Metin2");
        oModel2.loadData(
          sap.ui.require.toUrl("json/mertcalkam/model/metin2.json")
        );
      },
      getAssignedFilters: function (filterItems) {
        const assignedFilters = [];

        filterItems.forEach((item) => {
          if (item.isChecked) {
            assignedFilters.push(item);
          }
        });

        return assignedFilters;
      },

      onSearch: function () {
        var oFilterModel = this.getView().getModel("Filter");
        var aFilters = [];
        var aFilters2 = [];
        var aSelectedItems = this.byId("wolfteamName").getSelectedItems();
        for (var i = 0; i < aSelectedItems.length; i++) {
          var sValue = aSelectedItems[i].getKey();
          var oFilter = new sap.ui.model.Filter(
            "Name",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters.push(oFilter);
        }
        var a2SelectedItems = this.byId("wolfteamSide").getSelectedItems();
        for (var i = 0; i < a2SelectedItems.length; i++) {
          var sValue = a2SelectedItems[i].getKey();
          var oFilter = new sap.ui.model.Filter(
            "Side",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters.push(oFilter);
        }
        var a3SelectedItems = this.byId("wolfteamHealth").getSelectedItems();
        for (var i = 0; i < a3SelectedItems.length; i++) {
          var sValue = a3SelectedItems[i].getKey();
          var oFilter = new sap.ui.model.Filter(
            "Health",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters.push(oFilter);
        }
        
        var a4SelectedItems = this.byId("Metin2Name").getSelectedItems();
        for (var i = 0; i < a4SelectedItems.length; i++) {
          var sValue = a4SelectedItems[i].getKey();
          var oFilter = new sap.ui.model.Filter(
            "Name",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters2.push(oFilter);
        }
        
       /* var a4SelectedItems = oFilterModel.getProperty("/Names")
        for (var i = 0; i < a4SelectedItems.length; i++) {
          var sValue = a4SelectedItems[i];
          var oFilter = new sap.ui.model.Filter(
            "Name",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters2.push(oFilter);
        } */
        
        var a5SelectedItems = this.byId("Metin2Side").getSelectedItems();
        for (var i = 0; i < a5SelectedItems.length; i++) {
          var sValue = a5SelectedItems[i].getKey();
          var oFilter = new sap.ui.model.Filter(
            "Side",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters2.push(oFilter);
        }
         var a6SelectedItems = this.byId("Metin2Health").getSelectedItems();
         for (var i = 0; i < a6SelectedItems.length; i++) {
           var sValue = a6SelectedItems[i].getKey();
           var oFilter = new sap.ui.model.Filter(
             "Health",
             sap.ui.model.FilterOperator.EQ,
            sValue
           );
          aFilters2.push(oFilter);
         }

        /* var a6SelectedItems = oFilterModel.getProperty("/Healths")
        for (var i = 0; i < a6SelectedItems.length; i++) {
          var sValue = a6SelectedItems[i];
          var oFilter = new sap.ui.model.Filter(
            "Name",
            sap.ui.model.FilterOperator.EQ,
            sValue
          );
          aFilters2.push(oFilter);
        }
        */

        var oTable = this.byId("charactersTable");
        var oTable2 = this.byId("charactersTable2");
        var oBinding = oTable.getBinding("items");
        var oBinding2 = oTable2.getBinding("items");
        oBinding.filter(aFilters);
        oBinding2.filter(aFilters2);
      },

      ClearFilterbar: function () {
        //Metin2>/Characters
        var oFilterModel = this.getView().getModel("Filter");
        oFilterModel.setProperty("/Names", []);
        oFilterModel.setProperty("/Healths", []);
        oFilterModel.setProperty("/Sides", [])

        //         var DeleteValues = [
        //           aSelectedItems,
        //           a2SelectedItems,
        //           a3SelectedItems,
        //           a4SelectedItems,
        //           a5SelectedItems,
        //           a6SelectedItems,
        //         ];
        //         var toplam = 0;
        //         for (let i = 0; i < DeleteValues.length; i++) {
        //           toplam = array[i];
        //         }
        //         veri = toplam;
        //         silinecekVeriler = [];
        //         while (true) {
        //                 if (!veri) {
        //                     break
        //                 }
        //                 silinecekVeriler.push(veri);
        //         }
        //         let index = 0;
        //         while (index < silinecekVeriler.length) {
        //             let veri = silinecekVeriler[index];
        //             index++;
        // }
        //         var oFilterBar = this.byId("filterbar");
        //         var oFilterBar2 = this.byId("filterbar2");
        //         oFilterBar.clearVariantSelection();
        //         oFilterBar2.clearVariantSelection();
        //         aFilters.ClearFilterbar();
        //         aFilters2.ClearFilterbar();
        //         console.log(oFilterBar);
        // aFilters.clear()
        // aFilters2.clear()
        // oBinding.filter(aFilters);
        // oBinding2.filter(aFilters2);
      },
    });
  }
);
