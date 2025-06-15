import './UserCard.css'; // สำหรับ CSS (ถ้าคุณต้องการจัดสไตล์)

// คอมโพเนนต์ UserCard ที่รับ name, email, isOnline เป็น props
function UserCard(props: { name: string; email: string; isOnline: boolean }) {
  // Destructure props เพื่อให้โค้ดอ่านง่ายขึ้น
  const { name, email, isOnline } = props;

  return (
    <div className="user-card"> {/* ใช้ className แทน class ใน React */}
      <h3 className="user-card-name">{name}</h3> {/* แสดงชื่อ */}
      <p className="user-card-email">Email: {email}</p> {/* แสดงอีเมล */}
      <div className="user-card-status">
        สถานะ: {/* ข้อความ "สถานะ" */}
        {isOnline ? ( // ใช้ Ternary Operator ตรวจสอบ isOnline
          <span className="status-online">ออนไลน์</span> // ถ้า true แสดง "ออนไลน์"
        ) : (
          <span className="status-offline">ออฟไลน์</span> // ถ้า false แสดง "ออฟไลน์"
        )}
      </div>
    </div>
  );
}

// คอมโพเนนต์ Parent ที่จะเรียกใช้งาน UserCard
function Parent() {
  return (
    <div>
      <h1>ข้อมูลผู้ใช้</h1>
      {/* เรียกใช้งาน UserCard โดยส่ง props ที่ถูกต้อง */}
      <UserCard name="โจนาทาน" email="popzxc555@gamlit.com" isOnline={true} />
      <UserCard name="แอนนา" email="anna@example.com" isOnline={false} />
      <UserCard name="ปีเตอร์" email="peter@example.com" isOnline={true} />
    </div>
  );
}

export default Parent;