//From-Name-Old

import React, { useState } from "react";

function NameFrom() {
    const [from, setfrom] = useState({ name:'', old:'', year:''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setfrom({ ...from, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>กรอกฟอร์ม</h1>
            <input type="text" name="name" value={from.name} onChange={handleChange} />
            <input type="text" name="old" value={from.old} onChange={handleChange}/>
            <input type="text" name="year" value={from.year} onChange={handleChange}/>       
            <h1>แสดงชื่อ-อายุ-ปี ของผู้กรอง</h1>
            <p>คุณชื่อ {from.name}</p>
            <p>อายุ {from.old}</p>
            <p>เกิดปี {from.year}</p>
        </div>
    );
}

export default NameFrom;


