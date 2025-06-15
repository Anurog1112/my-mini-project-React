import { useEffect, useState } from "react";

function Timer() {
    const [count, setcount] = useState(0);

    useEffect(() => {
        const timer =setInterval(() =>{
            setcount((c) => c + 1);
        }, 1000);
    return () => clearInterval(timer);

    }, []);

    return <p>เวลาผ่านไป: {count} วินาที่</p>
}

export default Timer;