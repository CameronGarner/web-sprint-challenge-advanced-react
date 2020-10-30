// write your custom hook here to control your checkout form

import React, { useState } from "react";

let useForm = function(){
  const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // const handleChanges = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setShowSuccessMessage(true);
    //   }
      return ([values,showSuccessMessage])
}

export default useForm