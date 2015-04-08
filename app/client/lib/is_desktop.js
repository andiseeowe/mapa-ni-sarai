isDesktop = new ReactiveVar(true);

checkIsDesktop = function(c){
  var isDesktopLocal = isDesktop.get();
  var windowWidth = $(window).innerWidth();
  var responsiveWidth = $('core-drawer-panel#core-drawer-panel-main').attr('responsiveWidth');
  if ((windowWidth > responsiveWidth) != isDesktopLocal ) {
    isDesktop.set(windowWidth > responsiveWidth)
  }
}

Tracker.autorun(checkIsDesktop);