import React, { useState } from "react";

function Form() {
  const [state, setstate] = useState({
    name: "",
    message: "",
    email: "",
  });
  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form>
      <div className="name">
        <input
          type="text"
          required
          placeholder="Name"
          value={state.name}
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="email">
        <input
          type="email"
          required
          placeholder="Email"
          value={state.email}
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="textarea">
        <textarea
          placeholder="your message"
          required
          value={state.message}
          id="message"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="btn">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
