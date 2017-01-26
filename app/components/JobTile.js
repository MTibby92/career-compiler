var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var moment = require('moment')
var JobModal = require('./JobModal')

var JobTile = React.createClass({
	getInitialState: function() {
		return {
			show: false
		}
	},
	openModal: function() {
		this.setState({
			show: true
		})
	},
	closeModal: function() {
		this.setState({
			show: false
		})
	},
	render: function() {
		if(this.props.data.company.location) {
			var location = (
				<p>{this.props.data.company.location.name}</p>
			)
		} else if (!this.props.data.company.location && this.props.data.telecommuting) {
			var location = (
				<p>Telecommute</p>
			)
		} else {
			var location = (
				<p>Location Unlisted</p>
			)
		}

		return (
			<li className="list-group-item media" onClick={this.openModal}>
				<div className="media-left media-middle">
					<a href="#">
						<img className="media-object" style={{height: 75, width: 75}} src={(this.props.data.company.logo).split('.net')[1]} alt="logo" />
					</a>
				</div>
				<div className="media-body">
					<h4 className="media-heading" style={{display: 'inline'}}><strong>{this.props.data.title}</strong></h4>
					<p style={{display: 'inline', float:'right'}}>{moment(this.props.data.post_date).fromNow()}</p>
					<p>{this.props.data.company.name}</p>
					{ location }
					<p>{((this.props.data.description).substring(0,200)).replace(/(<([^>]+)>)/ig,"") + '...'}</p>
				</div>
				<JobModal data={this.props.data} show={this.state.show} onHide={this.closeModal} />
			</li>

		)
	}
})

module.exports = JobTile