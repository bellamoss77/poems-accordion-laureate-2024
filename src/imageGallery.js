import { useState } from 'react';
import Lightbox from './Lightbox';
import './imageGallery.css';

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const images = [
        {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_gallery/Grace_von_Elten-square.png?raw=true',
            title: 'Finding My Place: A Self Portrait',
            artist: 'Grace von Elten'
        }, {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_gallery/Kiana_Allen-square.png?raw=true',
            title: 'Where Eye Belong',
            artist: 'Kiana Allen'
        }, {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_gallery/Catherine_Selfridge-square.png?raw=true',
            title: 'Pomegranate Peels',
            artist: 'Catherine Selfridge'
        }
    ];

    const openLightbox = (imageIndex) => {
        setSelectedImage(imageIndex);
    };

    return (
        <div className='image-gallery'>
            {images.map((image, index) => (
                <img
                 key={image.src}
                 src={image.src}
                 alt={`${image.title} by ${image.artist}`}
                 onClick={() => openLightbox(index)}
                 className='gallery-preview-img'
                />
            ))}
            {selectedImage !== null && (
                <Lightbox
                 images={images}
                 selectedImage={selectedImage}
                 onClose={() => setSelectedImage(null)}
                 onNavigate={(newIndex) => setSelectedImage(newIndex)}
                />
            )}
        </div>
    );
};

export default ImageGallery;