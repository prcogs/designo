import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react"

import { postComment } from "../../lib/api"
import ModalForm from '../layout/modalForm';

const schema = yup.object().shape({
   userName: yup.string().max(20, "max 20 characters").trim("trim mod").required("Can't be empty"),
   contentComment: yup.string().required("Can't be empty"),
 });

const FormComments = ({ postId, reqComments }) => {
   const [respAPI, setRespAPI] = useState({})
   const [isLoading, setIsLoading] = useState(false);
   const [viewModal, setViewModal] = useState(false)

   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
   })

   const onSubmit = async (data, e) => {
      if(data.remarque === "") {
         setIsLoading(true)

         const resp = await postComment(data.userName, data.contentComment, postId)
   
         if(resp?.success) {
            e.target.reset()
            setRespAPI({success : true,
                        msg: "Message sent."})
   
            // mise à jour de la listes des commentaires
            reqComments()
         } else {
            setRespAPI({success : false,
                        msg: "Message not sent. Please retry"})
         }
         
         setViewModal(true)
         setIsLoading(false)
   
         // delay est défini par: durée fade-in + durée de l'animation + durée fade-out 
         const timerOut = setTimeout(() => {
            setViewModal(false)
          }, 6000); 
   
         return () => clearTimeout(timerOut);
      }
   }

   return (
      <>
         <form className="formContact__form formContact__form--commentaire" onSubmit={handleSubmit(onSubmit)}>
            <label>
               <input type="text" placeholder="Name" {...register("userName")}/>
               {errors.userName && <span className="formContact__errors"> {errors.userName.message} <img src="/assets/exclamation-solid.svg" alt="Icon exclamation"/></span>}
            </label>

            <label>
               <textarea placeholder="Your message" {...register("contentComment")}/>
               {errors.contentComment && <span className="formContact__errors">{errors.contentComment.message} <img src="/assets/exclamation-solid.svg" alt="Icon exclamation"/></span>}
            </label>

            {/* Input anti-spam - si le champ est rempli, cela veux dire que c'est un spam */}
            <label className="formContact__remarque">Remarque
               <input className="formContact__remarque" 
                     name="remarque"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                     placeholder="nom@domaine.com"
                     {...register("remarque")}
                     />
            </label>

            <button disabled={isLoading ? true : false} className="btn--dark">
               {isLoading ? <img src="/assets/images/Dual_Ring-1s-40px.svg" alt="Spin"/> : "SUBMIT" }
            </button>

         
         </form>

        {viewModal && <ModalForm message={respAPI.msg} success={respAPI.success}/>}
      </>
   )
}



export default FormComments