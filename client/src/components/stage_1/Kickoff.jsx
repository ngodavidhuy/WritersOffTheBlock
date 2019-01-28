import React, {Component} from 'react';
import Typewriter from './Typewriter.jsx'

const Kickoff = ({handlePageChange}) => {
  return (
    <div className="kickoff-container">
        <div className="kickoff-headers">
          <h1><span className="first-letter">W</span>riter's off the Block</h1>
          <h3>Do you feel like you're lacking in creativity?</h3>
          <h3>Are you a residence on writer's block?</h3>
          <h3>Lost in Translation?</h3>
          <Typewriter />
        </div>
        
        <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled 
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot 
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail 
        in their duty through weakness of will, which is the same as saying through shrinking from toil 
        and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power 
        of choice is untrammelled and when nothing prevents our being able to do what we like best, every 
        pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the 
        claims of duty or the obligations of business it will frequently occur that pleasures have to be 
        repudiated and annoyances accepted. The wise man therefore always holds in these matters to this 
        principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures 
        pains to avoid worse pains."</p>

        <div className="button-arrangement">
          <button onClick={handlePageChange}>HISTORY</button>
          <button onClick={handlePageChange}>NEXT</button>
        </div>
    </div>
  );
}

export default Kickoff;