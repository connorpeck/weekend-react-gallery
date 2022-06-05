import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>Body</h2>
            <p>Props: { JSON.stringify( props ) }</p>
            < GalleryList />
        </div>
    );
}

export default Body;