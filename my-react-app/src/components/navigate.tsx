// ยังต้องกลับมาทบทวน

import { useNavigate } from 'react-router-dom';

function Login_navigate () {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ทำการตรวจสอบ login ...
    navigate('./LoginSystem'); // เปลี่ยนหน้าไป dashboard
  };

  return <button onClick={handleLogin}>เข้าสู่ระบบ</button>;
}

export default Login_navigate;