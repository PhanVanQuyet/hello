import {useEffect, useState} from "react";

const Test = () => {

    const [feeds, setFeeds] = useState(null)

    useEffect(() => {
        fetch('https://picsum.photos/v2/list').then(res => res.json()).then(result => setFeeds(result))
    },[])
    console.log(feeds)

    return (
        <>
            rrr
        </>
    )
}

export default Test