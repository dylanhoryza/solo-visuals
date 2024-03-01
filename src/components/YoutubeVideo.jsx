import React from 'react';

const YouTubeVideo = ({ videoId, ...props }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video-page">
      <iframe
        className="youtube-box-page"
        width="100%"
        height="1100"
        src={`${embedUrl}?&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
