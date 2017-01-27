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
			location: '',
			totalPages: 0,
			page: 0,
			resultsOnPage: [],
			saveJobIndex: null
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.keyword == this.state.keyword && prevState.location == this.state.location) {
			// do nothing
		} else {
			apiHelper.getAuthenticJobs([this.state.keyword, this.state.location])
				.then(function(results) {
					// do something to display the results
					if (results.data.listings.listing !== this.state.resultsOnPage) {
						console.log(results.data.listings.listing)
						this.setState({
							totalPages: results.data.listings.pages,
							page: results.data.listings.page,
							resultsOnPage: results.data.listings.listing
						})
					}
					
				}.bind(this))
		}

		if (prevState.savveJobIndex == this.state.saveJobIndex) {
			// do nothing
		} else {
			apiHelper.postSaveToMyJobs(this.state.resultsOnPage[this.state.saveJobIndex])
				.then(function(results) {
					console.log('Results of the post:', results)
				}.bind(this)) 
		}
	},
	setTerms: function(terms) {
		this.setState({
			keyword: terms[0],
			location: terms[1]
		});
	},
	saveJobIndex: function(index) {
		this.setState({
			saveJobIndex: index
		})
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
						<Results resultsOnPage={this.state.resultsOnPage} page={this.state.page} totalPages={this.state.totalPages} passIndex={this.saveJobIndex}/>
					</div>
				</div>
			</div>	
		)
	}
})

module.exports = Home