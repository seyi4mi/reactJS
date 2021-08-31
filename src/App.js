//Step 1 - import React
import React, { useState } from "react"
import Tweet from "./Tweet"

// Step 2 - Create a component
function App() {
	const [isRed, setRed] = useState(false)
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
		setRed(!isRed)
	}

	return (
		<div className="app">
			<h1 className={isRed ? "red" : ""}>Change my colour</h1>
			<button onClick={increment}>Increment</button>
			<h1>{count}</h1>
		</div>
	)
}
// Step 2-Export it
export default App // to export this entire file
