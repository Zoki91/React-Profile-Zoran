import React from "react";
import "./Card.css";

const Card = (props) => {
  const card = props.card;

  return (
    <div className="card">
      <div className="card-image">
        <img src={card.img} alt="images" />
      </div>

      <div className="card-content">
        <div className="card-content-title">
          <h2>{card.title}</h2>
        </div>

        <div className="card-content-description">
          <span>{card.description}</span>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn card-btn-github" target="_blank" href={card.github}>GitHub Repo</button>
        <button className="btn card-btn-liveview" target="_blank" href={card.liveView}>Live View</button>
      </div>
    </div>

    // <div className="card-wrapper">
    //   <div className="about-card-content">
    //     <img src="/images/project2.png" alt="project1" className="image-card" />
    //     <div className="card-title">
    //       <h2>TITLE</h2>
    //     </div>

    //     <div className="card-text-description">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    //       labore atque placeat repellendus optio magnam voluptas corrupti
    //       blanditiis architecto tempora?
    //     </div>

    //     <div className="button-wrapper">
    //       <button className="github-btn">GitHub Repo</button>
    //       <button className="liveview-btn">Live View</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;

// {
//   img: '/images/project2.png',
//   title: "Paws For Homes",
//   description: "A pet adobtion website which lets you sign up, login, and upload a pet to get started. You can also view all pets which are up for adoption to which you can then contact the owner",
//   liveView: "https://paws-for-homes.herokuapp.com/",
//   github: "https://github.com/Zoki91/Paws-For-Homes",
// },
