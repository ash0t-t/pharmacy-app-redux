import { useSelector } from 'react-redux';
import Drug from './drug.jsx';

const List = () => {
  const { items, searchTerm } = useSelector(state => state.pharmacy);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map(item => (
        <Drug key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;