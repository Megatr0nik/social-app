
import { _BASE_URL } from "../../constant/variable.js";

import './gallery.css';

const Gallery = ({ gallery, id, setGallery }) => {

    const onGallery = () => {
        // setGallery(!gallery);
    }
    const Rend = gallery.map((item, i) => {
        return (
            <img
                key={`g${i}`}
                src={`${_BASE_URL}user/${id}/gallery/${item}`}
                alt="gallery_image"
                className="img-item"
                width='200'
                height='200'
            />
        );
    });

    return (
        <div className="gallery-container" >
            <div className="container-title">
                <h2 className="gallery-title">Галерея</h2>
                <div
                    className="close-button"
                    onClick={onGallery}
                >Закрити</div>
            </div>

            {Rend}
        </div>
    );
}

export default Gallery;