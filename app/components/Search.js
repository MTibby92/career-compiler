var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Search = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			location: ''
		}
	},
	handleUpdateTitle: function(e) {
		this.setState({
			title: e.target.value
		})
	},
	handleUpdateLocation: function(e) {
		this.setState({
			location: e.target.value
		})
	},
	handleSubmitSearch: function(e) {
		e.preventDefault()
		this.props.setTerms([this.state.title, this.state.location])
		this.setState({
			title: '',
			location: ''
		})
	},
	render: function() {
		return (
			<h3>Search bar goes here</h3>
		)
	}
})

module.exports = Search