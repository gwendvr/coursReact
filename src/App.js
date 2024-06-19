import React from 'react';
import './App.css';
import ToiletList from './components/ToiletList';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Bienvenue sur notre site de vente de toilettes</h1>
                <ToiletList />
            </div>
        </div>
    );
}

export default App;
