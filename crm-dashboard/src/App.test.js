import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Dashboard page by default and shows main heading', async () => {
  render(<App />);
  // The Dashboard content, including the heading, might appear after mock data service resolves.
  // We also need to consider that "Dashboard Overview" is part of DashboardPage,
  // which is loaded via routing.

  // Wait for the heading to appear, as data fetching is async
  const headingElement = await waitFor(() => screen.getByText(/Dashboard Overview/i), { timeout: 3000 });
  expect(headingElement).toBeInTheDocument();
});
