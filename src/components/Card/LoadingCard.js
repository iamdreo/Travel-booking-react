import React, { Component } from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

/**
 * @param none takes in no parameters
 * @returns styling for when card is loading, shows a skeleton card
 */

const LoadingCards = () => {

  return (
    <div>


      <Card style={{ width: 850, height: 250, marginTop: 16, marginLeft: 20 }} loading={true}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>

      <Card style={{ width: 850, height: 250, marginTop: 16, marginLeft: 20 }} loading={true}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>



    </div>
  );
}

export default LoadingCards;