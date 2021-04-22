const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <div className="song-cover">
        <img
          className={isPlaying ? "spin" : "pause"}
          alt={currentSong.name}
          src={currentSong.cover}
        ></img>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
