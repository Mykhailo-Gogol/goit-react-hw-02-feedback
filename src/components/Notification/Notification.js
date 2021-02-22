import React from "react";
import PropTypes from "prop-types";

const Notification = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

Notification.defaultProps = {
  message: "Default message",
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
