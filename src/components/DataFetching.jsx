import React, { useState, useEffect } from 'react'

import axios from 'axios'

function DataFetching() {

    const [albums, setalbums] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(res => {
                console.log(res)
                setalbums(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (<div>
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    {album.title}
                </li>))}

        </ul>
    </div>)}

export default DataFetching