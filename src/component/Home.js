import React from "react";

const Home = ({ shows, handleClick }) => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>TV Shows</h1>
      <div className="row">
        {shows.map((show,index) => (
          <div className="col-sm-6 col-md-4 p-2" key={show.show.id}>
            <div className="card">
              {show.show.image ? (
                <img
                  src={show.show.image?.original}
                  className="card-img-top"
                  alt=""
                  style={{ height: "563px" }}
                />
              ) : (
                <h2
                  style={{
                    borderBottom: "1px solid",
                    height: "563px",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No image
                </h2>
              )}
              <div className="card-body ">
                <h5
                  className="card-title p-2"
                  style={{ textAlign: "center", backgroundColor: "lightgray" }}
                >
                  <b>Movie Info</b>
                </h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Name:</b> {show.show.name}
                  </li>
                  <li className="list-group-item">
                    <b>Genre:</b> {show.show.genres[0]} {show.show.genres[1]}
                  </li>
                  <li className="list-group-item">
                    <b>Languages:</b> {show.show.language}
                  </li>
                  <li className="list-group-item">
                    <b>Release Date:</b> {show.show.premiered}
                  </li>
                </ul>
                <button
                  value={index}
                  className="btn btn-primary"
                  onClick={handleClick}
                    // onClick={() =>
                    //   (window.location.href = `/show/${show.show.id}`)
                    // }
                >
                  Show Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
