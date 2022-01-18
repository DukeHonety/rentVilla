import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPan from './components/ui/headerPan';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="wrap">
      <HeaderPan></HeaderPan>
      <div className="content">
        <Button variant="primary">Button #1</Button>
      </div>
    </div>
  );
}

export default App;
