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
                    rules={{
                        required: { value: true, message: "This field is required" },
                        }}
                    name={inputName}
                    control={form.control}
                    render={({field})=> {
                        return (
                        <>
                        <p className='text-[#3d3d3d] mb-2'>{`$${field.value.join("-")}`}</p>
                        <Slider
                        {...field}
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
            {form.errors && <small className='text-[#c53d3d]'>{form.errors[inputName]?.message}</small>}
            
        </>
    ),
    "inputText": ({title, form, inputName, LayoutContainer}) =>(
        <>
            <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
            <LayoutContainer>
                <Controller
                    rules={{
                        required: { value: true, message: "This field is required" },
                        minLength: { value: 3, message: "Must be at least 3 characters" },
                        maxLength: { value: 10, message: "Must be at most 10 characters" }
                        }}
                    name={inputName}
                    control={form.control}
                    render={({field})=> {
                        return <InputText
                            {...field}
                            className='w-full'
                            placeholder='Job Title'
                            id={field.name}
                            name={field.name}
                            onChange={field.onChange}
                            value={field.value}
                        />
                    }}
                />
            </LayoutContainer>
            {form.errors && <small className='text-[#c53d3d]'>{form.errors[inputName]?.message}</small>}

       </>   
    ),
    "inputRadio": ({ options, form, title, inputName, LayoutContainer}) => (
        <div>
            <h2 className='mb-4 text-3xl text-[#3d3d3d]'>{title}</h2>
            <LayoutContainer>
                {options.map((option, i)=>{
                    return<div className={`flex ${options.length > 2? "flex-1" : "0"} items-center bg-white outline-solid mb-4 rounded-lg p-5`} key={option[i]}>
                        <Controller
                        rules={{
                            required: { value: true, message: "You must choose an option" },
                        }}
                        name={inputName}
                        control={form.control}
                        render={({field})=> {
                            return <RadioButton
                            {...field}
                            inputId={option}
                            name={field.name}
                            onChange={(e)=>{
                                field.onChange(e)
                            }}
                            value={option}
                            checked={option == field.value}
                            />
                        }}
                    />
                    <label className='ml-2 text-[#3d3d3d]' htmlFor={option}>{option}</label>
                    </div>
                    
                })}
                {form.errors && <small className='text-[#c53d3d]'>{form.errors[inputName]?.message}</small>}
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
                    <div className="flex flex-col items-start mb-4" key={input.id}>
                        <Controller
                        rules={{
                            required: { value: true, message: "This field is required" },
                        }}
                        name={input.inputName}
                        control={form.control}
                        render={({ field }) => (
                            <InputNumber
                            {...field}
                            className='w-full'
                            placeholder={input.title}
                            id={input.id}
                            name={field.name}
                            onChange={(e)=>{
                                console.log(e)
                                field.onChange(e.value)
                            }}
                            value={field.value}
                            />
                        )}
                        />
                        {form.errors && <small className='text-[#c53d3d]'>{form.errors[input.inputName]?.message}</small>}
                    </div>
                )
            } else {
                return (
                    <div className="flex flex-col items-start mb-4" key={input.id}>
                        <Controller
                        rules={{
                            required: { value: true, message: "This field is required" },
                            minLength: { value: 3, message: "Must be at least 3 characters" },
                            maxLength: { value: 10, message: "Must be at most 10 characters" }
                        }}
                        name={input.inputName}
                        control={form.control}
                        render={({field }) => (
                            <InputText
                            {...field}
                            className='w-full'
                            placeholder={input.title}
                            id={input.id}
                            name={field.name}
                            onChange={(e)=>{
                                field.onChange(e)
                            }}
                            value={field.value}
                            />
                        )}
                        />
                    {form.errors && <small className='text-[#c53d3d]'>{form.errors[input.inputName]?.message}</small>}
                    </div>
                );
            }
            })}
        </LayoutContainer>
    </>
)
}
