import React from 'react';

const BlockEntry = ({block, entry, handleBlockDeletion}) => {
  let { prompt, content, created_at } = block;
  let date = new Date(created_at);
  return (
    <div className="history-entry">
      <div className="history-entry-header">
        <span>{`BLOCK ${entry}`}</span>
        <div className="history-option-buttons">
          <button type="button">DOWNLOAD</button>
          <button type="button" 
          onClick={() => handleBlockDeletion(entry)}>
          DELETE</button>
        </div>
      </div>
      <div className="history-main-content">
        <h6>{prompt}</h6>
        <p>{content}</p>
        <p className="history-date">Date: {date.toString()}</p>
      </div>
    </div>
  );
}

export default BlockEntry;