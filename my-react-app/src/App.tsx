import Profile from "./components/ProfileCard";

function App() {
  return (
    <div className="main">
      <Profile name="โจนัส" job="ผู้ประกอบการ" imageUrl="https://blog.cariber.co/wp-content/uploads/2022/09/thinking-asian-businessman-businessman-talking-phone-working-modern-office-listening-seriously.jpg"/>
      <Profile name="ปุณ" job="เลขา" imageUrl="https://ap-southeast-2-seek-apac.graphassets.com/AEzBCRO50TYyqbV6XzRDQz/4mt1VwVfSguiWNAmrt4n"/>
    </div>
  );
}

export default App;