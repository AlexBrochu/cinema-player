import videos from "../../data/videos";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../redux/videos/video.action";

const SideMenu = () => {
  const dispatch = useDispatch();

  const changeVideo = (video: any): any => {
    dispatch(selectVideo(video));
  };
  return (
    <div>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            <h1 onClick={() => changeVideo(video)}>{video.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
