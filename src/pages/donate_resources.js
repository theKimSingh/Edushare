import React from 'react'

function Donate() {
  return (
    <div>
      <img
        src="../books.jpg"
        alt="books"
        style={{ width: "100%", filter: "brightness(120%)" }}
      />
      <div className="floating-donate">
        <form className="donate-form">
          <h3>Donate Supplies</h3>
          <h4>Share the gift of education.</h4>

          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="name" />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="you@example.com"
          />

          <label for="address">Address</label>
          <input type="text" id="address" name="address" placeholder="addy" />

          <label for="city">City</label>
          <input type="text" id="city" name="city" placeholder="city" />

          <label for="state">State</label>
          <input type="text" id="state" name="state" placeholder="state" />

          <label for="zip-code">Zip Code</label>
          <input
            type="text"
            id="zip-code"
            name="zip-code"
            placeholder="zip-code"
          />

          <label for="resource">Resource</label>
          <select id="resource" name="resource">
            <option value="textbook">textbook</option>
            <option value="writing tools">Writing Tools (ex. pen)</option>
            <option value="instruments">Instruments (ex. rulers)</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Donate;
