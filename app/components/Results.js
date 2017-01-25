var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var JobTile = require('./JobTile')
var Modal = require('./Modal')

var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var Results = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<div className="container">
				<h3>Results go here</h3>
				{this.props.resultsOnPage.map(function(result, num) {
					return (
						<JobTile key={num} data={result} />
					)
				}.bind(this))}

				{this.props.resultsOnPage.map(function(result, num) {
					return (
						<Modal key={num} data={result} />
					)
				}.bind(this))}
				
			</div>
		)
	}
})

module.exports = Results