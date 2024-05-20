import './App.css';
import AccessReportPage from './AccessReportsPage/AccessReportPage.jsx';
import SearchUser from "./components/SearchUser.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchUser />} />
                    <Route path="/AccessReport" element={<AccessReportPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
