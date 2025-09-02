import { InputText} from 'primereact/inputtext';
import { Slider } from 'primereact/slider';        
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
        
import {Controller} from "react-hook-form"

export const questionComponents = {
    "inputSlider":({title, form, inputName}) =>(
         <div  className='flex flex-col'>
            <h2 className='mb-4'>{title}</h2>
            <Controller
                name={inputName}
                control={form.control}
                render={({field})=> {
                    return <Slider
                        range
                        id={field.name}
                        name={field.name}
                        onChange={(e)=>{
                            field.onChange(e.value)
                        }}
                        value={field.value}
                    />
                }}
            />
        </div>
    ),
    "inputText": ({title, form}) =>(
        <div  className='flex flex-col items-start'>
            <h2 className='mb-4'>{title}</h2>
            <Controller
                name="jobTitle"
                control={form.control}
                render={({field})=> {
                    return <InputText
                        placeholder='Job Title'
                        id='jobTitle'
                        name={field.name}
                        onChange={field.onChange}
                        value={field.value}
                    />
                }}
            />
        </div>
    ),
    "inputRadio": ({ options, form, title}) => (
        <div>
            <h2 className='mb-4'>{title}</h2>
            {options.map((option, i)=>{
                return<div className='flex flex-row' key={option[i]}>
                    <Controller
                    name="creditCardType"
                    control={form.control}
                    render={({field})=> {
                        return <RadioButton
                        inputId={option}
                        name={field.name}
                        onChange={field.onChange}
                        value={option}
                        />
                    }}
                />
                <label className='ml-2' htmlFor={option}>{option}</label>
                </div>
                 
            })}
        </div>
    ),
    "contactInfo": ({title, form, contactFields }) => (
  <div>
    <h2 className='mb-4'>{title}</h2>
    {contactFields.map((input) => {
      if (input.type === "inputNumber") {
        return (
            <div className="flex flex-col items-start" key={input.inputName}>
                <Controller
                name={input.inputName}
                control={form.control}
                render={({ field }) => (
                    <InputNumber
                    placeholder={input.title}
                    id={field.name}
                    name={field.name}
                    onChange={(e)=>{
                        field.onChange(e.value)
                    }}
                    value={field.value}
                    />
                )}
                />
          </div>
        )
      } else {
        return (
            <div className="flex flex-col items-start" key={input.inputName}>
                <Controller
                name={input.inputName}
                control={form.control}
                render={({ field }) => (
                    <InputText
                    placeholder={input.title}
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    value={field.value}
                    />
                )}
                />
            </div>
        );
      }
    })}
  </div>
)
}
