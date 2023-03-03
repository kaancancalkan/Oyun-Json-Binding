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
                



            }
        });
    });
