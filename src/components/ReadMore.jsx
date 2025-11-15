import React, { useState } from 'react';
import './ReadMore.css';

// text = სრული ტექსტი, maxLength = რამდენი სიმბოლო გამოჩნდეს თავიდან
function ReadMore({ text, maxLength = 120 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // თუ ტექსტი არ არსებობს ან მოკლეა, უბრალოდ ვაჩვენებთ მას
  if (!text || text.length <= maxLength) {
    return <p>{text}</p>;
  }

  // ფუნქცია, რომელიც ცვლის მდგომარეობას (გაშლილი/დახურული)
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-wrapper">
      <p>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button onClick={toggleReadMore} className="read-more-btn">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default ReadMore;