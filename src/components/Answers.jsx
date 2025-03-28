import { useState } from "react"

export default function Answers({answers}) {
  const [ans, setAns] = useState(answers)

  console.log("ans: ", ans.map(ans => {return ans}))
  
  return (
    <div className="question-box">
      <ul className="answer-list">
        {/* {answers.map((answer) => {
        return <li><a href="#" className="answer">{answer}</a></li>
        })} */}
        <li><a href="#" className="answer">{ans}</a></li>

      </ul>
    </div>
  )
}1