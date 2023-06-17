import Landing from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// FIXME: Configs as apyKey, authDomain, etc. are sensitive data. You should not commit them to a public repository.
const firebaseConfig = {
  apiKey: "AIzaSyCFgrjg_I8GZP8rOKEOQ6bajqGUEi9eBjg",
  authDomain: "landingtaxislibres.firebaseapp.com",
  projectId: "landingtaxislibres",
  storageBucket: "landingtaxislibres.appspot.com",
  messagingSenderId: "999878820671",
  appId: "1:999878820671:web:7aaed42d9345d428c9c98a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
