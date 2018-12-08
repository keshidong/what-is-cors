import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { server as serverHostname } from '../config.json'

class TestPreflight extends Component {
    handleClick = () => {
        fetch(serverHostname)
          .then();
    }
    componentDidMount() {

    }
    render() {
        return (
          <div>
              <h2>test preflight</h2>
              <button
                onClick={this.handleClick}
              >send request</button>
          </div>
        )
    }
}

TestPreflight.propTypes = {};
TestPreflight.defaultProps = {};

export default TestPreflight;
