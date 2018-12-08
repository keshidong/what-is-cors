import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preflight from './Preflight';

class App extends Component {
    render() {
        return (
            <div>
                <Preflight />
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
