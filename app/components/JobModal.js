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

		return (
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" backdrop={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Wrapped Text</h4>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
					<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button >Add to MyJobs</Button>
					<Button href={ external }>Apply</Button>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
})

module.exports = JobModal