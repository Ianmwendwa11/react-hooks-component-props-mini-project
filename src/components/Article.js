import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const displayEmojis = () => {
    let emoji = "";
    if (minutes < 30) {
      emoji = "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      emoji = "🍱".repeat(Math.ceil(minutes / 10));
    }
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {displayEmojis()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
