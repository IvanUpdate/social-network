import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Header/>
                <Navbar/>
                <section className={styles.content}>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/about" element={"About"} />
                    <Route path="/dialogs" element={<Dialogs />} />
                </Routes>
                </section>
            </div>
        </Router>

    );
}
export default App;
