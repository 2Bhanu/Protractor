//import {element} from "protractor";

ng_clickloc = require('./util.js')

function page(){
    this.clickcustomer = function () {
        element(by.css('[ng-click="customer()"]')).click()
        /*element(ng_clickloc('customer()')).click().then(function(){

        })*/
    }
}

module.exports = new page()