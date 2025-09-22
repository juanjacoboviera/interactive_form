import React from 'react'
import { questionComponents } from '../questionComponents'

const LayoutContainer = ({children})=>{
  return(
      <div className='min-h-[280px] flex flex-col justify-center'>
        {children}
      </div>
  )
}
const SlideTemplate = ({question, form}) => {
    const Question = questionComponents[question.type]
  return (
      <div className="">
      <Question {...question} form={form} LayoutContainer={LayoutContainer} />
    </div>
  )
}

export default SlideTemplate