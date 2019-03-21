import React from 'react';
import Typing from 'react-typing-animation';

const Typewriter = () => {
  return (
    <div className="typewriter">
      <Typing>
        "Once upon a time..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={15} />
        in a blue moon..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={24} />
        "Since the beginning of time..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={25} />
        I was a child..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={24} />
        "It was the best of times, it was the worst of times..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={56} />
        "To be or not to be..."
        <Typing.Delay ms={200} />
        <Typing.Backspace count={23} />
        Let's end all of the cliches...
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        unlock our creative potential.
        <Typing.Delay ms={100} />
      </Typing>
    </div>
  );
}

export default Typewriter;


