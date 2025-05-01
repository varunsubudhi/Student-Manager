import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

// Shared Components
import Header from './components/Header';

// Styles
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
