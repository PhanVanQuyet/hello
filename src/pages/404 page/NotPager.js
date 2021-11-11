import {useHistory} from "react-router-dom";

const NotPager = () => {

    const history = useHistory()

    return (
        <>
            <span onClick={() => history.push('/')}>login pager</span>
        </>
    )
}

export default NotPager