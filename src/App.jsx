import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TreeView from "./components/tree-view";
import ScrollIndicator from "./components/scroll-indicator/";
import LoadMoreData from "./components/load-more-data";
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
      </Routes>
    </Router>
  );
}

export default App;
