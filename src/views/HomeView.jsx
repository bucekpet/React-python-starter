import { useEffect, useState } from "react"

export function HomeView() {
    const [text, setText] = useState('')

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/text')
            .then(response => response.json())
            .then(data => setText(data.data))
            .catch(error => alert(`Error communicating with backend: ${error}`))
    })

    return (
        <>
            <h1><strong className="text-blue-grad" style={{ fontSize: '6vh' }}>Hello World!</strong> 👋</h1>
            <hr />
            <article>
                <h3 className="text-blue">{text}</h3>
            </article>
        </>
    )
}