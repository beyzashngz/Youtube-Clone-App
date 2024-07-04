import { useContext } from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { VideoContext } from "../context/VideoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Feed = () => {
  const { Videos, isLoading, error } = useContext(VideoContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          Videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
