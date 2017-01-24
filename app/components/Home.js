var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Link = ReactRouter.Link

var Search = require('./Search')
var Results = require('./Results')

var apiHelper = require('../utils/apiHelper')

var Home = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			location: ''
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.title == this.state.title && prevState.location == this.state.location) {
			// do nothing
		} else {
			apiHelper.getResults([this.state.title, this.state.location])
				.then(function(results) {
					// do something to display the results
				}.bind(this))
		}
	},
	render: function() {
		return (
			<div className="container"> 
				<h1>Career Compiler</h1>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<Search />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<Results />
					</div>
				</div>
			</div>	
		)
	}
})

module.exports = Home