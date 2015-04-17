/*****************************************************************************/
/* Auxillary: Event Handlers */
/*****************************************************************************/
Template.Auxillary.events({
  "click #toggle-side-navigation": function(e) {
    e.preventDefault();
    $('core-drawer-panel#core-drawer-panel-main')[0].togglePanel();
  }
});

/*****************************************************************************/
/* Auxillary: Helpers */
/*****************************************************************************/
Template.Auxillary.helpers({
  auxArray: function() {
    return [
      {
        name: "Rice",
        path: "rice",
        linkInside: true
      },
      
      {
        name: "Corn",
        path: "corn",
        linkInside: true
      },      
      
      {
        name: "Banana",
        path: "banana",
        linkInside: true
      },
      {
        name: "Coconut",
        path: "coconut",
        linkInside: true
      },
      
      {
        name: "Coffee",
        path: "coffee",
        linkInside: true
      },      
      
      {
        name: "Cacao",
        path: "cacao",
        linkInside: true
      }
    ]
  }
});

/*****************************************************************************/
/* Auxillary: Lifecycle Hooks */
/*****************************************************************************/
Template.Auxillary.created = function () {
};

Template.Auxillary.rendered = function () {
};

Template.Auxillary.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
