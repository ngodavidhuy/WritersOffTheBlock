import React, {Component} from 'react';
import Typewriter from './Typewriter'

const Introduction = ({handlePageChange}) => {
  return (
    <div className="intro-container">
        <div className="intro-headers">
          <h1><span className="first-letter">W</span>riter's off the Block</h1>
          <h3>Do you feel like you're lacking in creativity?</h3>
          <h3>Are you a residence on writer's block?</h3>
          <h3>Lost in Translation?</h3>
          <Typewriter />
        </div>

        <p>Everyone has experienced the pain points of simply applying pen to paper. 
        We're all complex human beings, all with unique thoughts to express, so let's just spill all our thoughts out!
        When you're a writer off of the block, you freely jot down every and any thought that is already lurking from within you, 
        you'd be amazed at what you're capable of when your creativity muscles have been incited. 
        We challenge you to take on a random prompt and write at least a minimum of 250 words about the subject in order to save your work.
        But there's a twist, if you were to idle for 10 seconds, all of your precious content will be deleted. Therefore, write or flight!</p>

        <div className="button-arrangement">
        <button onClick={handlePageChange}>HISTORY</button>
          <button onClick={handlePageChange}>BEGIN</button>
        </div>
    </div>
  );
}

export default Introduction;