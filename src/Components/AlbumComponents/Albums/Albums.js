import {useEffect, useState} from "react";

import {getAlbums} from "../../../Services/axios.api.service";

import Album from "../Album/Album";

export default function Albums() {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums(value.data))
    }, [])

    return (
        <div>
            {
                albums.map(value => <Album key={value.id} value={value}/>)
            }
        </div>
    )
}