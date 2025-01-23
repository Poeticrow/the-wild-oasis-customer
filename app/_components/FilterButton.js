"use client";

function Button({ filter, activeFilter, handleFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {" "}
      {children}
    </button>
  );
}

export default Button;
