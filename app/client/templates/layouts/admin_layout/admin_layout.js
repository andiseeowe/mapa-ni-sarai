Template.AdminLayout.helpers({
  forceNarrow: function() {
    if (isHome()) return isHome();
    else return !isDesktop.get();
  },
  disableEdgeSwipe: function() {
    return isDesktop.get()
  },
  responsiveWidth: 750
});

Template.AdminLayout.events({
});

Template.AdminLayout.rendered = function(){
  checkIsDesktop()
  $(window).resize(checkIsDesktop);
};
