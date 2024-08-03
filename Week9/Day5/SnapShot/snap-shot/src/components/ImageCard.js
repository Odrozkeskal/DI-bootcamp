import React from "react";

function ImageCard({image}){
    return (
        <div className="image-card">
           <img src={image.src.medium} alt={image.alt} />
           <div className="image-overlay">
            <p>{image.alt}</p>
           </div>

        </div>

    );
}
export default ImageCard;