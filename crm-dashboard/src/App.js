import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import page components
import DashboardPage from './pages/DashboardPage';
import LocationsPage from './pages/Masters/LocationsPage';
import LocationTypePage from './pages/Masters/LocationTypePage';
import RoomTypeMasterPage from './pages/Masters/RoomTypeMasterPage';
import ParkingTypeMasterPage from './pages/Masters/ParkingTypeMasterPage';
import TaxTypePage from './pages/Masters/TaxTypePage';
import MobileLockerPage from './pages/Lockers/MobileLockerPage';
import NormalLockerPage from './pages/Lockers/NormalLockerPage';
import RoomTypePage from './pages/Rooms/RoomTypePage';
import ParkingTypePage from './pages/Parking/ParkingTypePage';

// A simple component for routes that might not have a dedicated page yet (if needed later)
// const GenericPlaceholderPage = ({ title }) => <div className="p-4"><h1 className="text-2xl font-semibold">{title}</h1><p>This page is under construction.</p></div>;


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          {/* Masters */}
          <Route path="/masters/locations" element={<LocationsPage />} />
          <Route path="/masters/location-type" element={<LocationTypePage />} />
          <Route path="/masters/room-type" element={<RoomTypeMasterPage />} />
          <Route path="/masters/parking-type" element={<ParkingTypeMasterPage />} />
          <Route path="/masters/tax-type" element={<TaxTypePage />} />

          {/* Lockers */}
          <Route path="/lockers/mobile" element={<MobileLockerPage />} />
          <Route path="/lockers/normal" element={<NormalLockerPage />} />

          {/* Rooms */}
          {/* As per requirements, "Rooms -> Room Type" */}
          <Route path="/rooms/room-type" element={<RoomTypePage />} />

          {/* Parking */}
          {/* As per requirements, "Parking -> Parking Type" */}
          <Route path="/parking/parking-type" element={<ParkingTypePage />} />

          {/* Fallback for any undefined routes or WIP sections */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
