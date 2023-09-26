import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
import { BASE_URL } from "../utils/config";
export default function VerifyEmail () {
    const { user, updateUser } = useContext(AuthContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const emailToken = searchParams.get("emailToken");
 
  
    console.log("emailToken",emailToken);
    useEffect(() => {
     ( async () => {
        
         if (user?.isVerified){
          setTimeout(() => {
              return navigate("/");
          },3000);
         }else{
          if (emailToken) {
              setIsLoading(true);

            //   const response = await postRequest(
            //   '$(baseUrl)/users/verify-email',
            //   JSON.stringify({ emailToken })
            //  );
              const response = await fetch(`${BASE_URL}/auth/verify-email?emailToken=${emailToken}`);
          
             setIsLoading(false);
             setTimeout(() => {
                navigate(`/`);
             }, 2000);
             console.log("res", response);

             if (response.error) {
               return setError(response);
              }
              updateUser(response);
           }
         }
     })();
         
    },[emailToken, user]);


    const centerDivStyle = {
        width: "100vw",
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection : "column"
    }


    return(
      <div>
        {
            isLoading ? (
                <div>
                   <div style={centerDivStyle}>
                   <CircularProgress />
                    <div>Email is getting verified. Please wait ⏰</div>
                   </div>
                   
                </div>
            ) : (
                <div>
                    (
                        <div>
                            <Alert>
                                Email Successfuly verified,recorded...
                            </Alert>
                        </div>
                    ) 
                </div>
             ) }
      </div>
    );
};

