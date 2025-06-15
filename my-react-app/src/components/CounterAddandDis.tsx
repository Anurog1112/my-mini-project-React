// เพิ่มการมี reset
import { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0);

    const handleClickAdd =() => {
        setcount(count + 1);
    };

    const handleClickDis =() => {
        setcount(count - 1);
    };

        const handleClickreset =() => {
        setcount(0);
    };

    return (
        <div>
            <h2>คุณคลิกไปแล้ว: {count} ครั้ง</h2>
            <button onClick={handleClickAdd}>เพิ่ม</button>
            <button onClick={handleClickDis}>ลด</button>
            <button onClick={handleClickreset}>รีเซ็ต</button>
        </div>
    );
}

export default Counter;