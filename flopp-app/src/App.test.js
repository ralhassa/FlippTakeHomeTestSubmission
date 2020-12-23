import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';


// tests for rendering of a single item's details and checks if all detail fields are present 
test('loads and displays item details', async() => {
  render(<App />);

  const allLinks = screen.getAllByText('More Details');
  fireEvent.click(allLinks[0]);

  const itemDetails = screen.getByText('Item Name', { exact: false })
  await waitFor(() => itemDetails);

  expect(itemDetails).toHaveTextContent('Name', { exact: false });
  expect(itemDetails).toHaveTextContent('Price', { exact: false });
  expect(itemDetails).toHaveTextContent('Sold At', { exact: false });
  expect(itemDetails).toHaveTextContent('Category', { exact: false });
  expect(itemDetails).toHaveTextContent('Sub-Category', { exact: false });

});


