import { useEffect, useState } from "react"


const ModalForm = ({ message, success }) => {
   const [className, setClassName] = useState("fade-in")

   useEffect(() => {
      const timer = setTimeout(() => {
         setClassName("fade-out")
       }, 5000);

       return () => clearTimeout(timer);
   })


   return (
         <div className={`modalForm modalForm--${success} ${className}`}>
            <div className="modalFormContainer">{message}</div>
            <div className={`modalForm__progressBar modalForm__progressBar--${success}`}></div>
         </div>
   )
}

export default ModalForm