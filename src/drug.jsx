import { useDispatch } from 'react-redux';
import { setRating } from './pharmacy.slice';

const Drug = ({ item }) => {
  const dispatch = useDispatch();

  const handleRating = (newRating) => {
    dispatch(setRating({ id: item.id, rating: newRating }));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border: '1px solid gray', padding: '10px', borderRadius: '10px' }}>
      <img src={item.imageUrl} style={{ width: '100px', marginRight: '10px' }} />
      <div>
        <h3>{item.name}</h3>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: 'pointer',
              color: star <= item.rating ? 'gold' : 'gray',
              fontSize: '20px',
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Drug;