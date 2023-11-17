import cl from './App.module.css';
import React, {useRef} from "react";
import {List} from "./components/List";
import {Video} from "./components/Video";
import {RectAngels} from "./components/RectAngels";
function App() {
    const counter = useRef<number>(0);
    const video  = useRef<HTMLVideoElement>(null);
  return (
      <div className={cl.container}>
        <div className={cl.videoWrapper}>
          <Video video={video}/>
          <RectAngels />
        </div>
        <List video={video} counter={counter}/>
      </div>
  );
}
export default App;
