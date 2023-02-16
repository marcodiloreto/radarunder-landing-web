import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg" >
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <div style={{height:250, justifyContent:'center', alignItems:'center'}}>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
          </div>
        </a>{" "}
      </div>
    </div>
  );
};
