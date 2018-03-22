import React from 'react';
import { Form, Tag, Button, Switch, Input, Tooltip, Badge } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import mapImage from '../images/map.png';
import * as actions from '../state/AircraftScanning/actions';

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

const Pointing = styled.div`
  padding: 24px;
  padding-left: 20%;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

class AircraftScan extends React.Component {
  constructor() {
    super();
    this.state = { TooltipText: '' };
  }

  componentDidMount = () => {
    this.props.getAircraftList();
  };

  showCoordinates = e => {
    // attach event to image
    var coordX = (e.pageX - e.target.offsetLeft - e.target.width * 0.5) / 3;
    var coordY = (e.pageY - e.target.offsetTop - e.target.height * 0.5) / 3;

    this.setState({
      TooltipText: `${coordX.toFixed(1)},${coordY.toFixed(1)}`,
    });
  };

  render() {
    const { TooltipText } = this.state;
    const { aircrafts, loading } = this.props;
    let Points = [];

    if (aircrafts.length > 0) {
      aircrafts.map((item, index) => {
        if (item.hasOwnProperty('Lat') && item.hasOwnProperty('Long')) {
          const image = document.getElementById('mapImage');
          Points.push(
            <Badge
              key={index}
              status="warning"
              style={{
                top:
                  image.offsetTop + image.height * 0.5 + item.Lat * 3.23 * -1,
                left: image.offsetLeft + image.width * 0.5 + item.Long * 2.78,
                position: 'absolute',
              }}
            />,
          );
        }
      });
    }

    return (
      <div>
        <Title>Aircraft Scanning</Title>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Tag color="green" size="large">
                On Air {aircrafts.length}
              </Tag>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                {...(loading ? { loading: true } : {})}
                size="large">
                Refresh
              </Button>
            </FormItem>
            <FormItem label="Real Time:">
              <Switch />
            </FormItem>
            <FormItem label="Limit show aircrafts:">
              <Input size="large" placeholder="Input quantity" />
            </FormItem>
            <FormItem label="Country:">
              <Input size="large" placeholder="Input Country" />
            </FormItem>
          </Form>
        </Card>
        {Points}
        <div
          className="Map"
          style={{ textAlign: 'center', paddingTop: '30px' }}>
          <Tooltip placement="top" title={TooltipText}>
            <img
              id="mapImage"
              src={mapImage}
              alt=""
              onClick={this.createCordinates}
              onMouseMove={this.showCoordinates}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aircrafts: state.aircraftScanning.aircrafts,
    loading: state.aircraftScanning.loading,
  };
};

export default connect(mapStateToProps, actions)(AircraftScan);
