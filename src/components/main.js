import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/farm2.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Awesome Products! Affordable Prices</h5>
              <p className="card-text fs-5 d-none d-sm-block " >
              Step into a virtual agrarian haven where pixels plow prosperity, and bytes blossom into bountiful harvests – welcome to <b>Agri.market</b>, where the future of farming unfolds in every click!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
