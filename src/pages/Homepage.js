import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-background">
        <div className="image-text">
          <h1>Sharing is Caring.</h1>
          <p>
            Help millions of children around the world by joining our platform
            now!
          </p>
          <button className="home-button">
            <a href="/donate-resources">Donate</a>
          </button>
        </div>
      </div>

      <div className="who-are-we">
        <div className="who-are-we-text-container">
          <h3 className="section-header">Who Are We?</h3>
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
          <img alt="child doing hw" src="./child-hw.jpg"></img>
        </div>
      </div>
      <div className="our-sponsors">
        <h3 className="section-header">Our Sponsors</h3>
        <marquee behavior="scroll" direction="right">
          <img
            src="https://news-cdn.softpedia.com/images/news2/Microsoft-Redesigns-Its-Logo-for-the-First-Time-in-25-Years-Here-It-Is-3.png"
            alt=""
          />
          <img
            src="https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.RgxiLMdnxNBA5Q17hnJ2xAHaEK?pid=ImgDet&rs=1"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/R.01f28c2dfe2b297ec4a8e480569ba321?rik=1Q1LvXtv0pzIoQ&pid=ImgRaw&r=0"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/R.2ebc6c77ba84d7194d4a8f6a7334571e?rik=2ffoY4RHjXWJ2w&pid=ImgRaw&r=0"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?pid=ImgDet&rs=1"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/R.7ecb22fd61fcaf57bf8b9a17b0098a63?rik=TPhIcpZgIBuO4A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fnike%2fnike_PNG12.png&ehk=S%2bcMWpHgbfcTZOdLleeHaSQtTCy%2fJlsSgGQ343nc5DY%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </marquee>
      </div>
      <div className="newsletter">
        <h3 className="section-header" id="newsletter-section-header">
          Sign Up For Our Newsletter!
        </h3>
        <form className="newsletter-form">
          <label htmlFor="">Email: </label>
          <input type="text" name="" id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/*  <div className="our-team">
        <h3 className="section-header">Our Team</h3>
        <div className="our-team-cards-container">
            {
                teamMembers.map((member) => {
                    return(
                        <div className="our-team-card">
                            <div className="our-team-card-top"
                                style={{ backgroundImage: `url(${member.image})` }}
                            >
                            </div>
                            <div className="our-team-card-bottom">
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
