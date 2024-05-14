import { useState } from "react";

export function useInput(defaultValue,validationFn){
     const [enteredValue, setEnteredValue]=useState(defaultValue)
     const [didEdit, setDidEdit] = useState(false);

     valueIsValid = validationFn(enteredValue)

     function handleInputChange(event) {
        setEnteredValues(event.target.value);
        setDidEdit(false);
      }
    
      function handleInputBlur() {
        setDidEdit(true);
      }
      return{
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError:didEdit && !valueIsValid
      }
}