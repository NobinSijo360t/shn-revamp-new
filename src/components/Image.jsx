// Image.js
"use client";

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// Optional: Import CSS for styling

const Image = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};

// Define prop types to ensure correct usage
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

// Set default props
Image.defaultProps = {
  alt: "Image",
  className: "",
  style: {},
};

export default Image;
