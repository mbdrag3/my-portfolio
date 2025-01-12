import React, { useState } from 'react';
import image1 from '../../assets/me.jpg';  // Your original image
import image2 from '../../assets/M&Y.jpg';
import image3 from '../../assets/M&Y2.jpg';
import image4 from '../../assets/Me-BB.jpg';
import image5 from '../../assets/Me-Snowboard.jpg';
import '../../styles/style.css';

function AboutMe() {
    // State for the current image index, starting at 0 for the original image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image objects with src and alt text, including your original image as the first image
    const images = [
        { src: image2, alt: 'Michael and his wife at a library' },
        { src: image3, alt: 'Michael and wife on a cruise' },
        { src: image4, alt: 'Michael playing Baseball' },
        { src: image5, alt: 'Michael Snowboarding' },
        { src: image1, alt: 'Michael Drag and his Dog, Oliver' }
    ];

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next image
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="about-me-container">
            <div className="about-me-div">
                <div className="about-me-img-container">
                    <div className="about-me-img">
                        <img 
                            src={images[currentImageIndex].src} 
                            alt={images[currentImageIndex].alt}  // Use alt text from the array
                        />
                    </div>
                    {/* Carousel Controls - Arrows */}
                    <div className="carousel-controls">
                        <button className="carousel-arrow" onClick={goToPrevious}>&lt;</button>
                        <button className="carousel-arrow" onClick={goToNext}>&gt;</button>
                    </div>
                </div>
                <div className="about-me-text">
                    <h5>Who is Michael Drag?</h5>
                    <p>
                        I am a full stack developer with experience in HTML, CSS, JavaScript, Node.js, Express, React, SQL, NoSQL, and more. I completed an edX coding bootcamp that equipped me with the tools and problem-solving skills needed to tackle any challenge.
                    </p>
                    <p>
                        Outside of work, I enjoy music, sports, and snowboarding. I played youth sports throughout my formative years and credit that experience with teaching me how to be a good teammate and collaborate with others to work towards a common goal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
