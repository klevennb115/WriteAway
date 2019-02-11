import React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';

const ManualEntry = () => (
    <div>
        <p>
            ManualEntry
        </p>
        <button>Slup</button>
    </div>
);
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(ManualEntry);