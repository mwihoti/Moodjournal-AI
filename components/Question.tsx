'use client'
import { askQuestion } from "@/utils/api"
import { useState } from "react"

const Question = ( ) => {

    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState()

    const onChange = (e) =>{
        setValue(e.target.value)
         }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const answer = await askQuestion(value)
        setResponse(answer)
        setValue('')
        setLoading(false)
    }

    return <div>
        <form  disabled={loading} onSubmit={handleSubmit}>
            <input value={value} onChange={onChange}
            className="border-black/20 px-4 py-2 text-lg rounded-lg "
            type="text" placeholder="Ask a question"/>

            <button  disabled={loading}
            type="submit" className="bg-blue-400 rounded-lg 
            px-4 py-2 text-lg">Ask</button>
        </form>
        { loading && <div> ...loading </div>}
        { response && <div> {response} </div>}
    </div>
}
export default Question