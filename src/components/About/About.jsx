import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced web developer with a passion for creating
              user-friendly and responsive websites. I have a strong background
              in HTML, CSS, and JavaScript, and I am proficient in using
              frameworks such as React, Angular, and Vue.js. I have experience
              working with various databases, including MySQL, MongoDB, and
              PostgreSQL. I am also familiar with version control systems such
              as Git and GitHub. In addition to my technical skills, I have a
              strong understanding of user experience design and have experience
              working with design tools such as Adobe Photoshop and Figma.
            </p>
            <p>
              My passion for web development began when I was a child, and I
              have been creating websites and web applications since then. I
              have worked on a variety of projects, including personal blogs,
              portfolios, and online stores. I am always looking for new
              challenges and opportunities to learn and grow as a web developer.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
