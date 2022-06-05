import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>GalleryList</h2>
            <p>Props: { JSON.stringify( props ) }</p>
            <GalleryItem />
        </div>
    );
}

export default GalleryList;