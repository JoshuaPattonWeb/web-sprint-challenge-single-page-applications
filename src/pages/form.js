import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const yupForm = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["Small", "Medium", "Large", "X-Large"]),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  chicken: yup.boolean(),
  onions: yup.boolean(),
  blackOlives: yup.boolean(),
  special: yup.string(),
});

const emptyValues = {
  name: "",
  size: "",
  pepperoni: "",
  sausage: "",
  bacon: "",
  chicken: "",
  onions: "",
  blackOlives: "",
  special: "",
  instructions: "",
};

const Form = () => {
  const [isValid, setValid] = useState(true);

  const [enters, setEnters] = useState([emptyValues]);

  const [err, setErr] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    chicken: "",
    onions: "",
    blackOlives: "",
    special: "",
    instructions: "",
  });

  useEffect(() => {
    yupForm.isValid(enters).then((valid) => {});
  }, [enters]);

   const validate = (evt) => {
       yup.reach(yupForm, evt.target.name)
       .validate(evt.target.value)
       .then(valid => {
           setErr({
             ...err, [evt.target.name]: ''
        })
          .catch(err => {
              console.error(err)
              setErr({...err, [evt.target.name]: err.errors[0]
              })
          })
      })
  }

  const onChange = (evt) => {
      evt.persist();
    validate(evt)
    const val = evt.target.value === 'checkbox' ? evt.target.checked : expect.target.value;
    setEnters({ ...enters, [evt.target.name]: val });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("https://reqres.in/api/orders", enters)
      .then((results) => {
        console.log("Results", results);
      })
      .catch((error) => console.error(error.response));
    setEnters(emptyValues);
  };

  return (
    <>
      <Link to="/" style={{ marginRight: "7px" }}>
        Home
      </Link>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label htmlFor="Name">
          {" "}
          Name:
          <input
            id="name-input"
            type="text"
            name="name"
            value={enters.name || ""}
            onChange={onChange}
          />
        </label>

        {err.name.length > 1 ? <p className="error">{err.name}</p> : null}

        <br />
        <label htmlFor="Size">
          {" "}
          Choice of Size <br /> Required
          <select
            id="size-dropdown"
            className="sizes"
            name="size"
            value={enters.Size || "Size"}
            onChange={onChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select>
        </label>
        <br />
        <label htmlFor="Toppings">
          {" "}
          Add Toppings <br /> Add up to 6 toppings!
          <br />
          <input
            type="checkbox"
            name="pepperoni"
            value={enters.pepperoni || "pepperoni"}
            onChange={onChange}
          />
          pepperoni:
          <br />
          <input
            type="checkbox"
            name="sausage"
            value={enters.sausage || "sausage"}
            onChange={onChange}
          />
          sausage:
          <br />
          <input
            type="checkbox"
            name="bacon"
            value={enters.bacon || "bacon"}
            onChange={onChange}
          />
          bacon:
          <br />
          <input
            type="checkbox"
            name="chicken"
            value={enters.chicken || "chicken"}
            onChange={onChange}
          />
          chicken:
          <br />
          <input
            type="checkbox"
            name="onions"
            value={enters.onions || "onions"}
            onChange={onChange}
          />
          onions:
          <br />
          <label htmlFor="black olives">
            <input
              type="checkbox"
              name="black olives"
              value={enters.blackOlives || "black olives"}
              onChange={onChange}
            />
            black olives
          </label>
        </label>
        <br />
        <p><label htmlFor="instructions">Special Instructions: </label>
        <br />
        <textarea
          name="instructions"
          id="special-text"
          value={enters.instructions}
          onChange={onChange}
        /></p>
        <br />
        <button name="order-button" id="order-button" type="submit">
          Place your order!
        </button>
      </form>
    </>
  );
};

export default Form;
