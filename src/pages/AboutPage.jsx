import React from "react";

import naiomypic from "../images/naiomycartoon.png"
import roxpic from "../images/roxcartoon.png"
import gitHubpic from "../images/github-mark.svg"
import linkedInpic from "../images/linkedin-logo.png"

const allImages = [
  {
    name: "Roxangélica Rolán",
    mainImage: {
      url: roxpic,  
      alt: "Roxangelica Pic",
    },
    smallImages: [
      {
        img: gitHubpic,
        alt: "GitHub",
        link: "https://github.com/rrolanbaez",
      },
      {
        img: linkedInpic,
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/roxangelicarolan/",
      },
    ],
  },
  {
    name: "Naiomy Figueroa",
    mainImage: {
      url: naiomypic,
      alt: "Naiomy Pic",
    },
    smallImages: [
      {
        img: gitHubpic,
        alt: "GitHub",
        link: "https://github.com/nfigueroa1231",
      },
      {
        img: linkedInpic,
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/naiomyfigueroa/",
      },
    ],
  },
];


function AboutPage() {
    return (
      <div className="AboutPage">
        <div className="background-blur"></div> 
        <div className="content-about">
          <h1 className="text-center" style={{ paddingTop: '30px', fontFamily: 'sans-serif' }}> Meet our Members!</h1>
            <div className="row justify-content-center">
                {allImages.map((person, index) => (
                    <div key={index} className="col-md-6 mb-4 d-flex justify-content-center">
                        <div className="card about-card">
                        <div className="card-header bg-transparent text-center">
                            <img src={person.mainImage.url} alt={person.mainImage.alt}  className="rounded-circle main-image" />
                        </div>

                        <div className="card-body text-center bg-custom">
                            <h5 className="card-text">{person.name}</h5>
                            <p>Web Dev Student at Ironhack</p>
                            <div className="small-image-container">
                                {person.smallImages.map((smallImage, smallIndex) => (
                                    <a href={smallImage.link} key={smallIndex} target="_blank" rel="noopener noreferrer" className="m-2">
                                        <img src={smallImage.img} alt={smallImage.alt} className="small-image"/>
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
              
 
export default AboutPage;