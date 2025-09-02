import React, {useState} from 'react'
import questions from "../questions.json"
import SlideTemplate from '../components/SlideTemplate'
import {useForm} from "react-hook-form"

const SlideContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
     const { control, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      creditCardType: "",
      education: "",
      employed: "",
      jobTitle: "",
      monthlyIncome: [
            20,
            80
        ],    
      methodOfContact: "", 
    },
  })
  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))} action="submit">
            <SlideTemplate question={questions[currentIndex]} form={{control, handleSubmit, getValues, setValue, watch}}/>
            <button onClick={()=> setCurrentIndex(currentIndex + 1)}>Next</button>
            <button type='submit'>Check Values</button>
        </form>
    </div>
  )
}

export default SlideContainer