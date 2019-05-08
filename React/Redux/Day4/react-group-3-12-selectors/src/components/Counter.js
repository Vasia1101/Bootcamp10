import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from './hoc/withRenderLog';
import { incrementCounter } from '../redux/actions';
// import { getCounterValue } from '../redux/selectors';

const styles = {
    container: {
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    value: {
        fontSize: 40,
        marginTop: 0,
        marginBottom: 0,
    },
};

const Counter = ({ value, incrementCounter }) => (
    <div style={styles.container}>
        <p style={styles.value}>{value}</p>
        <button className="Counter-btn" onClick={incrementCounter}>
            Increment
        </button>
    </div>
);

const mapState = state => ({
    value: state.counter,
});

const mapDispatch = { incrementCounter };

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withRenderLog,
)(Counter);
