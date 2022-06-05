import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>GalleryList</h2>
            {props.imageArray.map(galleryItems =>  (<GalleryItem  galleryItems = {galleryItems}/>))}
            
        </div>
    );
}

export default GalleryList;