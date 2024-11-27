import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "../../../api/AxiosWrapper";

const {getUser} = getKindeServerSession();
const user = await getUser();

const doGet = async () => {
        
          try {
               const response = await axios.get('/minimal/protected',
                   
                    {
                         headers: {'Content-Type': 'application/json'},
                         withCredentials: true
                    });
               console.log(response);

          } catch (error) {

               console.log(error);
               
          }
        }

console.log(user);

export const metadata ={
    title: "Home",
}

export default function Home(){
    return (
    <div>
        <h2>Welcome {user.given_name}</h2>
        <label>Your ID is {user.id}</label>
        <form
            action={async () => {
            "use server";
            await doGet();
            }}>
            <button>push</button>
        </form>
        
    </div>

    )
}