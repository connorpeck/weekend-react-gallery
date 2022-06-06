import { useState } from 'react';

function GalleryItem( props ){
    const [ show, setShow ] = useState( true );

    const toggleShow = () => {
        setShow (!show);
    }
    return (
        <div onClick={toggleShow} className="galleryItem">
            {
            show?
            <img  src={props.galleryItem.path}/>
            
            :
            <h2>{props.galleryItem.description}</h2>

            }
        </div>
    );
}

export default GalleryItem;