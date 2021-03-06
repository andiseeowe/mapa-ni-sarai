/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	"click .button-ko": function(e) {
		e.preventDefault();
		toast(Session.get("Exmo"), 3000);
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	variable: function() {
		return "Something About the App"
	},
	x: function() {
		return Session.get("Exmo");
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
	Session.set("Exmo", 1)
};

Template.Home.destroyed = function () {
};
