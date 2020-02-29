import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ data, onClick }) => (
  <li
    onClick={() => onClick(data.id)}
    role="presentation"
    className={styles.ImageGalleryItem}
  >
    <img
      src={data.imageURL}
      alt={data.tags}
      className={styles.ImageGalleryImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    imageURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
export default ImageGalleryItem;
