import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='container'>
            <div className='row vh-100 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                    <h1>
                        Not Found <b>404 Error</b>
                    </h1>
                    <Link to='/home'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
