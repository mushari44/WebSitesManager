import { useState, useEffect } from "react";
import MenuList from "./menu-list";
import { FaCaretRight, FaSortDown } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (label) => {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const displayChildren = () => {
    if (
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label]
    ) {
      if (item.label === "Front End" || item.label === "Back End") {
        return (
          <a href={item.to} target="_blank">
            <MenuList list={item.children} />
          </a>
        );
      }

      return <MenuList list={item.children} />;
    }

    return null;
  };

  return (
    <li className="menu-item" key={item.id}>
      <div
        className="item-container"
        onClick={() => handleToggleChildren(item.label)}
      >
        {item.children && item.children.length > 0 ? (
          <span>
            {displayCurrentChildren[item.label] ? (
              <FaSortDown size={20} />
            ) : (
              <FaCaretRight size={20} />
            )}
          </span>
        ) : null}
        <p>{item.label}</p>
      </div>
      {displayChildren()}
    </li>
  );
}
