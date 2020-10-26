import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';


describe('App', () => {
  it('matches the Snapshot', () => {

    const {asFragment} = render (
      <BrowserRouter>
        <App/>
      </BrowserRouter>)

    expect(asFragment()).toMatchSnapshot()
  })
})






// test('renders learn react link', () => {

//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
