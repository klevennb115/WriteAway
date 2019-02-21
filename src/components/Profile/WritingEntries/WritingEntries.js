import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SpecificWritings from './SpecificWritings';
import MaterialDatatable from "material-datatable";
var moment = require('moment');  

const columns = [
   
    {
        name: 'Title',
        field: 'entry_name'
    },
    {
        name: 'Location',
        field: 'submission_time',
        options: {
            width: 100,
        },
    },
    {
        name: 'Prompt Used',
        field: 'entry_prompt',
    
    }
];
// const data = [
    
//     { name: "Veeeeery loooooooooong naaaaaaaaaaame", title: "Title 1", location: "Location 1", age: 30, salary: 10 },
//     { name: "Name 2", title: "Title 2", location: {}, age: 31, salary: 11 },
// ];

const options = {
    filterType: 'checkbox',
    // onRowsDelete: onRowsDelete()
};
class WritingEntries extends Component {
    componentDidMount() {
        this.getEntries();
    }
    getEntries = () => {
        this.props.dispatch({ type: 'GET_ENTRIES' });
        console.log(this.props.entry);
        
    }
    specificWritings = () => {
        console.log(this.props.entry);

        // return this.props.entry.map((story, i) => {
        //     return <SpecificWritings history={this.props.history} key={i} story={story} />
        // })

    }
    onRowsDelete = () => {
        console.log('hi');

    }

    render() {
        return (
            <div>
                {this.specificWritings()}
                
                {this.props.entry.length !==1 && <MaterialDatatable
                title={"Your Entries"}
                data={this.props.entry}
                columns={columns}
                options={options}
                // onRowsDelete={this.onRowsDelete}
                />}
            </div>

        )
    }
}
const mapStoreToProps = reduxStore => ({
    entry: reduxStore.entry,
})
export default connect(mapStoreToProps)(WritingEntries);