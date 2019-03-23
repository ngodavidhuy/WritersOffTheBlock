import React from 'react';

const BlockEntry = ({block, entry}) => {
  let { prompt, content, created_at } = block;
  let date = Date(created_at).toString();
  return (
    <div className="history-entry">
      <div className="history-entry-header">
        <span>{`BLOCK ${entry}`}</span>
        <div className="history-option-buttons">
          <button type="button">DOWNLOAD</button>
          <button type="button">DELETE</button>
        </div>
      </div>
      <div className="history-main-content">
        <h6>{prompt}</h6>
        <p>{content}</p>
        <p className="history-date">Date: {date}</p>
      </div>
    </div>
  );
}

export default BlockEntry;