import React from 'react';
import styled from 'styled-components';
import mapImage from '../images/map.png';

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: black;
`;

class AircraftScan extends React.Component {
  render() {
    return (
      <div>
        <Title>Aircraft Scanning</Title>
        <div className="Filters" />
        <div className="Map" style={{ textAlign: 'center' }}>
          <img src={mapImage} />
        </div>
      </div>
    );
  }
}

export default AircraftScan;
