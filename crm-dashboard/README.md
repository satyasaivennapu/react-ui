# Modern Business CRM Dashboard

This is a React.js application for a modern business CRM dashboard, built to fulfill the specified requirements including side navigation, a dashboard overview with summary cards and charts, and placeholder pages for various management sections.

## Features

- **Side Navigation (Sidenav)** with routing to:
  - Dashboard
  - Masters (Locations, Location Type, Room Type, Parking Type, Tax Type)
  - Lockers (Mobile Locker, Normal Locker)
  - Rooms (Room Type)
  - Parking (Parking Type)
- **Dashboard Page Overview**:
  - Summary Cards: Total/Available Lockers, Rooms, Parking. Additional cards for YTD Revenue, Occupancy, Maintenance Tickets.
  - Charts: Bar Chart for Monthly Revenue, Pie Chart for Expenses.
- Each menu item has a placeholder page with a heading and a basic data table.
- **Modern UI Theme**: Clean design inspired by Flipkart/Amazon Seller dashboards.
  - Top navbar with logo placeholder & user menu.
  - Side nav with icons, collapsible on desktop and an overlay on mobile.
  - Consistent styling for cards, buttons, charts, tables (rounded, shadowed, soft colors).
- **Responsive & Mobile-Friendly**: Adapts to various screen sizes, side nav collapses with a hamburger toggle on mobile.
- **Mock Data Service**: Simulates API calls for dynamic data on the dashboard and for tables.

## Tech Stack & Libraries

- **React**: Functional components with Hooks.
- **React Router DOM**: For routing.
- **TailwindCSS**: For styling.
- **Chart.js & react-chartjs-2**: For charts.
- **Lucide React**: For icons.

## Project Structure

- `src/`: Contains all the source code.
  - `components/`: Reusable components.
    - `Charts/`: BarChart, PieChart components.
    - `Dashboard/`: SummaryCard component.
    - `Nav/`: SideNav, TopNavbar components.
    - `UI/`: DataTable component.
  - `layouts/`: MainLayout component wrapping all pages.
  - `pages/`: Individual page components for each route.
    - `Masters/`, `Lockers/`, `Rooms/`, `Parking/`: Subdirectories for grouped pages.
  - `services/`: `mockDataService.js` for simulating API calls.
  - `App.js`: Main application component with routing setup.
  - `index.css`: Global styles and TailwindCSS imports.
  - `index.js`: Entry point of the React application.
- `public/`: Static assets.
- `tailwind.config.js`: TailwindCSS configuration.
- `postcss.config.js`: PostCSS configuration (for Tailwind).

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)

### Installation & Running

1.  **Clone the repository (or ensure you have the code provided).**

2.  **Navigate to the project directory:**
    ```bash
    cd crm-dashboard
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

### Building for Production

To create a production build:

```bash
npm run build
```
This bundles the app into static files for production in the `build` folder.

## Notes

- The application uses a mock data service (`src/services/mockDataService.js`) to simulate API calls. This can be replaced with actual API integration in the future.
- Styling is primarily handled by TailwindCSS utility classes.
- The navigation is designed to be responsive, with the side navigation collapsing on smaller screens and being toggleable via a hamburger menu.
- Chart data and summary card data on the Dashboard are fetched asynchronously from the mock service.
