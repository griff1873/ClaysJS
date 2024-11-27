
import { getProfileByUser} from "@/lib/queries/getProfile";
import { BackButton } from "@/components/BackButton";
import ProfileForm from "@/app/(sp)/profile/form/ProfileForm"
import * as Sentry from "@sentry/nextjs"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";

const {getUser} = getKindeServerSession();

export default async function ProfileFormPage(){
    try {
        
        const user = await getUser();
        console.log(user);
        const profile = await getProfileByUser(user.id);
        console.log(profile);
        // Edit customer form if profile exists
        if (profile) {
            return <ProfileForm profile={profile} user={user}/>
        } else {
            return <ProfileForm user={user}/>
        }

    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e)
            throw e
        }
    }
}
