import * as React from "react";
import * as ReactDOM from 'react-dom';

class QuestionDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
            dislikeCount: 0
        };
        this.incrementLikeCounter = this.incrementLikeCounter.bind(this)
        this.decrementLikeCounter = this.decrementLikeCounter.bind(this)
    }

    incrementLikeCounter() {
        this.setState(prevState => ({
            likeCount: prevState.likeCount + 1
        }));
    }

    decrementLikeCounter() {
        this.setState(prevState => ({
            likeCount: prevState.likeCount - 1
        }));
    }

    render() {
        return (
            <div className="card rounded-0 mt-3">
                <div className="card-body">
                    <h3 className="card-title">{this.props.question.title}</h3>
                    <p className="lead">
                        <span className="badge bg-primary">{this.props.question.tag}</span>
                    </p>
                    <button type="button" className="btn btn-primary position-relative"
                            onClick={this.incrementLikeCounter}>
                        Like
                        {this.state.likeCount > 0 ?
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           {this.state.likeCount}
                        </span> : ''}
                    </button>
                    <button className="btn btn-primary mt-1"
                            onClick={this.decrementLikeCounter}>Dislike
                    </button>
                </div>
            </div>
        )
    }
}

export default QuestionDetail