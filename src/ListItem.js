import React, { Component } from 'react';
import './styles/ListItem.css';

class ListItem extends Component {
	render() {
		return <div className='ListItem' draggable='true' 
					onDragStart={this.props.onDragStart}>
				<p>{this.props.text}</p>
			</div>;
	}
}

export default ListItem;