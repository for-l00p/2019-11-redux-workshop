import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlace } from "./actions";

function AddForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        if (!name) return;
        props.addPlace({
          name,
          phone,
          email
        });
        setName("");
        setPhone("");
        setEmail("");
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={evt => setName(evt.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={evt => setPhone(evt.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={evt => setEmail(evt.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: place => dispatch(addPlace(place))
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
