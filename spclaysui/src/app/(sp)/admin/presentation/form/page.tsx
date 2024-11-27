
import { getPresentation} from "@/lib/queries/getPresentation";
import { BackButton } from "@/components/BackButton";
import PresentationForm from "@/app/(sp)/admin/presentation/form/PresentationForm";
import * as Sentry from "@sentry/nextjs"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";

const {getUser} = getKindeServerSession();

export default async function PresentationFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { presentationID } = await searchParams
        
    try {
        if(presentationID){
            const presentation = await getPresentation(parseInt(presentationID));
            console.log(presentation);
            // Edit customer form if profile exists
            if (presentation) {
                return <PresentationForm presentation={presentation}/>
            }
        } else {
                return <PresentationForm />
            }

    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e)
            throw e
        }
    }
}
