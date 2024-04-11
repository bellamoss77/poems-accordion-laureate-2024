import { useEffect } from 'react';
import './imageGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



const Lightbox = ({ images, selectedImage, onClose, onNavigate }) => {
    const lightboxImages = [
        {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_lightbox/Grace_von_Elten-lightbox.png?raw=true',
            title: 'Finding My Place: A Self Portrait',
            artist: 'Grace von Elten'
        }, {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_lightbox/Kiana_Allen-lightbox.png?raw=true',
            title: 'Where Eye Belong',
            artist: 'Kiana Allen'
        }, {
            src: 'https://github.com/bellamoss77/poems-accordion-laureate-2024/blob/main/public/images_lightbox/Catherine_Selfridge-lightbox.png?raw=true',
            title: 'Pomegranate Peels',
            artist: 'Catherine Selfridge'
        }

    ]
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight') onNavigate((selectedImage + 1) % lightboxImages.length);
            else if (e.key === 'ArrowLeft') onNavigate((selectedImage - 1 + lightboxImages.length) % lightboxImages.length);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage, lightboxImages.length, onClose, onNavigate]);

    return (
        <div className='lightbox-backdrop' onClick={onClose}>
            <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
                <img
                 src={lightboxImages[selectedImage].src}
                 alt={`${lightboxImages[selectedImage].title} by ${lightboxImages[selectedImage].artist}`}
                 className='lightbox-image'
                />
                <div className='lightbox-caption'>
                    <strong>{images[selectedImage].title}</strong> by {images[selectedImage].artist}
                </div>
                <button onClick={onClose} className='lightbox-close'>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button onClick={() => onNavigate((selectedImage - 1 + lightboxImages.length) % lightboxImages.length)} className='lightbox-prev'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button onClick={() => onNavigate((selectedImage + 1) % lightboxImages.length)} className='lightbox-next'>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    )
}

export default Lightbox;