import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Dashboard extends Component{
    componentDidMount(){
        const action = {
            type: 'GET_ADVICE' 
        };
        this.props.dispatch(action);
    }
    getAffirmation = () => {
        let advicePrompts = [];
        for (const entry of this.props.prompt) {  //sorts prompts by type
            if (entry.type_of_prompt === 4) {
                advicePrompts.push(entry);
            }}
        console.log(advicePrompts);
        
        return advicePrompts[Math.floor(Math.random() * Math.floor(advicePrompts.length))]   
    }
    render(){
        return(
            <div>
                {/* <div><h5>{this.props.prompt.length !== 0 && this.getAffirmation()}</h5></div> */}
                <div><h5>{this.props.prompt[0].text}</h5>
                    {/* <h5>{this.props.prompt.length !== 0 && this.getAffirmation()}</h5> */}
                </div>
                <Link className="nav-link link" to="/profile">
                    Profile
                </Link>
                <Link className="nav-link link" to="/write">
                    Write Away!
                </Link>
                {/* <Link className="nav-link link" to="/add-writing">
                    Add Writing Manually
                </Link> */}
                
            </div>
            
            
        )
    }
}

const mapStateToProps = reduxStore => ({
    prompt: reduxStore.prompt
})
export default connect(mapStateToProps) (Dashboard);