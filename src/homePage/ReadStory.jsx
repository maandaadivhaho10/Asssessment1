
import "./ReadStory.css";

export default function ReadStory() {
  return (
    <div className="story-container">
      <div>
        <h1>AuraStyle Essentials</h1>
      </div>
      <div>
        <p className="story-description">
          AuraStyle is a Copenhagen based fashion brand. Minimalist, elegant and 
          sustainable. Designed in Denmark, crafted with care for the modern individual.
        </p>
      </div>
      <div className="myStroryLink">
         <div>
              <a className="story-link" href="#about">Read our story</a>
         </div>
      </div>
    </div>
  );
}
