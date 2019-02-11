import React, {Component} from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component{
    componentDidMount(){
        const action = {type: 'GET_STREAK'}
        this.props.dispatch(action);
    }
    render(){
        return(
            <div>
                {/* <h1>{this.props.user.current_streak}</h1> */}
                <h1>Sup</h1>
            </div>
            
            
        )
    }
}
const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps) (Dashboard);