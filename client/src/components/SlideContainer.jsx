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
    <div className='flex flex-row align-center w-screen h-screen'>
      <div className='flex justify-center align-center w-1/2'>
        <h1>left side</h1>
      </div>
    <div className='flex justify-center items-center w-1/2'>
        <form className='w-1/2' onSubmit={handleSubmit((data) => console.log(data))} action="submit">
            <SlideTemplate question={questions[currentIndex]} form={{control, handleSubmit, getValues, setValue, watch}}/>
            <div className='flex flex-col gap-3'>
              <button className='text-white bg-blue-900' onClick={()=> setCurrentIndex(currentIndex + 1)}>Next</button>
              <button className='text-white bg-blue-900' type='submit'>Check Values</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SlideContainer