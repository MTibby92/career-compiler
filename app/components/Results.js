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
	render: function() {
		return (
			<div >
				<h3>Results go here</h3>
				<ul className="media-list">
					{this.props.resultsOnPage.map(function(result, num) {
						return (
							<JobTile key={num} data={result} onClick={this.openModal} />
						)
					}.bind(this))}
				</ul>				
			</div>
		)
	}
})

module.exports = Results