import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img
          src="../poor-children.jpg"
          alt="children"
          style={{ width: "100%", filter: "brightness(40%)" }}
        />
        <div className="image-text">
          <h3>Sharing is Caring.</h3>
          <p>
            Help millions of children around the world by joining our platform
            now!
          </p>
          <button className="home-button">
            <a href="/donate-resources">Donate</a>
          </button>
        </div>
      </div>

      <div className="second-part">
        <img src="child-hw.jpg"></img>
        <div>
          <h3>Who Are We?</h3>
          <p>
            We are Edushare, the world's leading education platform, built by
            high-schoolers, for children around the globe. Born from a humble
            position of a Quadrant Resource internship, our team put mind and
            soul together to figure out a way to give back to the community for
            all it has given us. Our solution? A platform to children around the
            globe share educational resources. Join our platform now to
            contribute to our mission and help those less fortunate than you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
