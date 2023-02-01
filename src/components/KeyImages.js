import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Product from "../assets/scene5/productdetail.png";
import TastingNote from "../assets/scene5/tastingnote.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
export function KeyImages({image}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [Product, TastingNote];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <LazyLoadImage
        src={images[image]}
        onClick={() => openImageViewer(image)}
        style={{
          width: "100%",
          maxHeight: "70vh",
          borderRadius: "12px",
        }}
        alt=""
      />

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{zIndex:3}}
        />
      )}
    </div>
  );
}
