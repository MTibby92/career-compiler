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
			keyword: '',
			location: ''
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.keyword == this.state.keyword && prevState.location == this.state.location) {
			// do nothing
		} else {
			apiHelper.getAuthenticJobs([this.state.keyword, this.state.location])
				.then(function(results) {
					// do something to display the results
					console.log(results.data)
				}.bind(this))
		}
	},
	setTerms: function(terms) {
		this.setState({
			keyword: terms[0],
			location: terms[1]
		});
	},
	render: function() {
		return (
			<div className="container"> 
				<h1>Career Compiler</h1>
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<Search setTerms={this.setTerms}/>
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