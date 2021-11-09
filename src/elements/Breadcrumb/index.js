import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import "./index.scss";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index == props.data.length - 1 ? " active" : ""
              }`}
            ></li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
