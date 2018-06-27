import React, { Component } from 'react';
import ol from 'openlayers';
import { Header, Menu } from 'semantic-ui-react'

const MenuComponent = {
  	position: "absolute",
  	top: "20px",
  	left: "20px",
}

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
  	if(name === 'location1'){
  		var coordinates = [14.3282390, 46.0015459]
  		this.props.changePosition(coordinates);
  	}
  	
  	return this.setState({ activeItem: name })
  }

  render() {
  	const { activeItem } = this.state;

    return (
      <div style={MenuComponent}>
      	<Menu vertical>
	        <Menu.Item
	          name='location1'
	          active={activeItem === 'location1'}
	          onClick={this.handleItemClick}
	        >
	          <Header as='h4'>Location 1</Header>
	          <p>Drenov grič 186b, 1360 Vrhnika</p>
	        </Menu.Item>

	        <Menu.Item name='location2' active={activeItem === 'location2'} onClick={this.handleItemClick}>
	          <Header as='h4'>Location 2</Header>
	          <p>Riharjeva ulica 34, 1000 Ljubljana</p>
	        </Menu.Item>

	        <Menu.Item name='location3' active={activeItem === 'location3'} onClick={this.handleItemClick}>
	          <Header as='h4'>Location 3</Header>
	          <p>Vrazov trg 2, 1000 Ljubljana</p>
	        </Menu.Item>
      	</Menu>
      </div>
    );
  }
}

export default App;