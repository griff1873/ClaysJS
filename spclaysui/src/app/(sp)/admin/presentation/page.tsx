
import { getPresentations} from "@/lib/queries/getPresentation";
import { BackButton } from "@/components/BackButton";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import PresentationForm from "@/app/(sp)/admin/presentation/form/PresentationForm";
import * as Sentry from "@sentry/nextjs"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";

export default async function PresentationListPage(){

    const presentationList = await getPresentations()

    return(
        <>
            {presentationList.map((presentation) => (
                <div key={presentation.PresentationID} className="card my-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>{presentation.PresentationName}</CardTitle>
                           
                        </CardHeader>
                        <CardContent>
                            <p>{presentation.PresentationDescription}</p>
                        </CardContent>
                        <CardFooter>
                            <Link className={buttonVariants({ variant: "outline" })}
                                href={{
                                    pathname: '/admin/presentation/form',
                                    query: { presentationID: presentation.PresentationID },
                                }}>Edit</Link>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    )

}