import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    AboutUs
} from "./pages/AboutUs";
import {
    Services,
} from "./pages/Services";
import Contact from "./pages/ContactUs";
import './App.css';

function App() {
  return (
    <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/about-us"
                    element={<AboutUs />}
                />
                <Route
                    path="/services"
                    element={<Services />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </Router>
  );
}

export default App;
