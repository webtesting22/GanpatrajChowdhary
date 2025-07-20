import React, { useState, useRef, useEffect } from "react";
import './VideoContainer.css';

const VideoContainer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (newVolume) => {
        const clampedVolume = Math.max(0, Math.min(1, newVolume));
        setVolume(clampedVolume);
        if (videoRef.current) {
            videoRef.current.volume = clampedVolume;
        }
    };

    const increaseVolume = () => {
        handleVolumeChange(volume + 0.1);
    };

    const decreaseVolume = () => {
        handleVolumeChange(volume - 0.1);
    };

    const toggleMute = () => {
        if (volume > 0) {
            setVolume(0);
        } else {
            setVolume(0.5);
        }
    };

    return (
        <div className="paddingTop marginTop  paddingBottom" >
            <div className="Container">
                <div
                    className="VideoContainerEdit"
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                >
                    <video
                        ref={videoRef}
                        src="https://prepseed.s3.ap-south-1.amazonaws.com/prod/ldoc/chat/GanpatrajCompressedVideoNew.mp4"
                        autoPlay
                        muted={volume === 0}
                        loop
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    ></video>

                    {/* Custom Video Controls */}
                    <div className={`video-controls ${showControls ? 'show' : ''}`}>
                        <div className="controls-left">
                            {/* Play/Pause Button */}
                            <button
                                className="control-btn play-btn"
                                onClick={togglePlay}
                                title={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>

                            {/* Volume Controls */}
                            <div className="volume-controls">
                                {/* Mute/Unmute Button */}
                                <button
                                    className="control-btn volume-btn"
                                    onClick={toggleMute}
                                    title={volume === 0 ? 'Unmute' : 'Mute'}
                                >
                                    {volume === 0 ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    )}
                                </button>

                                {/* Volume Decrease Button */}
                                <button
                                    className="control-btn volume-btn"
                                    onClick={decreaseVolume}
                                    title="Decrease Volume"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 13H5v-2h14v2z" />
                                    </svg>
                                </button>

                                {/* Volume Slider */}
                                <div className="volume-slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={volume}
                                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                        className="volume-slider"
                                        title="Volume"
                                    />
                                </div>

                                {/* Volume Increase Button */}
                                <button
                                    className="control-btn volume-btn"
                                    onClick={increaseVolume}
                                    title="Increase Volume"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;