import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  const [isFull, setIsFull] = useState(false);

  //tarihi formatlama
  const date = new Date(video.publishDate).toLocaleDateString("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // metnin gösterilecek karakter sınırı
  const text = isFull
    ? video.description
    : video.description.slice(0, 150) + ".. daha fazla";

  return (
    <div
      onClick={() => setIsFull(!isFull)}
      className="bg-gray-200 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2 font-bold">
        <p>{millify(video.viewCount)} Görüntülenme</p>
        <p>{date}</p>
      </div>

      <p>
        {text.split(`\n`).map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}{" "}
        ... daha fazla
      </p>
    </div>
  );
};

export default VideoInfo;
