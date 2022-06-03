 

//На хуках

import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MyIcon } from './icons/search.svg';
import styles from './SearchForm.module.css';

const SearchFrom = ({ onSearch }) => {
  const [query, setQuery] = useState('');

   
  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

   
  const handleSubmit = e => {
    e.preventDefault();

     
    if (!query.trim()) return;

     
    onSearch(query);

    resetForm();
  };

   
  const resetForm = () => setQuery('');

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
      <MyIcon width={16} height={16}/>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
        placeholder="Введіть назву фото або зображення"
      />
    </form>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;

