import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const Summary = (props) => {
  const summary = props.summary;
  const [data, setData] = useState([]);
  const [movieName, setMoviename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) => {
    e.preventDefault();
    setData([
      {
        movieName: movieName,
        email: email,
        password: password,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container summary-container">
      <div className="card  ">
        <div className="card-header">Show Summary</div>
        <div className="card-body">
          <p className="card-text">{parse(summary)}</p>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book Ticket
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Ticket Booking
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleData}>
                    <div class="mb-3">
                      <label for="movie-name" class="form-label">
                        Movie Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        value={movieName}
                        onChange={(e) => setMoviename(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
