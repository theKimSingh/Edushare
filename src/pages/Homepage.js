import React from 'react'
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
        <div className="homepage-background">
            <div className="image-text">
                <h1>Sharing is Caring.</h1>
                <p>
                    Help millions of children around the world by joining our platform now!
                </p>
                <button className="home-button">
                    <a href="/donate-resources">Donate</a>
                </button>
            </div>
        </div>

        <div className="who-are-we">
            <div className="who-are-we-text-container">
                <h3>Who Are We?</h3>
                <p>
                    We are Edushare, the world's leading education platform, built by
                    high-schoolers, for children around the globe. Born from a humble
                    position of a Quadrant Resource internship, our team put mind and
                    soul together to figure out a way to give back to the community for
                    all it has given us. Our solution? A platform to help children
                    around the globe share educational resources. Join our platform now
                    to contribute to our mission and help those less fortunate than you.
                </p>
            </div>
            <div className="who-are-we-img-container">
                <img alt="child doing hw" src="child-hw.jpg"></img>
            </div>
      </div>
    </div>
  )
}

export default Homepage