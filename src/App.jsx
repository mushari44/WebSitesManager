import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TreeView from "./components/tree-view";
import ScrollIndicator from "./components/scroll-indicator/";
import LoadMoreData from "./components/load-more-data";
import GithubProfileFinder from "./components/github-profile-finder";
import Weather from "./components/weather-app";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TreeView />} />
        <Route
          path="/scroll"
          element={
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
          }
        />
        <Route path="/load-more-data" element={<LoadMoreData />} />
        <Route
          path="/github-profile-finder"
          element={<GithubProfileFinder />}
        />
        <Route path="/weather-app" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
