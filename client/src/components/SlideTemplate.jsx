import React from 'react'
import { questionComponents } from '../questionComponents'

const SlideTemplate = ({question, form}) => {
    const Question = questionComponents[question.type]
  return (
      <div className="">
      <Question {...question} form={form} />
    </div>
  )
}

export default SlideTemplate