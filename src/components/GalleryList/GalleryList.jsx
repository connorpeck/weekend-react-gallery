import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div className='gallery'>
            
            {props.imageArray.map(image =>  (<GalleryItem  galleryItem = {image}/>))}
            
        </div>
    );
}

export default GalleryList;