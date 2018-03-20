import React from 'react';
import { Form, Tag, Button, Switch, Input } from 'antd';
import styled from 'styled-components';
import { connect } from 'redux';
import mapImage from '../images/map.png';

const FormItem = Form.Item;

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: black;
`;

const Card = styled.div`
  padding: 24px;
  padding-left: 20%;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

class AircraftScan extends React.Component {
  componentDidMount = () => {};

  createCordinates = e => {
    // attach event to image
    var coordX =
      (e.pageX - 33) / 60 -
      (e.target.offsetLeft - 33) / 60 -
      (e.target.width - 33) * 0.5 / 30;
    var coordY = -(
      (e.pageY - 27) / 90 -
      (e.target.offsetTop - 27) / 90 -
      (e.target.height - 27) * 0.5 / 45
    );
    alert(coordX.toFixed(1) + ' , ' + coordY.toFixed(1));
  };

  render() {
    return (
      <div>
        <Title>Aircraft Scanning</Title>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Tag color="green" size="large">
                On Air {}
              </Tag>
            </FormItem>
            <FormItem>
              <Button type="primary" size="large">
                Refresh
              </Button>
            </FormItem>
            <FormItem label="Real Time:">
              <Switch />
            </FormItem>
            <FormItem label="Limit show aircrafts:">
              <Input size="large" placeholder="large size" />
            </FormItem>
            <FormItem label="Country:">
              <Input size="large" placeholder="large size" />
            </FormItem>
          </Form>
        </Card>
        <div
          className="Map"
          style={{ textAlign: 'center', paddingTop: '30px' }}>
          <img src={mapImage} alt="" onClick={this.createCordinates} />
        </div>
      </div>
    );
  }
}

export default AircraftScan;
