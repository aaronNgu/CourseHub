/* This is an example of a component that uses states from the redux store */
import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

function TestButton(props) {
    return <button onClick={() => props.increment(5)}> This is a test Button. Count is : {props.count}</button>;
} 

const mapStateToProps = (state) => {
    return { count: state.count};
}

export default connect(mapStateToProps, { increment })(TestButton);
