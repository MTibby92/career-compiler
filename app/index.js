var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')
var ReactStormpath = require('react-stormpath')


ReactStormpath.init()

ReactDOM.render(
	routes,
	document.getElementById('app')
)