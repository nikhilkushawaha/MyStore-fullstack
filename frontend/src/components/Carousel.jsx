import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const [images, setImages] = useState({
    suitI: '',
    jeansI: '',
    tshirtI: '',
    shoesI: '',
    jacketI: '',
    glassesI: '',
  });

  // Unsplash API
  const UNSPLASH_ACCESS_KEY = "2sMGz6dceM4oBfG8PtgWXkzn3eCk-R1ZZ_mPQC914iY";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const suits = await fetchRandomImage('suit');
        const jeans = await fetchRandomImage('trouser');
        const tshirt = await fetchRandomImage('men tshirt');
        const shoes = await fetchRandomImage('men shoes');
        const glasses = await fetchRandomImage('sunglass');
        const jacket = await fetchRandomImage('jeans jacket');

        setImages({
          suitI: suits,
          jeansI: jeans,
          tshirtI: tshirt,
          shoesI: shoes,
          jacketI: jacket,
          glassesI: glasses,
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const fetchRandomImage = async (query) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.urls.regular; // Get the URL of the random image
  };

  return (
    <div className="carousel-container mx-auto max-w-4xl">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        {/* Suit */}
        <div>
          <img
            src={images.suitI}
            alt="Suit"
            className="w-full h-64 object-cover"
          />
          <p className="legend">Men's Suit</p>
        </div>

        {/* jeans */}
        <div>
          <img
            src={images.jeansI}
            alt="Jeans"
            className="w-full h-64 object-cover"
          />
          <p className="legend">Jeans</p>
        </div>

        {/* tshirt */}
        <div>
          <img
            src={images.tshirtI}
            alt="TShirt"
            className="w-full h-64 object-cover"
          />
          <p className="legend">TShirt</p>
        </div>

        {/* shoes */}
        <div>
          <img
            src={images.shoesI}
            alt="TShirt"
            className="w-full h-64 object-cover"
          />
          <p className="legend">Shoes</p>
        </div>

        {/* jacket */}
        <div>
          <img
            src={images.jacketI}
            alt="Jacket"
            className="w-full h-64 object-cover"
          />
          <p className="legend">Jacket</p>
        </div>

        {/* glasses */}
        <div>
          <img
            src={images.glassesI}
            alt="Sunglasses"
            className="w-full h-64 object-cover"
          />
          <p className="legend">Sunglasses</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;