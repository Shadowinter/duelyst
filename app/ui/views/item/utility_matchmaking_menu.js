'use strict';

var Logger = require('app/common/logger');
var UtilityMenuItemView = require('./utility_menu');
var NavigationManager = require('app/ui/managers/navigation_manager');

/**
 * Matchmaking utility menu that shows basic utilities.
 */
var UtilityMatchmakingMenuItemView = UtilityMenuItemView.extend({

	id: "app-utility-matchmaking-menu"

});

// Expose the class either via CommonJS or the global object
module.exports = UtilityMatchmakingMenuItemView;
