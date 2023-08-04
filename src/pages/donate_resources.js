import React from "react";

function Donate() {
  return (
    <div>
      <img
        src="../books.jpg"
        alt="books"
        style={{
          width: "100%",
          filter: "brightness(120%)",
          
        }}
      />
      <div className="floating-donate">
        <form className="donate-form">
          <h3>Donate Supplies</h3>
          <h4>Share the gift of education.</h4>
          <div className="find-forms">
            <div className="left-side">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="  John Stuart"
              />

              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="  you@example.com"
              />

              <label for="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="  123 Airo Street"
              />

              <label for="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="  Bothell"
              />

              <label for="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="  Arkansas"
              />

              <label id="zip-name" for="zip-code">
                Zip Code
              </label>
              <input
                type="text"
                id="zip-code"
                name="zip-code"
                placeholder="  12345"
              />
            </div>
            <div className="right-side">
              <label for="resource">Resource</label>
              <select id="resource" name="resource">
                <option value="textbook">textbook</option>
                <option value="writing tools">Writing Tools (ex. pen)</option>
                <option value="instruments">Instruments (ex. rulers)</option>
              </select>

              <label id="product-name" for="product-name">
                Product Name
              </label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                placeholder="  pencil"
              />
              <label id="quantity" for="quantity">
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                placeholder="  50"
              />
            </div>
            <input type="submit" value="Submit" id="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donate;
