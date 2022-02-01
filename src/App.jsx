// Global state is the data that is shared between all the components within a React application. When the state is changed, or let’s say a filter is added, the components re-render accordingly. https://endertech.com/blog/using-reacts-context-api-for-global-state-management

import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text="16. Card Component & Conditional Styling" />
      <div className="container">
        <FeedbackList feedbackPropValue={feedback} />
        <Card isReversed={true}>
          Hello Word
        </Card>
      </div>
    </>
  )
}

export default App
