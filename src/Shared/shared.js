import { toast } from "react-toastify";


export function* sagaErrorHandler(error) {
  if (!error) return
  if (error?.data?.statusCode === 401){
    toast.error(error.data.message)
  }
  // else if (
  //   error.data.message === "Your account has been blocked!" ||
  //   error.data.message === "Your account has not verified yet!" ||
  //   error.data.message === "Email not confirmed" 
  // ) {
  //   toast.error(error.data.message)    
    
  // }
  else if(error?.data?.statusCode === 403) {
    toast.error(error.data.message)    
    alert(1)
  }
  else if(error.data.error) {
    toast.error(error.data.error)    
  }
  else {
    // yield put(setNotification(error));
  }
}
