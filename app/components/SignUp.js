var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var SignUp = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="jumbotron col-sm-12 text-center"> 
				<h1>Sign Up Page</h1>
			</div>	
		)
	}
})

module.exports = SignUp