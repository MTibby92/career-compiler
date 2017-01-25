var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var JobTile = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		return (
			<li className="list-group-item media">
				<div className="media-left">
					<a href="#">
						<img className="media-object" src={(this.props.data.company.logo).split('.net')[1]} alt="logo" />
					</a>
				</div>
				<div className="media-body">
					<h4 className="media-heading">Job Title</h4>
					<p>Job Description Here</p>
				</div>
			</li>
		)
	}
})

module.exports = JobTile