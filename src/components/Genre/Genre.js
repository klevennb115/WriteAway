import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Genre = (props) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        changeGenre();
    }, []);

    const changeGenre = () => {
        props.dispatch({ type: 'GET_GENRES' });
    }

    const handleChange = (event) => {
        const action = {type: "SAVE_GENRE", payload: event.target.value};
        props.dispatch(action);
        setValue(event.target.value);        
    }

    return ( 
        <div>
            <h4>Set Genre:</h4>
            <select value={value}
                onChange={handleChange}>
                <option value='Uncategorized'>Uncategorized</option>
                {props.genres.map((genre, i) => {
                    return <option key={i} value={genre.types}>{genre.types}</option>
                })}
            </select> 
        </div>
    );
}
 
const mapStoreToProps = reduxStore => ({
    genres : reduxStore.genres
})

export default connect(mapStoreToProps)(Genre);