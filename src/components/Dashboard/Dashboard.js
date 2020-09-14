import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    useEffect(() => {
        const action = {
            type: 'GET_PROMPTS' 
        };
        props.dispatch(action);
    }, []);
    const getAffirmation = () => {
        
        let advicePrompts = [];
        for (const entry of props.prompt) {  //sorts prompts by type
            if (entry.type_of_prompt === 4) {
                advicePrompts.push(entry);
            }}
        
        return advicePrompts[Math.floor(Math.random() * Math.floor(advicePrompts.length))].text  
    }

    return(
        <div >
            <div className="advice">
                <h5>{props.prompt.length !== 0 && getAffirmation()}</h5>
            </div>
            <div className="dashboard-buttons">
                <Link className="ph-button" to="/profile">
                    Profile
                </Link>
                <Link className="ph-button" to="/write">
                    Write Away!
                </Link>
            </div>

        </div>
    )
}

const mapStateToProps = reduxStore => ({
    prompt: reduxStore.prompt
})
export default connect(mapStateToProps) (Dashboard);