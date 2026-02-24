sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5finalchallenge/model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("ui5finalchallenge.controller.mainView", {
        formatter: formatter,

        onInit() {
            this.getView().bindElement({
                path: "/BuyerRequests(1)",
                parameters: {
                    $expand: "material"
                }
            });
        }
    });
});