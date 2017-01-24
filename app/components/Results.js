var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var Results = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<h3>Results go here</h3>
		)
	}
})

module.exports = Results