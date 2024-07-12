import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleAddBlog = (title, description) => {
    const newBlog = { title, description, id: Date.now() };
    setBlogs([...blogs, newBlog]);
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setEditId(id);
    setEditedTitle(blogToEdit.title);
    setEditedDescription(blogToEdit.description);
  };

  const handleSave = () => {
    handleEditBlog(editId, editedTitle, editedDescription);
    setEditId(null);
    setEditedTitle("");
    setEditedDescription("");
  };
  function handleCancel() {
    setEditId(null);
    setEditedTitle("");
    setEditedDescription("");
  }
  const handleEditBlog = (id, editedTitle, editedDescription) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id
        ? { ...blog, title: editedTitle, description: editedDescription }
        : blog
    );
    setBlogs(updatedBlogs);
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setEditedTitle(e.target.value);
    } else if (e.target.name === "description") {
      setEditedDescription(e.target.value);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        blogs,
        handleAddBlog,
        handleDeleteBlog,
        handleEdit,
        handleSave,
        handleChange,
        editId,
        editedTitle,
        editedDescription,
        handleCancel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
