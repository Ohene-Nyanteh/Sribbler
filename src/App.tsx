import "./App.css";
import { Menu, SideBar } from "./Components";
import { useTheme } from "./Utils";

function App() {
  // theme
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`${theme} flex flex-col h-screen`}>
      <Menu />
      <main className="h-full flex">
        <SideBar />
        {/* <Routes>
      </Routes> */}
      </main>
      <button className="bg-gray-500" onClick={()=> toggleTheme()}>Switch</button>
    </div>
  );
}

export default App;
