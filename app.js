'use strict';


function SwcenarioRoot(){}

SwcenarioRoot.prototype = {
    get Ifnvalid() {
        var builder = new ScenarioBuilder("invalid");
        return builder;
    },

    get Ufnexpected() {
        return "feofeof";
    }

};



module.exports.re = new SwcenarioRoot();
