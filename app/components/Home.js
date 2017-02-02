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
			totalPages: 1,
			page: 1,
			resultsOnPage: [],
			saveJobIndex: null
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.keyword == this.state.keyword && prevState.location == this.state.location && prevState.page == this.state.page) {
			// do nothing
		} else {
			apiHelper.getAuthenticJobs([this.state.keyword, this.state.location, this.state.page])
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
	handlePageUpdate: function(page) {
		this.setState({
			page: page
		})
	},
	render: function() {
		var searchHomeStyle = {
			height: 90 + 'vh',
			// width: 100 + 'vw',
		    zIndex: 9,
		    textAlign: 'center',
		    position: 'absolute',
		    width: 800,
		    top: 50 + '%',
		    marginTop: -180,
		    left: 50 + '%',
		    marginLeft: -400,
		}

		var searchHeaderStyle = {

		}

		var resultsHomeStyle = {
			marginTop: 100 + 'vh',
		}


		return (
			<div className="container-fluid"> 
				<div className="row">
					<div className="col-sm-12" style={searchHomeStyle}>
						<h1 className="text-center" style={searchHeaderStyle}>Career Compiler</h1>
						<Search setTerms={this.setTerms}/>
						<a className="btn" href="#results"><i className="glyphicon glyphicon-arrow-down"></i></a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4" id="results" style={resultsHomeStyle}>
						<Results resultsOnPage={this.state.resultsOnPage} page={this.state.page} totalPages={this.state.totalPages} passIndex={this.saveJobIndex} onPageUpdate={this.handlePageUpdate} />
					</div>
				</div>
			</div>	
		)
	}
})

module.exports = Home