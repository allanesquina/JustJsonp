var jjp = (function( doc, win ) {

	function createScriptElement( url ) {
		var el = doc.createElement( 'script' );
		el.src = url;
		doc.documentElement.getElementsByTagName( 'head' )[0].appendChild( el );
	}

	function get( url, name, fn ) {
		createScriptElement( url );
		win[ name ] = function() {
			fn.apply( this, arguments );
		}
	}

	return {
		get: get
	}
}( document, window ));

var App = App || { service : { http : {} } };
App.service.http.jsonp = Object.create( jjp );

App.service.http.jsonp.get( 'jsonp.js', 'test', function( name ) {
	console.log( name );
});