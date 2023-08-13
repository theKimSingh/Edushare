import React, { useState } from "react";
import "./donate_resources.css";
import axios from "axios";

function Donate() {
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [states, setStates] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [resource, setResource] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productName, setProductName] = useState("");

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page

    const formData = {
      fullName,
      email,
      states,
      city,
      zip,
      age,
      street,
      resource,
      dateTime: formatCurrentTime(),
      quantity,
      productName,
    };

    try {
      const response = await axios.post("/api/submitDonate", formData);
      console.log(response.data.message);
      // Reset form fields here if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function formatCurrentTime() {
    const now = new Date();
    const formattedTime = now.toISOString().replace(/\d{3}Z$/, "0000000");
    console.log(formattedTime);
    return formattedTime;
  }

  return (
    <div className="donate-resources-bg">
      <div className="floating-donate">
        <h3>Share the gift of education.</h3>
        <h4>Donate Supplies</h4>
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-input-container" id="state">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    multiple={false}
                    name="state"
                    required={true}
                    value={states}
                    onChange={(e) => setStates(e.target.value)}
                  >
                    <option value={null}></option>
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
                    id="zip"
                    placeholder="90124"
                    type="number"
                    max={99999}
                    min={10000}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-input-container">
              <label htmlFor="age">Age</label>
              <select
                name="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value={null}></option>
                <option value="Under 13">Under 13</option>
                <option value="14-18">14-18</option>
                <option value="18-24">18-24</option>
                <option value="Over 24">Over 24</option>
              </select>
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
                <option value={null}></option>
                <option value="Textbook">Textbook</option>
                <option value="Writing Tools (ex. pens, pencils)">
                  Writing Tools (ex. pens, pencils)
                </option>
                <option value="Instruments (ex. rules)">
                  Instruments (ex. rulers)
                </option>
              </select>
            </div>
            <div className="form-input-container">
              <label for="product-name">Product Name</label>
              <input
                type="text"
                name="product-name"
                id=""
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="image-upload">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                src=""
                alt=""
                name="image-upload"
              />
            </div>
            <button type="submit" className="form-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donate;
