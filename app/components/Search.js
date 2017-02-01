var React = require('react')
var ReactRouter = require('react-router')
var ReactStormpath = require('react-stormpath')

var Search = React.createClass({
	getInitialState: function() {
		return {
			keyword: '',
			location: ''
		}
	},
	handleUpdateKeyword: function(e) {
		this.setState({
			keyword: e.target.value
		})
	},
	handleUpdateLocation: function(e) {
		this.setState({
			location: e.target.value
		})
	},
	handleSubmitSearch: function(e) {
		e.preventDefault()
		this.props.setTerms([this.state.keyword, this.state.location])
		this.setState({
			keyword: '',
			location: ''
		})
	},
	render: function() {
		var searchBarStyle = {
			margin: 40 + 'px auto'
		}

		return (
			// <h3>Search bar goes here</h3>
			<form className="form-inline" style={searchBarStyle} onSubmit={this.handleSubmitSearch}>
				<div className="form-group">
					<label className="sr-only" htmlFor="keyword">Keyword</label>
					<input 
						type="text" 
						className="form-control" 
						id="keyword" 
						placeholder="Keyword"
						onChange={this.handleUpdateKeyword}
						value={this.state.keyword} />
				</div>
				<div className="form-group">
					<label className="sr-only" htmlFor="location">Location</label>
					<input 
						type="text" 
						className="form-control" 
						id="location" 
						placeholder="Location"
						onChange={this.handleUpdateLocation}
						value={this.state.location} 
						style={{marginLeft: -5}} />
				</div>
				<button type="submit" className="btn btn-default" style={{marginLeft:-5}}>Search</button>
			</form>
		)
	}
})

module.exports = Search