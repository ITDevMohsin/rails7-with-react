import * as React from "react";
import * as ReactDOM from 'react-dom';

const Loader = () => {
    return (
        <div>
            <div className="mt-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader;