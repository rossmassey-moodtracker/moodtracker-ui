import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

import Moods from './components/Moods';
import HomePage from './components/HomePage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/moods" element={
                            <PrivateRoute>
                                <Moods/>
                            </PrivateRoute>
                        }/>
                    </Routes>
                </Router>
            </AuthProvider>
        </React.Fragment>
    );
}

export default App;
