sap.ui.define([], function () {
    "use strict";

    return {

        formatClassification: function (classification_id) {

            if (!classification_id) {
                return classification_id;
            }

            const cleanValue = classification_id.replace(/,/g, "");

            const id = parseInt(cleanValue, 10);

            const map = {
                1000: "Consumo",
                2000: "Imobilizado",
                3000: "Serviços",
                4000: "Projeto"
            };

            return map[id] ? id + " - " + map[id] : classification_id;
        },

        formatBuyerGroup: function (group_id){

            if(!group_id){
                return group_id
            }

            const id = parseInt(group_id)

            const map = {
                1: "Indústria",
                2: "TI",
                3: "Escritório",
                4: "Engenharia",
                5: "Logística"
            };

            return map[id] ? id + " - " + map[id] : group_id;

        },

        formatTitleCount: function(aRequests) {

            var iCount = this.getView().byId("idTable").getBinding("items").getLength();

            return "Total (" + (iCount || 0) + ")";
        }

    };
});