var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var Modal = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container">
				Modal
			</div>
		)
	}
})

module.exports = Modal