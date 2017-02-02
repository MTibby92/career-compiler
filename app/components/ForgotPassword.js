var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Link = ReactRouter.Link
var ResetPasswordForm = ReactStormpath.ResetPasswordForm

var ForgotPassword = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3>Forgot Password</h3>
						<hr />
					</div>
				</div>
				<ResetPasswordForm />
			</div>	
		)
	}
})

module.exports = ForgotPassword