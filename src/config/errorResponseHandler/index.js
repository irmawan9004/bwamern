import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if ((error.response.status = 404)) message = "Error Response";
      else message = error.response.message;

      toast.error(message);
    }
  }
}

export default errorResponseHandler;
