// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import promptSaga from '../../../redux/sagas/promptSaga';

// class CreativeWritingPrompt extends Component {
//     render(){
//         return(
//             <div>
//                 <button>Hey There</button>
//             </div>
//         )
//     }
// }

// const mapStoreToProps = state => ({
//     prompt: state.prompt,
// });
// export default connect(mapStoreToProps)(CreativeWritingPrompt);

import React, {Component} from 'react';
import '../TextEditor.css';


class CreativeWritingPrompt extends Component{
    render(){
        return(
            <div>
                <button className="prompt-button">Hey There</button>
            </div>
        )
    }
}
export default CreativeWritingPrompt;

