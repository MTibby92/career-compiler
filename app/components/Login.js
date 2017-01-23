var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Link = ReactRouter.Link
var LoginForm = ReactStormpath.LoginForm

var Login = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<LoginForm />
			</div>	
		)
	}
})

module.exports = Login