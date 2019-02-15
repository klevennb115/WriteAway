import React, { Component } from 'react';
import { connect } from 'react-redux';
import promptSaga from '../../../redux/sagas/promptSaga';
import swal from 'sweetalert';

class CreativeWritingPrompt extends Component {
    showPrompt = () => {
        swal ("Hello World");
    }

    render(){
        return(
            <div>
                <button onClick={this.showPrompt}>Hey There</button>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(CreativeWritingPrompt);