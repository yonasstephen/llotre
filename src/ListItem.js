import React, { Component } from 'react';
import './styles/ListItem.css';

class ListItem extends Component {
	render() {
		return <div className='ListItem'>
				<p>{this.props.text}</p>
			</div>;
	}
}

export default ListItem;