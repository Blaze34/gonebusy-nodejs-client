
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetUsersResponse
 *
 * @constructor
 */
GetUsersResponse = function (obj) {
    if(!obj) {
        this.users = null;     
    } else {
        this.users = obj.users.map(function(model){
            return new EntitiesUserResponse(model);
        });
    }
};

GetUsersResponse.prototype = new BaseModel();
GetUsersResponse.prototype.constructor = GetUsersResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetUsersResponse.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
GetUsersResponse.prototype.setUsers = function(value) {
    this.users = value;
};


module.exports = GetUsersResponse;