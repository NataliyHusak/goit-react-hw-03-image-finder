import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => (
  <div>
    {data.length > 0 && (
      <ul className={styles.ImageGallery}>
        {data.map(item => (
          <ImageGalleryItem data={item} onClick={openModal} key={item.id} />
        ))}
      </ul>
    )}
  </div>
);

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired
};
export default ImageGallery;
