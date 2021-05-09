import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import SideMenu from "./components/side-menu/side-menu.component";
import { State } from "./redux/store";

function App() {
  const [videoFilePath, setVideoFileURL] = useState("");
  const { video } = useSelector((state: State) => state.video);
  const handleVideoUpload = (event: any) => {
    console.log("URL " + event.target.files[0]);
    setVideoFileURL(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={handleVideoUpload} />
        <ReactPlayer
          url={video.path}
          controls={true}
          onError={(error) => {
            console.log(error);
          }}
        />
      </header>
      <SideMenu></SideMenu>
    </div>
  );
}

export default App;
