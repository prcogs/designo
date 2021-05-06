import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useState } from "react"
import { postComment } from "../../lib/api"

const schema = yup.object().shape({
   userName: yup.string().required(),
   contentComment: yup.string().required(),
 });

const FormComments = ({ postId, reqComments }) => {
   const [comment, setComment] = useState({})
   const [isLoading, setIsLoading] = useState(false);

   const { register, handleSubmit, errors, reset } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
   })

   const onSubmit = async (data, e) => {
      setIsLoading(true)
      const resp = await postComment(data.userName, data.contentComment, postId)
      setComment(resp)
      console.log(resp)

      if(resp.success) {
         e.target.reset()
         reqComments()
      }
      
      setIsLoading(false)
   }

   return (
      <form className="formContact__form formContact__form--commentaire" onSubmit={handleSubmit(onSubmit)}>
         <input type="text" placeholder="Name" {...register("userName")}/>

         <textarea placeholder="Your message" {...register("contentComment")}/>

         <button disabled={isLoading ? true : false} className="btn--dark">
            {isLoading ? <img src="/assets/images/Dual_Ring-1s-40px.svg" alt="Spin"/> : "SUBMIT" }
         </button>
      </form>
   )
}



export default FormComments