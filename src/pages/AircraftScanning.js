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

class AircraftScan extends React.Component {
  constructor() {
    super();
    this.state = {
      TooltipText: '',
      Interval: null,
    };
  }

  componentDidMount = () => {
    this.props.getAircraftList();
  };

  showCoordinates = e => {
    // attach event to image
    var coordX = (e.pageX - e.target.offsetLeft - e.target.width * 0.5) / 2.78;
    var coordY = (e.pageY - e.target.offsetTop - e.target.height * 0.5) / 3.23;

    this.setState({
      TooltipText: `${coordX.toFixed(1)},${coordY.toFixed(1)}`,
    });
  };

  GetAircrafts = e => {
    this.props.getAircraftList();
  };

  LimitShow = e => {
    const { aircrafts } = this.props;
    this.props.filterAircraftsNumber(aircrafts, e.target.value);
  };

  CountryFilter = e => {
    const { aircrafts } = this.props;
    this.props.filterAircraftsCountry(aircrafts, e.target.value);
  };

  AutoRefresh = checked => {
    if (checked) {
      this.setState({
        Interval: setInterval(() => this.props.getAircraftList(), 20000),
      });
    } else {
      clearInterval(this.state.Interval);
    }
  };

  getLatitude = (offsetTop, height, Lat) => {
    return offsetTop + height * 0.5 + Lat * 3.23 * -1;
  };
  getLongitude = (offsetLeft, width, Long) => {
    return offsetLeft + width * 0.5 + Long * 2.78;
  };

  render() {
    const { TooltipText } = this.state;
    const { aircrafts, aircraftFiltered, loading } = this.props;
    let Points = [];

    if (aircrafts.length > 0 || aircraftFiltered.length > 0) {
      const AirCraftData =
        aircraftFiltered.length > 0 ? aircraftFiltered : aircrafts;
      AirCraftData.map((item, index) => {
        if (item.hasOwnProperty('Lat') && item.hasOwnProperty('Long')) {
          const image = document.getElementById('mapImage');
          const Pointing = {
            top: this.getLatitude(image.offsetTop, image.height, item.Lat),
            left: this.getLongitude(image.offsetLeft, image.width, item.Long),
            position: 'absolute',
          };
          Points.push(
            <Badge
              key={index}
              status={
                item.Alt <= 1000
                  ? 'error'
                  : item.Alt >= 1000 && item.Alt <= 3000 ? 'warning' : 'success'
              }
              style={Pointing}
            />,
          );
        }
      });
    }

    return (
      <div>
        <Title style={{ paddingTop: '10px' }}>Aircraft Scanning</Title>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Tag color="green" size="large">
                On Air{' '}
                {aircraftFiltered.length > 0
                  ? aircraftFiltered.length
                  : aircrafts.length}
              </Tag>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                {...(loading ? { loading: true } : {})}
                size="large"
                onClick={this.GetAircrafts}>
                Refresh
              </Button>
            </FormItem>
            <FormItem label="Real Time:">
              <Switch onChange={this.AutoRefresh} />
            </FormItem>
            <FormItem label="Limit show aircrafts:">
              <Input
                size="large"
                placeholder="Input quantity"
                onChange={this.LimitShow}
              />
            </FormItem>
            <FormItem label="Country:">
              <Input
                size="large"
                placeholder="Input Country"
                onChange={this.CountryFilter}
                onBlur={this.CountryFilter}
              />
            </FormItem>
          </Form>
        </Card>
        <div
          className="Map"
          style={{ textAlign: 'center', paddingTop: '30px' }}>
          <Tooltip placement="top" title={TooltipText}>
            <img
              id="mapImage"
              src={mapImage}
              alt=""
              onMouseMove={this.showCoordinates}
            />
          </Tooltip>
        </div>
        {Points}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aircrafts: state.aircraftScanning.aircrafts,
    aircraftFiltered: state.aircraftScanning.aircraftFiltered,
    loading: state.aircraftScanning.loading,
  };
};

export default connect(mapStateToProps, actions)(AircraftScan);
