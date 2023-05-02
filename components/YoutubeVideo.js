const YoutubePlayer = ({ videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div className="aspect-w-16 aspect-h-9 my-4 px-2">
        <iframe
          title="YouTube video player"
          className="w-full h-full rounded-xl"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default YoutubePlayer;
  