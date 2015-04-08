isHome = function() {
  if (Router.current().route) return Router.current().route.path(this)=="/"
  else return false
}