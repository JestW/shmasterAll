handleError:function(s, xhr, status, e) {
// If a local callback was specified, fire it
  if ( s.error ) {
    s.error.call( s.context || s, xhr, status, e );
  }
  // Fire the global callback
  if ( s.global ) {
    (s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );
  }
}
