import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile" />
      <h1>
        I'm <span>Mukund Chander</span>, frontend developer from India
      </h1>
      <p>
        I am a frontend developer with a passion for creating user-friendly and
        responsive websites.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
