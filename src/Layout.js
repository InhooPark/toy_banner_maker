import React from "react";
import html2canvas from "html2canvas";

const Layout = ({ children }) => {
  function saveBtn() {
    canvas();
  }

  function canvas() {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
      const thisCanvas = document.querySelector("canvas");
      const link = document.createElement("a");
      link.href = thisCanvas.toDataURL();
      link.download = "MyBanner";
      link.click();
      window.location.reload();
    });
  }
  return (
    <>
      <header className="header">
        <h1> Banner Maker </h1>
        <div className="saveBtn">
          <button onClick={saveBtn}>Save My Banner</button>
        </div>
      </header>
      {children}
      <footer className="footer">
        <p>Copyright 2023. PIH</p>
      </footer>
    </>
  );
};

export default Layout;
