import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text col-xs-12">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p style={{color:"#777", fontWeight:'bold'}}>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
