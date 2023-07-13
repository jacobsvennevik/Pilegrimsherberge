import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../../client';
import { Carousel } from 'react-bootstrap';




import './SlideshowOld.scss';

function SlideshowOld() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fetch the photos from Sanity
        const query = '*[_type == "photo"]';
        const fetchedPhotos = await client.fetch(query);

        // Update the state with the fetched photos
        setPhotos(fetchedPhotos);
        console.log(photos)
      } catch (error) {
        console.error('Error fetching photos from Sanity:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="slide-container">
    <section>
      <Carousel>
        {photos.map((photo) => (
          <Carousel.Item key={photo._id}>
            <img
              className="d-block w-100"
              src={urlFor(photo.image).url()}
              alt={photo.caption}
            />
            <div className="carousel-description">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
    </div>
    

  
  );
}

export default SlideshowOld;
