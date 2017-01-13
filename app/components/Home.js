var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Home = React.createClass({
	getInitialState: function() {
		return {
			loggedIn: false
		}
	},
	render: function() {
		return (
			<div className="jumbotron col-sm-12 text-center"> 
				<h1>Career Compiler</h1>
				<div>
					{this.state.loggedIn ? (
						<div>
							<p>You are logged in!</p>
						</div>
					) : (
						<div>
							<p>You are logged out</p>
						</div>
					)}
				</div>
			</div>	
		)
	}
})

module.exports = Home