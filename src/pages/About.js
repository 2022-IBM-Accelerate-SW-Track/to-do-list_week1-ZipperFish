import React, { Component } from 'react';
import "./About.css";
import nameOfYourPicFile from "../assets/nameOfYourPicFile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>Page About Nana Frimpong </p> 
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={nameOfYourPicFile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Nana Frimpong</div>
        <div className="brief_description">
          My name is Nana Frimpong and I am sophmore at the City College of New York. Some of my favorite hobbies are wacthing movies and playing basketball.
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

