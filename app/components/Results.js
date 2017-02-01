var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Pagination = require('react-bootstrap').Pagination
var JobTile = require('./JobTile')

var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var Results = React.createClass({
	getInitialState: function() {
		return {
			show: false
		}
	},
	saveJob: function(index) {
		console.log(index)
		console.log(index.job_index)
		this.props.passIndex(index.job_index)
	},
	handleSelect: function(eventKey) {
		console.log(eventKey)
		this.props.onPageUpdate(eventKey)
	},
	render: function() {
		return (
			<div >
				<h3>Results go here</h3>
				<ul className="media-list">
					{this.props.resultsOnPage.map(function(result, num) {
						return (
							<JobTile key={num} tileNum={num} data={result} onClick={this.openModal} saveJob={this.saveJob} />
						)
					}.bind(this))}
				</ul>
				<div className="text-center">
					<Pagination 
						items={this.props.totalPages} 
						maxButtons={this.props.totalPages} 
						activePage={parseInt(this.props.page)} 
						prev
					    next
					    first
					    last
					    ellipsis
					    boundaryLinks
					    onSelect={this.handleSelect} />		
				</div>	
			</div>
		)
	}
})

module.exports = Results