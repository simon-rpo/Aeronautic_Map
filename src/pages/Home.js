import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ str }) => {
  return (
    <div>
      <h1>
        Welcome to Airflight
        <span role="img" aria-label="Airplane">
          ✈️
        </span>
      </h1>
      <h3>Your Aircraft administrator for your Airport</h3>
      <h2>Enjoy!</h2>
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
