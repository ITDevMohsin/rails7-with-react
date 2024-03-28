import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import QuestionList from "./QuestionList";

class Welcome extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World! Welcome to Rails 7 with React JS</h1>
                <p className="lead">This is the first lecture and there are many more coming</p>
                <QuestionList/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
        <Welcome/>
    </React.StrictMode>
)
export default Welcome;