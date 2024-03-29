import * as React from "react";
import * as ReactDOM from 'react-dom';

class QuestionDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likeCount: this.props.question.likes_count,
            dislikeCount: this.props.question.dislikes_count
        };
        this.incrementLikeCounter = this.incrementLikeCounter.bind(this)
        this.decrementLikeCounter = this.decrementLikeCounter.bind(this)
    }

    incrementLikeCounter = () => {
        this.setState(prevState => ({
            likeCount: prevState.likeCount + 1
        }));
        this.updateQuestionCounter({count_for: 'like'})
    }

    decrementLikeCounter = () => {
        this.setState(prevState => ({
            dislikeCount: prevState.dislikeCount + 1
        }));
        this.updateQuestionCounter({count_for: 'dislike'})
    }

    updateQuestionCounter = (data) => {
        fetch(`http://localhost:3000/api/v1/questions/${this.props.question.id}/update_counter`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(`%c${JSON.stringify(data)}`, 'color: blue;');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    likeBadge = (likeCount) => {
        return likeCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {likeCount}
        </span>
        ) : null;
    }

    dislikeCount(dislikeCount) {
        return dislikeCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {dislikeCount}
        </span>
        ) : null;
    }

    render() {
        return (
            <div className="card rounded-0 mt-3">
                <div className="card-body">
                    <h3 className="card-title">{this.props.question.title}</h3>
                    <p className="lead">
                        <span className="badge bg-primary">{this.props.question.tag}</span>
                    </p>
                    <button type="button" className="btn btn-primary position-relative" style={{marginRight: 1 + 'em'}}
                            onClick={this.incrementLikeCounter}>
                        Like
                        {this.likeBadge(this.state.likeCount)}
                    </button>
                    <button type="button" className="btn btn-primary position-relative"
                            onClick={this.decrementLikeCounter}>
                        Dislike
                        {this.dislikeCount(this.state.dislikeCount)}
                    </button>
                </div>
            </div>
        )
    }
}

export default QuestionDetail;
