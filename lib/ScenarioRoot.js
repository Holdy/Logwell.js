'use strict';

var ScenarioBuilder = require('./ScenarioBuilder');

function ScenarioRoot() {

}

ScenarioRoot.prototype = {
    get Ifnvalid() {
        var builder = new ScenarioBuilder("invalid");
        return builder;
    },

    get Ufnexpected() {
        return "feofeof";
    }

};


module.exports = ScenarioRoot;