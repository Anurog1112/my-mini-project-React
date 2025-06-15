// ProfileCard
type ProfileCard = {
    name: string;
    job: string;
    imageUrl: string;
};

function Profile({ name, job, imageUrl }: ProfileCard) {
    return (
        <div className="main-Container">
            <h1>รายชื่อพนักงาน</h1>
            <h2>ชื่อ {name}</h2>
            <h2>อาชีพ {job}</h2>
            {imageUrl && (<img 
                src= {imageUrl} // ใช้ imageUrl เป็น source ของรูปภาพ
                alt={`รูปภาพของ ${name}`} // ใส่ alt text เพื่อการเข้าถึงและ SEO
                style={{ width: '150px', height: '150px',borderRadius: '50%', objectFit: 'cover', marginBottom: '15px'}} 
                />
            )}
        </div>
    );
}

export default Profile;

