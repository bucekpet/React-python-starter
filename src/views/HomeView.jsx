import { useEffect, useState } from "react"

export function HomeView() {
    const [text, setText] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/text')
            .then(response => response.json())
            .then(data => setText(data.data))
            .catch(error => alert(`Error communicating with backend: ${error}`))
    })

    return (
        <>
            <h1 className="text-blue-grad">Welcome</h1>

            <h3 className="text-blue">{text}</h3>
        </>
    )
}