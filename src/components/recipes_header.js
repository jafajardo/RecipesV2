import React from 'react';

function RecipesHeader(props) {
  return (
    <header className="masthead" style={{ backgroundImage: "url('../../assets/images/header_image.jpg')"}}>
      <div className="container h-100">
        <div className="h-100 d-flex align-items-center flex-row">
          <div className="text-center w-100">
            <img className="my-little-cheffy-logo-hero" src="../../assets/images/My Little Cheffy - Logo.png"></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RecipesHeader;