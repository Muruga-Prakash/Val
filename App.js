import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenBox = () => {
    setIsOpened(true);
  };

  return (
    <div className="valentine-container">
      <div className="decorations">
        {[...Array(20)].map((_, i) => (
          <FaHeart key={i} className="floating-heart" />
        ))}
      </div>
      <motion.div
        className="mystery-box"
        initial={{ scale: 1 }}
        animate={{ scale: isOpened ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleOpenBox}
      >
        <img src="your_picture.jpg" alt="Your Pic" className="profile-pic" />
      </motion.div>
      {isOpened && (
        <motion.div
          className="video-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <video controls autoPlay>
            <source src="your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </div>
  );
};

export default App;
