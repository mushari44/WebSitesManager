import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";
export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("mushari44");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  function handleSubmit() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) setUserData(data);
    console.log(data);
    setUserName("");
    setLoading(false);
  }
  async function handleInput(event) {
    if (event.key === "Enter" && userName.trim() !== "") {
      handleSubmit();
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <h1>Loading data please wait !</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username.."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleInput}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
