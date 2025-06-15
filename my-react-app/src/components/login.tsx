import { useState } from "react";
import './LoginSystem.css'; // ตรวจสอบว่ามีไฟล์ CSS นี้อยู่

function LoginSystem() {
    // ใช้ setIsLoggedIn ตาม convention ของ React
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log("User logged in.");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("User logged out.");
    };

    return (
        <div className="login-container">
            <h2>ระบบ Login/Logout</h2>

            {/* แสดงข้อความตามสถานะ */}
            <div className="status-message-container">
                {isLoggedIn ? (
                    <p className="status-text status-logged-in">ยินดีต้อนรับ! คุณได้ล็อกอินแล้ว</p>
                ) : (
                    <p className="status-text status-logged-out">กรุณาล็อกอิน</p>
                )}
            </div>

            {/* แสดงปุ่มตามสถานะ */}
            <div className="button-container">
                {isLoggedIn ? (
                    // ถ้าล็อกอินอยู่ แสดงปุ่ม Logout เท่านั้น
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                ) : (
                    // ถ้ายังไม่ได้ล็อกอิน แสดงปุ่ม Login เท่านั้น
                    <button onClick={handleLogin} className="login-button">Login</button>
                )}
            </div>
        </div>
    );
}

export default LoginSystem;