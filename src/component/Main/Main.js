import React, { useState } from "react";
import "./Main.css";
import {
  FaRegHeart,
  FaHeart,
  FaBookmark,
  FaRegBookmark,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Main = ({ id, name, age, bio, location, about, interest, image , type}) => {
  const [imageheight, setImageHeight] = useState(false);
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const handleDown = () => {
    setImageHeight((prevImageHeight) => !prevImageHeight);
  };

  const handlelike = () => {
    setLike(!like);
  };

  const handleBookmark = () => {
    setBookMark(!bookmark);
  };

  return (
    <>
      <div className="outer_image">
        <section style={{ height: imageheight ? "60%" : "100%" }}>
          <img src={image} alt="User" />
          {imageheight && (
            <FaArrowUp
              onClick={handleDown}
              style={{ color: "red", cursor: "pointer" }}
            />
          )}
        </section>
        {imageheight && (
          <div className="all_details">
            <section>
              <h1>
                {name}, {age}
              </h1>
              <h4 id='location'><CiLocationOn/> {location}</h4>
            </section>
            <p></p>
            <section>
              <span>
                <h6>About Me </h6>
                <p>{about}</p>
              </span>

              <span>
                <h6>Interest </h6>

                <section>
                  {interest.map((item, index) => (
                    <p key={index} id="interest">
                      {item}
                    </p>
                  ))}
                </section>
              </span>
              <span>
                <h6>Relation Type </h6>
                <p>{type}</p>
              </span>
            </section>
          </div>
        )}



        <div className="alltag">


          {!imageheight && (
            <span>
              <h1>
                {name}, {age}
              </h1>
              <h4 id='location'><CiLocationOn/>Lives in {location}</h4>
              <h5 id='location'><CiUser/>{bio}</h5>
            </span>
          )}
          <section>
            <span onClick={handlelike}>
              {!imageheight && <>{like ? <FaHeart id="heartfilled" style={{color:'red'}} /> : <FaRegHeart  style={{color:'gray'}}/>}</>}
            </span>

            <span onClick={handleBookmark}>
              {!imageheight && (
                <>{bookmark ? <FaBookmark style={{color:'gray'}} /> : <FaRegBookmark style={{color:'gray'}} />}</>
              )}
            </span>
            <span id="arrow_down">
              {!imageheight && (
                <FaArrowDown
                  onClick={handleDown}
                  style={{ cursor: "pointer", width: "100%" }}
                />
              )}
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
