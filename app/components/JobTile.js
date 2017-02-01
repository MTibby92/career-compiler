var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var moment = require('moment')
var JobModal = require('./JobModal')
var apiHelper = require('../utils/apiHelper')

var JobTile = React.createClass({
	getInitialState: function() {
		return {
			saved: false
		}
	},
	// for intial search after refresh or page change
	componentDidMount: function() {
		apiHelper.getJobSaveStatus(this.props.data.id).then(function(response) {
			console.log(response.data)
			this.handleButtonStatus(response.data)
		}.bind(this))
	},
	// for new searches so that tiles update saved status
	componentDidUpdate: function(prevProps, prevState) {
		if (prevProps.data.id == this.props.data.id) {
			// do nothing
		} else {
			apiHelper.getJobSaveStatus(this.props.data.id).then(function(response) {
				console.log(response.data)
				this.handleButtonStatus(response.data)
			}.bind(this))
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
	handleJobSave: function(e) {
		e.preventDefault()
		console.log(this.key)
		console.log(this.props.tileNum)

		this.setState({
			saved: true
		})
		
		var obj = {
			job_index: this.props.tileNum
		}

		this.props.saveJob(obj)
	},
	handleButtonStatus: function(boolean) {
		console.log(boolean)
		this.setState({
			saved: boolean
		})
		// create axios get call
		// create server route to count if _id exists and return
		// set status of saved
		// use that status to determine if button is active or not
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
				<JobModal data={this.props.data} show={this.state.show} onHide={this.closeModal} onSave={this.handleJobSave} buttonStatus={this.state.saved} />
			</li>

		)
	}
})

module.exports = JobTile