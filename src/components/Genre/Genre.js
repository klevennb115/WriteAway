import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Uncatagorized' };
    }
    componentDidMount(){
        this.changeGenre()
    }
    changeGenre = () => {
        this.props.dispatch({ type: 'GET_GENRES' });
        // <Genre />
    }
    handleChange = () => {
        console.log('hi', this.props.genres);
        
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