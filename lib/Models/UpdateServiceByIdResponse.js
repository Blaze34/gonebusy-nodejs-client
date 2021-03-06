
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateServiceByIdResponse
 *
 * @constructor
 */
UpdateServiceByIdResponse = function (obj) {
    if(!obj) {
        this.service = null;     
    } else {
        this.service = new EntitiesServiceResponse(obj.service);
    }
};

UpdateServiceByIdResponse.prototype = new BaseModel();
UpdateServiceByIdResponse.prototype.constructor = UpdateServiceByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesServiceResponse|null}
 */
UpdateServiceByIdResponse.prototype.getService = function() {
    return this.service;
};

/**
 * Setter for Service
 * 
 * @param {EntitiesServiceResponse|null} value 
 */
UpdateServiceByIdResponse.prototype.setService = function(value) {
    this.service = value;
};


module.exports = UpdateServiceByIdResponse;