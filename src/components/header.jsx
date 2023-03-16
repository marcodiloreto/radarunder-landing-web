import React from "react";

export const Header = (props) => {

  function handleDownload() {
    fetch('RadarUnder - Installer.apk')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'filename.apk';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
      });
  }



  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container" >
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text col-xs-12">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p style={{fontWeight:'bold'}}>{props.data ? props.data.paragraph : "Loading"}</p>
              <div>
              <button onClick={handleDownload}  type="button" class="android-btn">
              <span class="android-btn-text">DESCARGAR</span>
              <span class="android-btn-icon"><i class="fa fa-android"></i></span>
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
