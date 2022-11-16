import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = function(isSucceed, text){
  let toastAttributes = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  if(isSucceed){
    toast.success(text, toastAttributes)
  }else{
    toast.error(text, toastAttributes)
  }
}

export default notify;