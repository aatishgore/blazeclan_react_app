

export const SOMETHING_HAPPEND_WRONG = "Something went wrong, please try again";

// Handle all API call back error here
export const errorHandler = (error) => {
    let errorMsg = "";
    if (error.response) {
    //   console.log("errRes", error.response);
      const data = error.response.data;
      let msg = data && data.message && data.message
      errorMsg = msg ? msg : SOMETHING_HAPPEND_WRONG;
    } else if (error.request) {
    //   console.log("errReq", error.request);
      errorMsg = SOMETHING_HAPPEND_WRONG;
    } else {
    //   console.log("err", error);
      errorMsg = SOMETHING_HAPPEND_WRONG;
    }
    return errorMsg;
};