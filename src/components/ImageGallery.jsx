import React, { useState, useEffect , useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import "../styles/imageGallery.css"


const ImageGallery = ({ images, imagesPerPage = 9 }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    console.log("Images prop:", images);
  }, [images]);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openImageView = (index) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
  };

  const closeImageView = () => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    const nextIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const handleKeyDown = useCallback((event) => {
    if (selectedImage) {
      if (event.key === 'ArrowLeft') {
        showPrevImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'Escape') {
        closeImageView();
      }
    }
  }, [selectedImage, showNextImage, showPrevImage, closeImageView, currentImageIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOutsideClick = useCallback((e) => {
    if (e.target.classList.contains('image-view')) {
      closeImageView();
    }
  }, [closeImageView]);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPrevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="image-gallery">
      <div className="image-grid">
        {currentImages.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => openImageView(indexOfFirstImage + index)}
              onError={(e) => {
                console.error(`Error loading image: ${image.thumbnail}`);
                e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
      {selectedImage && (
        <div className="image-view" {...handlers}>
          <div className="image-view-content">
            <img src={selectedImage.original} alt="Full size" />
            <button onClick={closeImageView} className="close-button">×</button>
            <button onClick={showPrevImage} className="nav-button prev-button">&#10094;</button>
            <button onClick={showNextImage} className="nav-button next-button">&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};
const ImageView = ({ image, onClose, onNext, onPrev }) => {
    const handleOutsideClick = useCallback((e) => {
      if (e.target.classList.contains('image-view')) {
        onClose();
      }
    }, [onClose]);
  
    useEffect(() => {
      window.addEventListener('click', handleOutsideClick);
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }, [handleOutsideClick]);
  
    return (
      <div className="image-view">
        <div className="image-view-content">
          <img src={image.original} alt="Full size" />
          <button onClick={onClose} className="close-button">×</button>
          <button onClick={onPrev} className="nav-button prev-button">&#10094;</button>
          <button onClick={onNext} className="nav-button next-button">&#10095;</button>
        </div>
      </div>
    );
  };
export default ImageGallery;
