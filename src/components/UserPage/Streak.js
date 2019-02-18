import React, {Component} from 'react';
import { connect } from 'react-redux';
var moment = require('moment'); 

class Streak extends Component{
    componentDidMount() {
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({ type: 'GET_ENTRIES' });
        // this.props.dispatch({ type:'FETCH_USER'})
        this.props.entry.length !== 0 && console.log(this.props.entry,this.props.user);
    }
    getLatestDate = () => {
        let topDate = moment('2019-01-01T00:00:00.000'); //need a default value to compare to
        console.log(this.props.entry);
        this.props.entry.map((sub)=>{
            if(moment(sub.submission_time).isAfter(topDate)){  //this will get most recent date
                topDate = sub.submission_time;
                console.log('!!!!!!!', topDate, sub.entry_name);
                
                
            }
            return console.log('Newest:', topDate);
            
        })
    }
    render(){
        this.props.entry.length !== 0 && this.getLatestDate();  //makes sure entries are in reducer before proceeding
        return(
            <div>
                <h1>Sup</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    entry: state.entry
});

export default connect(mapStateToProps)(Streak);