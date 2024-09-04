import { createSlice } from '@reduxjs/toolkit';

const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState: {
    items: [
      { id: '1', name: 'Vitamin D', imageUrl: 'https://assets.medpagetoday.net/media/images/102xxx/102980.jpg', rating: 5 },
      { id: '2', name: 'Vitamin B', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEmJ24vKxVPfOlWflvYxlCPrpPRWfvSnrgQ&s', rating: 4 },
      { id: '3', name: 'Vitamin C', imageUrl: 'https://www.usada.org/wp-content/uploads/vitamin-c-post.jpg', rating: 3 },
    ],
    searchTerm: '',
  },
  reducers: {
    setRating: (state, action) => {
      const { id, rating } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.rating = rating;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setRating, setSearchTerm } = pharmacySlice.actions;
export default pharmacySlice.reducer;