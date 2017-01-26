var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')
var Modal = require('react-bootstrap').Modal
var Button = require('react-bootstrap').Button

var Authenticated = ReactStormpath.Authenticated
var NotAuthenticated = ReactStormpath.NotAuthenticated

var JobModal = React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	render: function() {
		if (!this.props.data.apply_url) {
			var external = this.props.data.url
		} else {
			var external = this.props.data.apply_url
		}

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
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" backdrop={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">{this.props.data.title} for {this.props.data.company.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div dangerouslySetInnerHTML={{__html:this.props.data.description}} />
					<br/>
					<p><strong>Perks</strong>: {this.props.data.perks} </p>
					<p><strong>Location</strong>: { location }</p>
					<p>{this.props.data.type.name}</p>
					<a href={this.props.data.url} target="_blank">Authentic Jobs Post</a>
				</Modal.Body>
				<Modal.Footer>
					<Button >Add to MyJobs</Button>
					<Button href={ external } target="_blank">Apply</Button>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
})

module.exports = JobModal