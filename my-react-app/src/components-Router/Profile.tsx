import { useParams } from 'react-router-dom';

// Define the type for the URL parameters
interface ProfileParams {
  userId?: string;
  [key: string]: string | undefined; //แก้ interface ให้รองรับ index signature
}

const Profile = () => {
    
    const { userId } = useParams<ProfileParams>();

    return (
        <div className="page-container">
            <h1>Profile Page</h1>
            <p>นี่คือโปรไฟล์ของรหัสผู้ใช้ ID: <strong>{userId}</strong></p>
            <p>รายละเอียดเพิ่มเติมสำหรับผู้ใช้รหัส {userId} จะแสดงที่บริเวณนี้</p>
        </div>
    );

}

export default Profile;