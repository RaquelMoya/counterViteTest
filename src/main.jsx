import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import FirstApp from './FirstApp.jsx';
import CounterApp from './CounterApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <FirstApp title = 'Hola, soy Vegeta'/>
        <CounterApp value={0}/>
    </React.StrictMode>
);



