import React, { useState } from "react";
import axios from "axios";
import "./donate_resources.css";
import "./find_resources.css";
import resources from "./resources.js";

const Find = () => {
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState("");
  const [resource, setResource] = useState("");

  let imageUrl = "";
  if (resource === "Textbook") {
    imageUrl = "https://i.ebayimg.com/images/g/4zcAAOSwThli3Hw5/s-l500.jpg";
  } else if (resource === "Writing Tools (ex. pens, pencils)") {
    imageUrl =
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79250/writing-tools-clipart-md.png";
  } else if (resource === "Instruments (ex. rules)") {
    imageUrl = "https://i.ebayimg.com/images/g/PSsAAOSwNSdcbtNB/s-l640.jpg";
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    axios
      .get("http://localhost:3001/api/data", {
        params: {
          condition: resource, // Assuming 'resource' is the value you want to pass
        },
      })
      .then((response) => {
        console.log("Received data:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="">
      <div className="find-resources-bg">
        <div className="floating-donate">
          <h3>Share the gift of education.</h3>
          <h4>Find Supplies</h4>
          <form action="" className="donate-form" onSubmit={handleSubmit}>
            <div className="left-side">
              <div className="form-input-container">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="John Doe"
                  required={true}
                />
              </div>
              <div className="form-input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="123@example.com"
                  required={true}
                />
              </div>
              <div className="address-container">
                <div className="form-input-container">
                  <label htmlFor="address">Street</label>
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="123 Airo Street"
                    required={true}
                  />
                </div>
                <div className="address-bottom">
                  <div className="form-input-container" id="city">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="Bothell"
                      required={true}
                    />
                  </div>
                  <div className="form-input-container" id="state">
                    <label htmlFor="state">State</label>
                    <select
                      id="state"
                      multiple={false}
                      name="state"
                      required={true}
                    >
                      <option value=""></option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className="form-input-container" id="zip">
                    <label htmlFor="zip">ZIP</label>
                    <input
                      name="zip"
                      id=""
                      placeholder="90124"
                      type="number"
                      max={99999}
                      min={10000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="form-input-container">
                <label for="resource">Resource</label>
                <select
                  id="resource"
                  value={resource}
                  name="resource"
                  onChange={(e) => setResource(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Textbook">Textbook</option>
                  <option value="Writing Tools (ex. pen, pencils)">
                    Writing Tools (ex. pen, pencils)
                  </option>
                  <option value="Instruments (ex. rules)">
                    Instruments (ex. rulers)
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-input-container">
                <label htmlFor="grade">School Grade</label>
                <select name="grade" id="">
                  <option value=""></option>
                  <option value="">Kindergarten</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">1st Year</option>
                  <option value="">2nd Year</option>
                  <option value="">3rd Year</option>
                  <option value="">4th Year</option>
                  <option value="">Graduate</option>
                  <option value="">Not in school</option>
                </select>
              </div>
              <button type="submit" className="form-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="cards-container">
        {data.map((data, index) => {
          const name = data["Product Name"];
          const street = data["Street"];
          const city = data["City"];
          const state = data["State"];
          const zip = data["Zip"];

          const address = `${street}, ${city}, ${state}, ${zip}`;
          return (
            <div className="card">
              <div
                className="card-top"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <div className="card-bottom">
                <div className="card-text">
                  <h3>{name}</h3>
                  <p>{address}</p>
                </div>
                <div className="card-button">
                  <button>Request</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Find;
