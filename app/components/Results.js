var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

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
			</div>
		)
	}
})

module.exports = Results