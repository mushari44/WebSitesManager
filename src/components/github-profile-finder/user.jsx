import "./styles.css";

export default function User({ user }) {
  const { avatar_url, name, login, bio, public_repos, html_url, created_at } =
    user;
  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="UserIMg"></img>
        <div>
          <a href={html_url}>{name || login}</a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div>
          <p>
            Public Repos <b>{public_repos} </b>
          </p>
        </div>
        <div>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
