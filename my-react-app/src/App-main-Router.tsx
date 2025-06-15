import { Routes, Route, Link } from 'react-router-dom';
import Home from './components-Router/Home';
import About from './components-Router/About';
import Contact from './components-Router/Contact';
import Profile from './components-Router/Profile';
import Login from './components-Router/login';
import Dashboard from './components-Router/Dashboard';

import './App-router.css';

function App() {
    return (
        <div className="App">
            {/* ส่วนของ Navbar สำหรับนำทาง */}
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/profile/123">Profile (ID 123)</Link>
                    </li>
                    <li>
                        <Link to="/profile/456">Profile (ID 456)</Link>
                    </li>
                                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            {/* ส่วนของการกำหนดเส้นทาง (Routes) */}
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/profile/:userId' element={<Profile />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path="*" element={<h2>404 Not Found</h2>} />
                </Routes>
            </div>

        </div>
    );
}


export default App;