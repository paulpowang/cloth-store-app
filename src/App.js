import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <p>Hats Page</p>
    </div>
  );
};

const TopicDetailPage = () => {
  let { topidId } = useParams();
  return (
    <div>
      <p>TopicDetailPage</p>
      <h3>ID: {topidId}</h3>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/hats" element={<HatsPage />} />
          <Route path="/topics/:topidId" element={<TopicDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
