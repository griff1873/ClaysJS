"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form} from "@/components/ui/form"
import {Button} from "@/components/ui/button"
import {InputWithLabel} from "@/components/inputs/InputWithLabel"
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel"
import { insertPresentationSchema, type insertPresentationSchemaType, type selectPresentationSchema } from "@/zod-schemas/presentations"
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types"


type Props = {
    presentation?: selectPresentationSchema,
}

export default async function PresentationForm({ presentation}: Props) {    
   
    const defaultValues: insertPresentationSchemaType = {
        PresentationID: presentation?.PresentationID || 0,
        PresentationName: presentation?.PresentationName || '',
        PresentationDescription: presentation?.PresentationDescription || '',
    }
    const form = useForm<insertPresentationSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertPresentationSchema),
        defaultValues
    })
    async function submitForm(data: insertPresentationSchemaType){
        console.log(data)
    }
    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">{presentation ? "Edit" : "Create"} Presentation</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(submitForm)}
                        className="grid grid-rows-3 grid-col-2 gap-4"
                    >  
                        <div className="">
                            <InputWithLabel<insertPresentationSchemaType>
                                fieldTitle="Presentation"
                                nameInSchema="PresentationName"
                             />

                        </div>
                        <div className="">
                            <Button type="submit" className="w-full" variant="default">Save</Button>
                            <Button type="button" className="w-full" variant="destructive" onClick={()=>form.reset(defaultValues)}>Reset</Button>
                        </div>
                        <div className="col-span-2 row-span-2">
                            <TextAreaWithLabel className="h-40"
                                fieldTitle="Description"
                                nameInSchema="PresentationDescription"
                                
                            />
                        </div>              

                    </form>
                </Form>
            </div>
        </div>
    )
}
