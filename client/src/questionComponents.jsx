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
    "inputText": ({title, form, inputName}) =>(
        <div  className='flex flex-col items-start'>
            <h2 className='mb-2'>{title}</h2>
            <Controller
                name={inputName}
                control={form.control}
                render={({field})=> {
                    return <InputText
                        className='w-full'
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
    "inputRadio": ({ options, form, title, inputName}) => (
        <div>
            <h2 className='mb-2'>{title}</h2>
            {options.map((option, i)=>{
                return<div className='flex flex-row' key={option[i]}>
                    <Controller
                    name={inputName}
                    control={form.control}
                    render={({field})=> {
                        return <RadioButton
                        inputId={option}
                        name={field.name}
                        onChange={field.onChange}
                        value={option}
                        checked={option == field.value}
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
    <h2 className='mb-4 text-3xl'>{title}</h2>
    {contactFields.map((input) => {
      if (input.type === "inputNumber") {
        return (
            <div className="flex flex-col items-start mb-4" key={input.inputName}>
                <Controller
                name={input.inputName}
                control={form.control}
                render={({ field }) => (
                    <InputNumber
                    className='w-full'
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
            <div className="flex flex-col items-start mb-4" key={input.inputName}>
                <Controller
                name={input.inputName}
                control={form.control}
                render={({ field }) => (
                    <InputText
                    className='w-full bg-red'
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
