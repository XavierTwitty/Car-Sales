import React, { useState } from "react";
import { connect } from "react-redux";
import { clearFeature } from "../actions";

const AddedFeature = (props) => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* onClick={() => props.clearFeature(props.feature)} */}
      <button
        onClick={() => props.clearFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {};

export default connect(null, { clearFeature })(AddedFeature);
