import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Header.css'; // Make sure to create this CSS file
import axios from 'axios';

function Header() {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
        onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        axios.get('https://api.11school11d.uz/carusel')
            .then(res => setImages(res.data))
            .catch(err => console.log(err));
    }, []);

    if (images.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="carousel-container" {...swipeHandlers}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(https://api.11school11d.uz${image.image_url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                >
                    <div className="carousel-text">{image.title}</div>
                </div>
            ))}
            <div
                className="carousel-background"
                style={{ backgroundImage: `url(https://api.11school11d.uz${images[currentImageIndex].image_url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            />
        </div>
    );
}

export default Header;
