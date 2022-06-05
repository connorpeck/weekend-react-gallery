import { useState } from 'react';

function GalleryItem( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>GalleryItem</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default GalleryItem;