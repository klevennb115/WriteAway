import React, {Component} from 'react';
import { connect } from 'react-redux';
var moment = require('moment'); 

class Streak extends Component{
    constructor(props){
        super(props);
        state:{
            streak:0
        }
    }
    componentDidMount() {
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({ type: 'GET_ENTRIES' });
        this.props.entry.length !== 0 && console.log(this.props.entry,this.props.user);
    }
    getLatestDate = () => {
        let dates = [];
        this.props.entry.map((sub) => {
            if (sub.submission_time !== null) {  //this will get only dates
                dates.push(moment(sub.submission_time))
            }
        })
        let streak = 0;
        let todayPost=0;  //will only add one no matter the value
        let killswitch = 0;
        const endDay = moment().startOf('day');
        let startDay = moment().startOf('day').subtract(1, 'day');
        while(killswitch < dates.length){
            console.log('PRE!!!!!!!', streak, endDay, startDay);
            for (let i = 0; i < dates.length; i++) {
                if (dates[i].isBetween(startDay, endDay)) {
                    streak += 1;
                    endDay.subtract(1, 'day');
                    startDay.subtract(1,'day');
                    killswitch = 0;
                    console.log(dates[i], '!!!!!!!!!!!!!', streak, endDay, startDay, todayPost);

                } else if (dates[i].isBetween(moment().startOf('day'), moment())){
                    todayPost+=1;
                    console.log(moment().startOf('day'), moment());
                    
                } else {
                    // console.log(dates[i], 'END WHILE', streak, endDay, startDay);
                    killswitch +=1;
                }
                
            }
        }
        this.setState({
            state: streak,
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