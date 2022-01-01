import React from "react";
import completed from "assets/image/completed.jpg";
import { Fade } from "react-reveal";

export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={completed}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
