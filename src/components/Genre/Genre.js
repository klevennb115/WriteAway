import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    componentDidMount(){
        this.changeGenre()
    }
    changeGenre = () => {
        this.props.dispatch({ type: 'GET_GENRES' });
        // <Genre />
    }
    handleChange = (event) => {
        const action = {type: "SAVE_GENRE", payload: event.target.value};
        console.log(action);
        this.props.dispatch(action);
        this.setState({value: event.target.value});
        console.log(this.state);
        
    }
    render() {
        return (
            <div>
                <h4>Genre</h4>
                <select value={this.state.value}
                    onChange={this.handleChange}>
                    <option value='Uncategorized'>Uncategorized</option>
                    {this.props.genres.map((genre, i) => {
                        return <option key={i} value={genre.types}>{genre.types}</option>
                    })}
                    

                </select> 
            </div>
        )
    }
}
const mapStoreToProps = reduxStore => ({
    // reduxStore,
    genres : reduxStore.genres
})
export default connect(mapStoreToProps)(Genre);