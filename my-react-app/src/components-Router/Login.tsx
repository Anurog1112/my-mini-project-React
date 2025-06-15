import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        alert('Simulated Login Successful!');
        navigate('/dashboard');
    };

    return (
        <div className="">
            <h1>Login Page</h1>
            <p>กรุณาคลิกปุ่มเพื่อจำลองการเข้าสู่ระบบ</p>
            <button onClick={handleLogin}>เข้าสู่ระบบ</button>
        </div>
    );

};

export default Login;