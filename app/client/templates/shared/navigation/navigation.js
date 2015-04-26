/*****************************************************************************/
/* Navigation: Event Handlers */
/*****************************************************************************/
Template.Navigation.events({
  "click #toggle-side-navigation": function(e) {
    e.preventDefault();
    $('core-drawer-panel#core-drawer-panel-main')[0].togglePanel();
  }
});

/*****************************************************************************/
/* Navigation: Helpers */
/*****************************************************************************/
Template.Navigation.helpers({
  isHome: isHome,
  isDesktop: function() { 
    return isDesktop.get() 
  },
  showMenuButton: function() {
    return (this.isTopNav && !isDesktop.get())
  },
  showLogo: function() {
    return ((this.isTopNav && isHome()) || 
            (this.isTopNav && !isDesktop.get()) || 
            (!this.isTopNav && (!isHome() || !isDesktop.get())))
    //return this.isTopNav
  },
  showTopNavMenu: function() {
    return ((this.isTopNav && isHome() && isDesktop.get()))
  },
  showSideNavMenu: function() {
    return !this.isTopNav;
  },
  menuArray: function() {
    return [
      // {
      //   name: "Google",
      //   path: "http://www.google.com",
      //   linkInside: false
      // },
      
      {
        name: "Home",
        path: "inside",
        linkInside: true,
        hasChild: false
      },      
      
      {
        name: "Transparency Seal",
        path: "posts",
        linkInside: true,
        hasChild: false
      },
      {
        name: "Services",
        path: "posts",
        linkInside: true,
        hasChild: false
      },
      {
        name: "Commodities",
        path: "inside",
        linkInside: true,
        hasChild: true,
        sublinks: [
          {
            name: "Rice",
            path: "inside",
            linkInside: true,
            hasChild: false 
          },
          {
            name: "Corn",
            path: "inside",
            linkInside: true,
            hasChild: false 
          }
        ]
      }, 
      {
        name: "Programs",
        path: "settings",
        linkInside: true,
        hasChild: false
      }
    ]
  }
});

/*****************************************************************************/
/* Navigation: Lifecycle Hooks */
/*****************************************************************************/
Template.Navigation.created = function () {
};

Template.Navigation.rendered = function () {
};

Template.Navigation.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
