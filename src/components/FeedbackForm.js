import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const handleTextChange = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text != '' && text.trim().length<=10){
      setMessage('Text must be of at least 10 characters')
      setBtnDisabled(true)
    }else{
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2> How would you rate our service? </h2>
        { /* @ToDo Rating selelect radio box */ }

        <div className='input-group'>
          <input onChange={handleTextChange} type='text' 
          placeholder='Write a review'
          value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} >Submit</Button>
        </div>
        {message && <div className='messgage'>{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm