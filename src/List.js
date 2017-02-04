import React, { Component } from 'react';
import './List.css';

class List extends Component {

	render() {
		return <div className='List'>
			<div className='List-header'>{this.props.title}</div>
			<div className='List-content'>
				Content goes here
			</div>	
		</div>;
	}
}

export default List;