import { useState } from "react";
import "./Registration.css";

export const Registration = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    // switch (e.target.name) {
    //   case "name":
    //     setName(e.target.value);
    //     break;
    //   case "age":
    //     setAge(e.target.value);
    //     break;
    //   case "address":
    //     setAddress(e.target.value);
    //     break;
    // }
  };

  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  // const [address, setAddress] = useState("");
  const [user, setUser] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="registration">
      <h1>Registration form</h1>
      <form className="form-wrapper">
        <div className="field-wrapper">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}

            // onChange={eventHandlerFunction}
            // onChange={(e) => eventHandlerFunction(e)}
          />
          {!user.name && isSubmitted && (
            <span className="error-message">Please enter name</span>
          )}
        </div>
        <div className="field-wrapper">
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter age"
            onChange={handleChange}
            name="age"
          />
          {!user.age && isSubmitted && (
            <span className="error-message">Please enter age</span>
          )}
        </div>
        <div className="field-wrapper">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            onChange={handleChange}
          />
          {!user.address && isSubmitted && (
            <span className="error-message">Please enter address</span>
          )}
        </div>
        <div className="field-wrapper">
          <label>Gender</label>
          <label for="male">Male</label>
          <input type="radio" value="male"/>
          <label for="female">Female</label>
          <input type="radio" value="female"
          name="gender"
          onChange={handleChange}
          />
          {!user.gender && isSubmitted && (
            <span className="error-message">please select your gender</span>
          )}
          </div>
          <div className="field-wrapper">
            <label>E-mail</label>
            <input type="text"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            />
            {!user.email && isSubmitted &&(
              <span className="error-message">please enter your valid email</span>
            )}
          </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};
