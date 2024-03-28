import * as React from "react";
import * as ReactDOM from 'react-dom';
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
    const questionList = [
        {
            id: 1,
            title: 'How to check if a key is present in a Hash?',
            tag: 'Ruby'
        },
        {
            id: 2,
            title: 'What is the difference between string and symbol?',
            tag: 'Ruby'
        },
        {
            id: 3,
            title: 'What happened if you add two same keys in Hash?',
            tag: 'Ruby'
        },
        {
            id: 4,
            title: 'How to delete a given key from Hash?',
            tag: 'Ruby'
        },
        {
            id: 5,
            title: 'How to check if 2 hashes are identical?',
            tag: 'Ruby'
        },
        {
            id: 6,
            title: 'How to combine 2 hashes in Ruby?',
            tag: 'Ruby'
        },
        {
            id: 7,
            title: 'How to get unique keys from 2 hashes in Ruby?',
            tag: 'Ruby'
        },
        {
            id: 8,
            title: 'What does the has_key?, key?, member? and include? methods in a Hash?',
            tag: 'Ruby'
        },
        {
            id: 9,
            title: 'What are blocks in Ruby?',
            tag: 'Ruby'
        },
        {
            id: 10,
            title: 'Does the order of keys matter to compare 2 hashes in Ruby?',
            tag: 'Ruby'
        }
    ]

    return (
        <div className="row">
            <div className="col-lg-10 mx-auto">
                {questionList.map((question) =>
                    <QuestionDetail question={question} key={question.id}/>
                )}
            </div>
        </div>
    )
}

export default QuestionList