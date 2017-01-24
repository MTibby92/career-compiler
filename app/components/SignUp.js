var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Link = ReactRouter.Link
var RegistrationForm = ReactStormpath.RegistrationForm

var SignUp = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h3>Sign Up!</h3>
						<hr />
					</div>
				</div>
				<RegistrationForm />
			</div>	
		)
	}
})

module.exports = SignUp