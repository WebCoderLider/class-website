import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Header.css'; // Make sure to create this CSS file

function Header() {
    const images = [
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCG51jZwV3UBP_tll_BahEzhgj7WmoRAP6w&s',
            text: 'First Image'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeZm6SCSJPw61lPljy9E9POO36A-ehgYWbg&s',
            text: 'Second Image'
        },
        {
            url: 'https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg',
            text: 'Third Image'
        },
        {
            url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18acd369-ea44-471b-aeeb-9e6e8e3ed9d5/dfq5se8-6ecc8525-2f95-40c3-bcaa-35a4bf150073.png/v1/fill/w_970,h_647,q_80,strp/8k_ultra_hd___wallpaper___theming_arts_by_themingarts_dfq5se8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQ3IiwicGF0aCI6IlwvZlwvMThhY2QzNjktZWE0NC00NzFiLWFlZWItOWU2ZThlM2VkOWQ1XC9kZnE1c2U4LTZlY2M4NTI1LTJmOTUtNDBjMy1iY2FhLTM1YTRiZjE1MDA3My5wbmciLCJ3aWR0aCI6Ijw9OTcwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PItFhbXavyfwYuUGn37p8v30fHVh9NflcbjtYh4z584',
            text: 'Fourth Image'
        }
    ];

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

    return (
        <div className="carousel-container" {...swipeHandlers}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image.url})` }}
                >
                    <div className="carousel-text">{image.text}</div>
                </div>
            ))}
            <div
                className="carousel-background"
                style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
            />
        </div>
    );
}

export default Header;
