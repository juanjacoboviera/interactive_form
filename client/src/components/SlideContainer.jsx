import React, {useState, useEffect} from 'react'
import questions from "../questions.json"
import SlideTemplate from '../components/SlideTemplate'
import {useForm} from "react-hook-form"
import Stepper from './Stepper'

const SlideContainer = () => {
    const [hideContainer, setHideContainer] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTriggered, setTriggered] = useState(false);
     const { control, handleSubmit, getValues, setValue, watch, trigger, formState: {errors}, clearErrors } = useForm({
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

  const formValues = watch();

const handleNext = async () => {
  const currentFields = currentIndex == 0 ? questions[0].contactFields.map(field => field.inputName ) : [questions[currentIndex].inputName];

  const isValid = await trigger(currentFields);
  if (isValid) {
    setCurrentIndex((prev) => prev + 1);
  }
  
};

useEffect(() => {
  const currentFields = currentIndex === 0
    ? questions[0].contactFields.map(field => field.inputName)
    : [questions[currentIndex].inputName];

  currentFields.forEach(field => {
    if (formValues[field] !== "" && errors[field]) {
      clearErrors(field);
    }
  });
}, [formValues, currentIndex, errors, clearErrors]);

  return (
    <div className='flex flex-row align-center w-screen h-screen '>
      <div className={`${hideContainer == true ? "left-container-shrink " : "" }flex justify-center align-center left-container bg-blue-900`}>
        <h1>left side</h1>
      </div>
    <div className={`${hideContainer == true ? "right-container-expand  " : ""} flex flex-col justify-center relative items-center right-container bg-[#f4f4f4]`}>
        <Stepper currentIndex={currentIndex} questions={questions} />
        <form className='w-1/2' onSubmit={handleSubmit((data) => console.log(data))} action="submit">
            <SlideTemplate question={questions[currentIndex]} form={{control, handleSubmit, getValues, setValue, watch, errors, clearErrors}}/>
            <div className='flex flex-col gap-3'>
              <button type='button' className='text-white bg-blue-900' onClick={handleNext}>Next</button>
              <button className='text-white bg-blue-900' type='submit'>Check Values</button>
              <button className='text-white bg-blue-900 w-28 h-28 rounded-full absolute top-[40%] -left-15  ' onClick={()=> setHideContainer(prev => !prev)} type='button'>H</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SlideContainer