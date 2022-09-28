import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type postsType = {
    "userId"?: number,
    "id"?: number,
    "title"?: string,
    "body"?: string,
}

function App(props: postsType) {

    const [objFormRequestArr, setObjFormRequestArr] = useState([])


    const getDeleteRequestHandler = () => {

/*        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setObjFormRequestArr(json))*/

        setObjFormRequestArr([])

    }


    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setObjFormRequestArr(json))
        },
        []
    )

    return (
        <div className="App">
            <Button nickName={'CleanPage'} Callback={getDeleteRequestHandler}/>
            <p></p>
            <ul>
                {objFormRequestArr.map((el: postsType) => {
                    return (
                        <li>
                            <span>{el.id + ' - '}</span>
                            <span>{el.userId + ' - '}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
