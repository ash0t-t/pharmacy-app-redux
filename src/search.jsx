import { useDispatch } from 'react-redux';
import { setSearchTerm } from './pharmacy.slice';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Find medicine"
      onChange={handleSearch}
      style={{ width: '100%', height: '40px', borderRadius: '5px', marginBottom: '20px', outline: 'none' }}
    />
  );
};

export default Search;