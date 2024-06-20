import MenuItem from "./menu-item";
import { Link } from "react-router-dom";
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list.length > 0
        ? list.map((listItem) => {
            if (listItem.children.length === 0) {
              return (
                <li key={listItem.id} className="menu-item">
                  <Link
                    to={listItem.to}
                    className="item-container"
                    target="_blank"
                  >
                    {listItem.label}
                  </Link>
                </li>
              );
            }
            return <MenuItem key={listItem.id} item={listItem} />;
          })
        : null}
    </ul>
  );
}
