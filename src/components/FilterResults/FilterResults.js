import React from 'react';
import { Menu, Dropdown, Button, Icon, message, Slider } from 'antd';
import './FilterResults.css';

/**
 * 
 * @param {handleClick} e - handles button click
 * @param {handleMenuClick} e - handles menu click
 * @function {menu} - handles menu styling
 * @param {FilterResults} props - contains filter results bar styling
 */

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      low - high
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      high - low
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      most relevant
    </Menu.Item>
  </Menu>
);

const FilterResults = (props) => {
  return (

    <div className="Filter-Container">
      <Dropdown overlay={menu} id="dropdown-button">
        <Button>
          Sort <Icon type="down" />
        </Button>
      </Dropdown>

      <p id="price-text"> Price range </p>

      <p id="price-range"> 0€ - +300€ <br /> ( Average price per night - ) </p>

      <Slider defaultValue={30} style={{ width: '30%', marginLeft: '40px' }} />
    </div>

  )
}

export default FilterResults;