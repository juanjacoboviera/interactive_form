import { InputText} from 'primereact/inputtext';
import { Slider } from 'primereact/slider';        
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
        
import {Controller} from "react-hook-form"

export const questionComponents = {
    "inputSlider":({title, form, inputName, LayoutContainer}) =>(
        <>
            <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
            <LayoutContainer>
                <Controller
                    name={inputName}
                    control={form.control}
                    render={({field})=> {
                        return (
                        <>
                        <p className='text-[#3d3d3d] mb-2'>{`$${field.value.join("-")}`}</p>
                        <Slider
                        range
                        id={field.name}
                        name={field.name}
                        onChange={(e)=>{
                            field.onChange(e.value)
                        }}
                        value={field.value}
                        />
                        </>
                        )
                    }}
                />
            </LayoutContainer>
        </>
    ),
    "inputText": ({title, form, inputName, LayoutContainer}) =>(
        <>
            <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
            <LayoutContainer>
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
            </LayoutContainer>
       </>   
    ),
    "inputRadio": ({ options, form, title, inputName, LayoutContainer}) => (
        <div>
            <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
            <LayoutContainer>
                {options.map((option, i)=>{
                    return<div className={`flex ${options.length > 2? "flex-1" : "0"} items-center bg-white outline-solid mb-4 rounded-lg p-5`} key={option[i]}>
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
                    <label className='ml-2 text-[#3d3d3d]' htmlFor={option}>{option}</label>
                    </div>
                    
                })}
            </LayoutContainer>
        </div>
    ),
    "contactInfo": ({title, form, contactFields, LayoutContainer }) => (
    <>
        <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
        <LayoutContainer>
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
                            className='w-full'
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
        </LayoutContainer>
    </>
)
}
