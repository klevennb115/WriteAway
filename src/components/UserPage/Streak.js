import React, {Component} from 'react';
import { connect } from 'react-redux';
var moment = require('moment'); 

class Streak extends Component{
    constructor(props){
        super(props);
        this.state={
            streak:0
        }
    }
    componentDidMount() {
        this.getEntries();
        // this.getLatestDate();

    }
    getEntries = () => {
        this.props.dispatch({ type: 'GET_ENTRIES' });
    }
    // getLatestDate = () => {
    //     console.log('$$$$$$$$$$$', this.props.entry.length);
        
    //     let dates = [];
    //     this.props.entry.length !== 0 && this.props.entry.map((sub) => {
    //         if (sub.submission_time !== null) {  //this will get only dates
    //             dates.push(moment(sub.submission_time))
    //         }
    //     })
    //     let streak = 0;
    //     let todayPost=0;  //will only add one no matter the value
    //     let killswitch = 0;
    //     const endDay = moment().startOf('day');
    //     let startDay = moment().startOf('day').subtract(1, 'day');
    //     while(killswitch < dates.length){
    //         for (let i = 0; i < dates.length; i++) {
    //             if (dates[i].isBetween(startDay, endDay)) {
    //                 streak += 1;
    //                 endDay.subtract(1, 'day');
    //                 startDay.subtract(1,'day');
    //                 killswitch = 0;

    //             } else if (dates[i].isBetween(moment().startOf('day'), moment())){
    //                 todayPost+=1;
    //                 console.log(moment().startOf('day'), moment());
                    
    //             } else {
    //                 // console.log(dates[i], 'END WHILE', streak, endDay, startDay);
    //                 killswitch +=1;
    //             }
                
    //         }
    //     }
        // this.setState({
        //     streak: streak
        // })
        // if(this.props.user.highest_streak !== streak){    //I can use something like this if I want to add some stats
        //     console.log('$$$$$$$$$$', this.props.user.current_streak, streak);
        // }
        
    // }
    render(){
        // this.props.entry.length !== 0 && this.getLatestDate();  //makes sure entries are in reducer before proceeding
        console.log('$$$$$$$$$$$', this.props.entry.length);

        let dates = [];
        this.props.entry.length !== 0 && this.props.entry.map((sub) => {
            if (sub.submission_time !== null) {  //this will get only dates
                dates.push(moment(sub.submission_time))
            }
        })
        let streak = 0;
        let todayPost = 0;  //will only add one no matter the value
        let killswitch = 0;
        const endDay = moment().startOf('day');
        let startDay = moment().startOf('day').subtract(1, 'day');
        console.log('PREPRE!!!!!!!', killswitch, dates);
        while (killswitch < dates.length) {
            console.log('PRE!!!!!!!', killswitch, dates);
            for (let i = 0; i < dates.length; i++) {
                if (dates[i].isBetween(startDay, endDay)) {
                    streak += 1;
                    endDay.subtract(1, 'day');
                    startDay.subtract(1, 'day');
                    killswitch = 0;
                    console.log(dates[i], '!!!!!!!!!!!!!', streak, endDay, startDay, todayPost);

                } else if (dates[i].isBetween(moment().startOf('day'), moment())) {
                    todayPost += 1;
                    killswitch += 1;
                    // console.log(moment().startOf('day'), moment());

                } else {
                    // console.log(dates[i], 'END WHILE', streak, endDay, startDay);
                    killswitch += 1;
                }//end if/else

            }//end for loop
        }  //end while
        if (todayPost !== 0) {
            streak +=1;
        }
        return(
            <div>
                <h1 className="advice">
                    Welcome, {this.props.user.username}! {streak ? `You have written ${streak} days in a row!` : 'Time to start a new writing streak!'}
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    entry: state.entry
});

export default connect(mapStateToProps)(Streak);