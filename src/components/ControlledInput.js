import React from 'react'

export default class ControlledInput extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fields: {
				...props.fields
			}
		}
	}

	handleFieldChange = e => {
		this.setState({
			...this.state,
			fields: {
				...this.state.fields,
				[e.target.name]: e.target.value,
			}
		}, () => console.log(this.state))
	}

	render() {
		return (
			<form>
				{Object.keys(this.state.fields).map(fieldName =>
					<div>
						<label type="text" htmlFor={fieldName}> {fieldName} </label>:
						<input type="text" id={fieldName} value={this.state.fields[fieldName]} onChange={this.handleFieldChange} />
					</div>
				)}
			</form>
		)
	}
}