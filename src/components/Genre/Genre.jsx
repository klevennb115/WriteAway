import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Genre = (props) => {
  const [value, setValue] = useState('');
  const genres = props;

  const getGenre = () => {
    props.dispatch({ type: 'GET_GENRES' });
  };

  useEffect(() => {
    getGenre();
  }, []);

  const handleChange = (event) => {
    const action = { type: 'SAVE_GENRE', payload: event.target.value };
    props.dispatch(action);
    setValue(event.target.value);
  };

  return (
    <div>
      <h4>Set Genre:</h4>
      <select value={value} onChange={handleChange}>
        <option value="Uncategorized">Uncategorized</option>
        {genres.map((gnr) => (
          <option key={gnr.types} value={gnr.types}>
            {gnr.types}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStoreToProps = (reduxStore) => ({
  genres: reduxStore.genres,
});

export default connect(mapStoreToProps)(Genre);
