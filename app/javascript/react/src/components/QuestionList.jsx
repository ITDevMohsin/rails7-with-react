import * as React from "react";
import {useState, useEffect} from "react";
import * as ReactDOM from 'react-dom';
import QuestionDetail from "./QuestionDetail";
import EmptyQuestionMessage from "./EmptyQuestionMessage";

const QuestionList = () => {

    const questionsTags = [
        {label: 'All', value: 0},
        {label: 'Ruby', value: 1},
        {label: 'Rails', value: 2},
        {label: 'React', value: 3},
        {label: 'Bootstrap', value: 4},
        {label: 'Javascript', value: 5}
    ]

    const [questionsList, setQuestionsList] = useState([])
    const questionsURL = 'http://localhost:3000/api/v1/questions'
    const [selectedOption, setSelectedOption] = useState(questionsTags[0].value)

    const fetchQuestionList = () => {
        fetch(questionsURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
            })
    }

    useEffect(() => {
        fetchQuestionList()
    }, [])

    const updateSelectedItem = (event) => {
        setQuestionsList([])
        setSelectedOption(event.target.value)
        fetch(questionsURL + `?tags=${questionsTags[event.target.value].label}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
            })
    }

    return (
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <p className="lead fw-bold">Filter Questions by Tags</p>
                <select className="form-select form-select-lg" value={selectedOption}
                        onChange={event => updateSelectedItem(event)}>
                    {questionsTags.map(tag => (
                        <option key={tag.value} value={tag.value}>{tag.label}</option>
                    ))}
                </select>
                {
                    questionsList.length > 0 ?
                        questionsList.map((question) =>
                            <QuestionDetail question={question} key={question.id}/>
                        ) : <EmptyQuestionMessage tagname={questionsTags[selectedOption].label}/>
                }
            </div>
        </div>
    )
}

export default QuestionList