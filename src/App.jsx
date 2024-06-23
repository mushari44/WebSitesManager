import { HashRouter as Router, Route, Routes, Form } from "react-router-dom";
import TreeView from "./components/tree-view";
import ScrollIndicator from "./components/scroll-indicator/";
import LoadMoreData from "./components/load-more-data";
import githubProfileFinder from "./components/github-profile-finder";
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
          element={<githubProfileFinder />}
        />
      </Routes>
    </Router>
  );
}

export default App;
