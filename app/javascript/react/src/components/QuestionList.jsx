import * as React from "react";
import {useState, useEffect} from "react";
import * as ReactDOM from 'react-dom';
import QuestionDetail from "./QuestionDetail";
import EmptyQuestionMessage from "./EmptyQuestionMessage";
import NewQuestion from "./NewQuestion";
import Loader from "./Loader";

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
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [isShowLoader, setIsShowLoader] = useState(true)

    const fetchQuestionList = () => {
        // setIsShowLoader(false)
        fetch(questionsURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
                data.length === 0 && setIsShowAlert(true)
            })
    }

    useEffect(() => {
        fetchQuestionList()
    }, [])

    const updateSelectedItem = (event) => {
        setIsShowLoader(true)
        setIsShowAlert(false)
        setQuestionsList([])
        setSelectedOption(event.target.value)
        fetch(questionsURL + `?tags=${questionsTags[event.target.value].label}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
                if (data.length === 0) {
                    setIsShowAlert(true)
                    setIsShowLoader(false)
                }
            })
    }

    return (
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <p className="lead fw-bold">Filter Questions by Tags</p>
                <button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                    Contribute your question
                </button>
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
                        ) : <Loader isShowLoader={isShowLoader}/>
                }
                {isShowAlert && <EmptyQuestionMessage tagname={questionsTags[selectedOption].label}/>}
            </div>
            <NewQuestion/>
        </div>
    )
}

export default QuestionList;
