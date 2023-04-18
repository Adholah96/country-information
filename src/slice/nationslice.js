import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v2/all';
const initialState = [];

export const fetchNations = async () => {
  const data = await (await fetch(url)).json();

  return data;
};

export const eachCountry = createAsyncThunk(
  'FETCH_COUNTRIES',
  async (obj, api) => {
    const currentState = api.getState();
    if (currentState.nationReducer.length === 0) {
      const res = await fetchNations();
      const nationData = [];
      res.forEach((nation) => {
        const aNation = {
          id: nation.alpha3Code,
          name: nation.name,
          population: nation.population,
          flag: nation.flag,
          capital: nation.capital,
          area: nation.area,
          alphacode: nation.alpha3Code,
        };
        nationData.push(aNation);
      });
      return nationData;
    }
    return currentState.nationReducer;
  },
);

const nations = createReducer(initialState, (builder) => {
  builder
    .addCase(eachCountry.fulfilled, (state, action) => action.payload)
    .addDefaultCase((state) => [...state]);
});

export default nations;
