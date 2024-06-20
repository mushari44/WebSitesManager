import { useState } from "react";
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

  const shouldDisplayChildren = () => {
    return displayCurrentChildren[item.label] && item.children?.length > 0;
  };

  return (
    <li className="menu-item" key={item.id}>
      <div
        className="item-container"
        onClick={() => handleToggleChildren(item.label)}
      >
        {item.children?.length > 0 && (
          <span>
            {shouldDisplayChildren() ? (
              <FaSortDown size={20} />
            ) : (
              <FaCaretRight size={20} />
            )}
          </span>
        )}
        <p>{item.label}</p>
      </div>
      {shouldDisplayChildren() && <MenuList list={item.children} />}
    </li>
  );
}
