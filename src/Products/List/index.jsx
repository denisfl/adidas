import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import Filters from './Filters';
import { Wrapper } from './styled';

export default () => (
  <div>
    <Filters />
    <Wrapper>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <Card
            url="/item"
            price="230"
            imgSrc={require('./product-01.jpg')}
            hasSale
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card
            url="/item"
            price="170"
            imgSrc={require('./product-02.jpg')}
            hasSale
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card url="/item" price="180" imgSrc={require('./product-03.jpg')} />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card
            url="/item"
            price="170"
            imgSrc={require('./product-02.jpg')}
            hasSale
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card
            url="/item"
            price="230"
            imgSrc={require('./product-03.jpg')}
            hasSale
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card url="/item" price="170" imgSrc={require('./product-01.jpg')} />
        </Col>
      </Row>
    </Wrapper>
  </div>
);
