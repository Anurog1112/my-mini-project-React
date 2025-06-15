import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2>หน้าหลัก</h2>;
}

function About() {
    return <h2>หน้าเกี่ยวกับ</h2>
}

function Appmain() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">หน้าหลัก</Link> | <Link to="/About">เกี่ยวกับ</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
            </Routes>
        </BrowserRouter>
    );
}


export default Appmain;