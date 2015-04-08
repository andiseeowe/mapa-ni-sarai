Template.MasterLayout.helpers({
  forceNarrow: function() {
    if (isHome()) return isHome();
    else return !isDesktop.get();
  },
  disableEdgeSwipe: function() {
    return isDesktop.get()
  },
  responsiveWidth: 750
});

Template.MasterLayout.events({
});

Template.MasterLayout.rendered = function(){
  checkIsDesktop()
  $(window).resize(checkIsDesktop);
};
