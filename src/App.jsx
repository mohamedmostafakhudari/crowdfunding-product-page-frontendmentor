import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="App font-body relative">
      <Header />
      <Main />
      <footer className="bg-primaryColor">
        <div className="text-center text-white">
          &copy; <span className="font-bold">Mohamed Mostafa</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
