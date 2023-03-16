import React from "react";

export const AboutProject = (props) => {
  return (
    <div id="aboutProject" style={{paddingTop:100, paddingBottom:100}}>
      <div className="container">
        <div style={{display:"flex", flexDirection:'row-reverse'}}> 
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>¿Qué es RadarUnder?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
            <h3>¿Para qué?</h3>
               <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><h4>{d}</h4></li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}><h4>{d}</h4></li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden-sm col-xs-12 col-md-6">
            {" "}
            <img src="img/aboutProject.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
