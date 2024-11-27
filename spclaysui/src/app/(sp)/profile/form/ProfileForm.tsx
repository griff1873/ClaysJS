"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Form} from "@/components/ui/form"
import {Button} from "@/components/ui/button"
import {InputWithLabel} from "@/components/inputs/InputWithLabel"
import { insertProfileSchema, type insertProfileSchemaType, type selectProfileSchemaType } from "@/zod-schemas/profiles"
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types"


type Props = {
    profile?: selectProfileSchemaType,
    user: KindeUser<Record<string, any>>
}

export default function CustomerForm({ profile, user }: Props) {    
    
    console.log(user);
    const defaultValues: insertProfileSchemaType = {
        ProfileID: profile?.ProfileID || 0,
        UserID: user.id,
        FirstName: profile?.FirstName || user?.given_name || '',
        LastName: profile?.LastName || user?.family_name || '',
        PhoneNumber: profile?.PhoneNumber || user?.phone_number || '',
    }
    const form = useForm<insertProfileSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertProfileSchema),
        defaultValues
    })
    async function submitForm(data: insertProfileSchemaType){
        console.log(data)
    }
    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">{profile?.ProfileID ? "Edit" : "Create"} User Profile</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(submitForm)}
                        className="flex flex-col md:flex-row gap-4 md-gap-8"
                    >
                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            <InputWithLabel<insertProfileSchemaType>
                                fieldTitle="First Name"
                                nameInSchema="FirstName"
                             />
                            
                            <InputWithLabel
                                fieldTitle="Phone Number"
                                nameInSchema="PhoneNumber"
                                type="tel"
                            />
                        </div> 
                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            <InputWithLabel<insertProfileSchemaType>
                                fieldTitle="Last Name"
                                nameInSchema="LastName"
                            />
                            <Button type="submit" className="w-full" variant="default">Save</Button>
                            <Button type="button" className="w-full" variant="destructive" onClick={()=>form.reset(defaultValues)}>Reset</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
