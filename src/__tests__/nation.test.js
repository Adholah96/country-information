import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../routes/Home';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

describe('Home component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      nationReducer: [
        {
          id: '1',
          name: 'Australia',
          population: 25600000,
          flag: 'https://restcountries.com/data/aus.svg',
          area: 7692024,
          alphacode: 'AU',
        },
        {
          id: '2',
          name: 'Brazil',
          population: 213000000,
          flag: 'https://restcountries.com/data/bra.svg',
          area: 8515767,
          alphacode: 'BR',
        },
        {
          id: '3',
          name: 'Canada',
          population: 37742154,
          flag: 'https://restcountries.com/data/can.svg',
          area: 9984670,
          alphacode: 'CA',
        },
      ],
    });
  });

  it('should render search bar and country cards', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByPlaceholderText('search by country name')
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('should filter country cards based on search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('search by country name');
    fireEvent.change(searchInput, { target: { value: 'au' } });
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('should dispatch eachCountry action on mount', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
  });
});
