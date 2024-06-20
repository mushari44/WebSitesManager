import { useEffect, useState } from "react";
import "./scroll.css";
export default function ScrollIndicator({ url }) {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    fetchData(url);
  }, [url]);
  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const newScrollPercentage = (howMuchScrolled / height) * 100;
    setScrollPercentage(newScrollPercentage);
    console.log("hoe much scrolled : ", howMuchScrolled);
    console.log("height : " + height);
    console.log("scrolled percentage : ", newScrollPercentage);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", () => {});
  }, []);
  async function fetchData(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setDate(data.products);
        setErrorMessage("");
      }
    } catch (error) {
      console.log("Error happened ", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }
  // console.log(data);
  if (loading) {
    return <div>Loading Data please wait </div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </div>
    </div>
  );
}
