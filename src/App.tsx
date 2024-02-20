import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-8">
        <Login />
      </div>
    </>
  );
}

export default App;
