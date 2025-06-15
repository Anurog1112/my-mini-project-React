import button from "./components/Callback";

export default function AppCallback() {
    const handleClick = () => alert("เพิ่มยอดไลค์แล้ว");
    return <button onClick={handleClick} />;
}