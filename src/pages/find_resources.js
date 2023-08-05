import React from "react";

function Find() {
  return (
    <div>
      <img
        src="../book-shelf.jpg"
        alt="books"
        style={{ width: "100%", filter: "brightness(60%)", height: "80vh" }}
      />
      <div className="floating-find">
        <form className="find-form">
          <h4>Share the gift of education.</h4>
          <h3>Find Supplies</h3>
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
            </div>
            <div className="right-side">
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

              <label for="resource">Resource</label>
              <select id="resource" name="resource">
                <option value="textbook">textbook</option>
                <option value="writing tools">Writing Tools (ex. pen)</option>
                <option value="instruments">Instruments (ex. rulers)</option>
              </select>
            </div>
            <input type="submit" value="Submit" id="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Find;
