import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { urlFor, clientRead } from '../../client';

import './Slideshow.scss'; // Import the SCSS file

function Slideshow() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fetch the photos from Sanity
        const query = '*[_type == "photo"]';
        const fetchedPhotos = await clientRead.fetch(query);

        // Update the state with the fetched photos
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error('Error fetching photos from Sanity:', error);
      }
    };

    fetchPhotos();
  }, []);


  const images = photos.map((photo) => ({
    original: urlFor(photo.image).url(), // Replace with the actual field name from Sanity schema
    thumbnail: urlFor(photo.image).url(), // Replace with the actual field name from Sanity schema
    originalAlt: photo.caption, // Replace with the actual field name from Sanity schema
    description: photo.description, // Replace with the actual field name from Sanity schema

    
  }));

  const renderFullscreenButton = () => null;
  const renderPlayPauseButton = () => null;

  return (
    <div>
      {images.length > 0 && (
        <ImageGallery
          items={images}
          renderFullscreenButton={renderFullscreenButton}
          renderPlayPauseButton={renderPlayPauseButton}
        />
      )}
    </div>
  );
}

export default Slideshow;

