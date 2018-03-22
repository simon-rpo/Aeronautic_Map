import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const HugeSizeTitle = styled.h1`
  font-size: 70px;
`;
const MidSizeTitle = styled.h2`
  font-size: 30px;
`;

const Home = () => {
  return (
    <div>
      <HugeSizeTitle>
        Welcome to Airflight
        <span role="img" aria-label="Airplane">
          ✈️
        </span>
      </HugeSizeTitle>
      <MidSizeTitle style={{ fontSize: '30px' }}>
        Aircraft administrator for your Airport
      </MidSizeTitle>
      <MidSizeTitle>Enjoy!</MidSizeTitle>
    </div>
  );
};

Home.propTypes = {
  str: PropTypes.string,
};

const mapStateToProps = state => ({
  str: state.home,
});

export default connect(mapStateToProps)(Home);
