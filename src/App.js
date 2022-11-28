import './App.css';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure that you want to delete it?')){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  } 
  return (
    <FeedbackProvider>
    <Router>
    <Header text = "Feedback UI" />
    <div className='container'>
      <Routes>
      <Route exact path='/' 
        element={
        <>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats />
        <FeedbackList handleDelete={deleteFeedback}/>
        </>
      }>
      
      </Route>
      <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
    <AboutIconLink />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
