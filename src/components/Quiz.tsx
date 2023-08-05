import React, { useState } from "react";
import { questions } from "./question";


export function Quiz() {
    const [correctAnwsers,setCorrectAnwser] = useState(0)
    const [precentage, setPrecentage] = useState(0)
    const [number, setNumber] = useState(0)
    const [step,setStep]= useState(1)
    const question = questions[number]

    const onClickAnwser = (index: number) => {
        if (number != questions.length) {
            setNumber(prev => prev + 1)
            setStep(prev => prev + 1)
        }
        
        if (index == question.correctAnwser) {
            setCorrectAnwser(prev => prev + 1)
        }
        console.log(number, index, precentage)
        setPrecentage(prev=> Math.round((step / questions.length) * 100)) 
    }

    return (
        <>
            {number != questions.length && 
            <>
                
                <div className="progressBar" style={{width:precentage +'%'}}></div>
                <h1>Вопрос номер - {number} {question.title}</h1>
                <ul>
                    {question.anwsers.map((text, index) => (
                        <li onClick={()=>{onClickAnwser(index)}} key={index}>
                            {text}
                        </li>
                    ))
                    }
                </ul>
            </>
            }
            {number == questions.length &&
            <>
                <div className="progressBar" style={{width:precentage +'%'}}></div>
                <h1>Вы прошли на {correctAnwsers } баллов из {questions.length}</h1>
            </>
            }
        </>
    )
}