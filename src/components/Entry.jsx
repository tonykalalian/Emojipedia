import React from "react";
import Emoji from "../emojipedia";
const Entry = (props) => {
  return (
    <>
      {Emoji.map((emoji) => (
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {emoji.emoji}
              </span>
              {emoji.name}
              <span></span>
            </dt>
            <dd>{emoji.meaning}</dd>
          </div>
        </dl>
      ))}
    </>
  );
};
export default Entry;
