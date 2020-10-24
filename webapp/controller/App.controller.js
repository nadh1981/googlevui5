sap.ui.define([
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function(Device, Controller, Filter, FilterOperator, JSONModel) {
    "use strict";

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return Controller.extend("sap.ui.demo.todo.controller.App", {
        key: "",
        onInit: function(oEvent) {
            this.getView().setModel(new sap.ui.model.json.JSONModel({}, true), "img");
        },

        getFileUploader: function() {
            return this.getView().byId("fileUploader");
        },

        onUploadComplete: function(oEvent) {
            debugger;
        },

        fileChange: function(oEvent) {
            this.File = oEvent.getParameters().files;
        },

        handleUploadPress: function(oEvent) {
            var response = this.uploadFile();
            this.showImage();
            response.then(function(response) {
                this.getImgModel().setProperty("/texts", response.responses[0].textAnnotations);
            }.bind(this)).catch(function(response) {
                this.getImgModel().setProperty("/texts", []);
            }.bind(this));
        },

        getImgModel: function() {
            if (!this.getView().getModel("img")) {
                this.getView().setModel(new sap.ui.model.json.JSONModel({}, true), "img");
            }
            return this.getView().getModel("img");
        },

        showImage: function() {
            var path = URL.createObjectURL(this.File[0]);
            this.getImgModel().setProperty("/url", path);
        },

        uploadFile: function() {
            var file = this.File[0];
            return new Promise(async function(resolve, reject) {
                var base64File = await toBase64(file);
                base64File = base64File.replace("data:image/png;base64,", '');
                var url = `https://vision.googleapis.com/v1/images:annotate?key=${this.key}`;
                var b = JSON.stringify({
                    "requests": [{
                        "image": {
                            "content": base64File
                        },
                        "features": [{
                            "type": "TEXT_DETECTION",
                            "maxResults": 5
                        }]
                    }]
                });
                var xhr = new XMLHttpRequest;

                xhr.onload = function() {
                    console.log(e.responseText)
                };
                xhr.open("POST", url, !0);
                xhr.send(b);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var content = xhr.responseText;
                        if (content != '' && (content)) {
                            resolve(JSON.parse(content));
                        } else {
                            reject(JSON.parse(content));
                        }
                    }
                }.bind(this);

            }.bind(this));
        }
    });
});