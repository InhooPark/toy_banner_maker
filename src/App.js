import { useState } from "react";
import "./App.scss";
import Layout from "./Layout";

function App() {
  // 기본 가로 너비값 필요함 얼마로하지 320?
  const [inputTxt, setInputTxt] = useState("TEST");
  const [hRatio, setHRatio] = useState(3);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgImage, setBgImage] = useState("");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(32);
  const [fontx, setFontX] = useState(0);
  const [fonty, setFontY] = useState(0);
  const [fontb, setFontB] = useState(0);
  const [fonts, setFontS] = useState("#000000");
  const [alignX, setAlignX] = useState("center");
  const [alignY, setAlignY] = useState("center");
  const [borderW, setBorderW] = useState(1);
  const [borderColor, setBorderColor] = useState("#000000");

  function align(x, y) {
    setAlignX(x);
    setAlignY(y);
  }
  function inputTxtFunc(e) {
    setInputTxt(e.target.value);
  }
  function fileup() {
    const result = document.getElementById("bgimg");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(result.files[0]);
    fileReader.addEventListener("loadend", (e) => {
      setBgImage(e.target.result);
    });
  }

  return (
    <div className="App">
      <Layout>
        <main>
          <div className="capture_area">
            <div
              id="capture"
              style={{
                justifyContent: `${alignX}`,
                alignItems: `${alignY}`,
                border: `${borderW}px solid ${borderColor}`,
                aspectRatio: `${hRatio} / 1`,
                backgroundColor: `${bgColor}`,
                backgroundImage: `url("${bgImage}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
              }}
            >
              <p style={{ zIndex: 100, fontSize: `${fontSize}px`, color: `${fontColor}`, textShadow: `${fontx}px ${fonty}px ${fontb}px ${fonts}` }}>
                {inputTxt}
              </p>
            </div>
          </div>

          <div className="control_panel">
            <div className="txt">
              <p>Title: </p>
              <input onChange={inputTxtFunc} type="text" maxLength={15} placeholder="test" />
            </div>
            <div className="height_control">
              <p>HeightRatio: </p>
              <input onChange={(e) => setHRatio(e.target.value)} type="number" placeholder="3" /> : 1
            </div>

            <div className="bg_control">
              <p>BackgroundColor: </p>
              <input onChange={(e) => setBgColor(e.target.value)} type="color" />
            </div>
            <div className="bg_img_control">
              <p>BackgroundImage: </p>
              <input type="file" id="bgimg" />
              <button onClick={fileup}>upload</button>
            </div>

            <div className="txt_color_control">
              <p>FontColor: </p>
              <input onChange={(e) => setFontColor(e.target.value)} type="color" />
            </div>
            <div className="txt_control">
              <p>FontSize: </p>
              <input
                onChange={(e) => {
                  if (e.target.value >= 10 && e.target.value <= 100) setFontSize(e.target.value);
                  else if (e.target.value < 10) setFontSize(10);
                  else if (e.target.value > 100) setFontSize(100);
                  else return;
                }}
                type="number"
                placeholder="10 ~ 100"
              />
              px
            </div>
            <div className="txt_shadow_control">
              <p>FontShadow: </p>
              x
              <input
                onChange={(e) => {
                  if (e.target.value <= 5 && e.target.value >= -5) setFontX(e.target.value);
                  else if (e.target.value > 5) setFontX(5);
                  else if (e.target.value < -5) setFontX(-5);
                  else return;
                }}
                type="number"
              />
              px <br />
              y
              <input
                onChange={(e) => {
                  if (e.target.value <= 5 && e.target.value >= -5) setFontY(e.target.value);
                  else if (e.target.value > 5) setFontY(5);
                  else if (e.target.value < -5) setFontY(-5);
                  else return;
                }}
                type="number"
              />
              px <br />
              blur
              <input
                onChange={(e) => {
                  if (e.target.value <= 20 && e.target.value > 0) setFontB(e.target.value);
                  else if (e.target.value > 20) setFontB(20);
                  else if (e.target.value <= 0) setFontB(0);
                  else return;
                }}
                type="number"
              />
              px <br />
              <input onChange={(e) => setFontS(e.target.value)} type="color" />
            </div>
            <div className="txt_align_control">
              <p>FontAlignment: </p>
              <div className="txt_align_btn_wrap">
                <button onClick={() => align("flex-start", "flex-start")}>┌</button>
                <button onClick={() => align("center", "flex-start")}>┬</button>
                <button onClick={() => align("flex-end", "flex-start")}>┐</button>
                <button onClick={() => align("flex-start", "center")}>├</button>
                <button onClick={() => align("center", "center")}>┼</button>
                <button onClick={() => align("flex-end", "center")}>┤</button>
                <button onClick={() => align("flex-start", "flex-end")}>└</button>
                <button onClick={() => align("center", "flex-end")}>┴</button>
                <button onClick={() => align("flex-end", "flex-end")}>┘</button>
              </div>
            </div>

            <div className="border_control">
              <p>BorderSize: </p>
              <input
                onChange={(e) => {
                  if (e.target.value <= 3 && e.target.value >= 0) setBorderW(e.target.value);
                  else if (e.target.value > 3) setBorderW(3);
                  else if (e.target.value < 0) setBorderW(0);
                  else return;
                }}
                type="number"
              />
              px
            </div>
            <div className="border_color_control">
              <p>BorderColor: </p>
              <input onChange={(e) => setBorderColor(e.target.value)} type="color" />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default App;
