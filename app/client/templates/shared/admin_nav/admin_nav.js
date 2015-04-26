/*****************************************************************************/
/* Admin: Event Handlers */
/*****************************************************************************/
Template.Admin.events({
  "click #toggle-side-navigation": function(e) {
    e.preventDefault();
    $('core-drawer-panel#core-drawer-panel-main')[0].togglePanel();
  }
});

/*****************************************************************************/
/* Admin: Helpers */
/*****************************************************************************/
Template.Admin.helpers({
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
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.created = function () {
};

Template.Admin.rendered = function () {
};

Template.Admin.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
