import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

import BannerTopDesign from "../layout/bannerTopDesign"
import { useState } from 'react';
import { postContact } from '../../lib/api';
import ModalForm from '../layout/modalForm';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
   userName: yup.string().max(20, "max 20 characters").trim("trim mod").required("Can't be empty"),
   email: yup.string().email("Enter a valid email").required("Can't be empty"),
   phone: yup.string().matches(phoneRegExp, 'Not valid number').required("Can't be empty"),
   message: yup.string().required("Can't be empty"),
 });

const FormContact= () => {
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

         const resp = await postContact(data.userName, data.email, data.phone, data.message)
   
         if(resp?.success) {
            e.target.reset()
            setRespAPI({success : true,
                        msg: "Message sent."})
   
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
      } else {
         console.log(data)
      }
   }

   return(
      <>
         <BannerTopDesign detailClassName="formContact">
            <div className="formContact__description">
               <h2>Contact Us</h2>
               <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
                  If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>

            <form className="formContact__form" onSubmit={handleSubmit(onSubmit)}>
               <label>
                  <input type="text" placeholder="Name" {...register("userName")} />
                  {errors.userName && (
                        <span className="formContact__errors"> 
                           {errors.userName.message} 
                           <img src="/assets/exclamation-solid.svg" alt="Icon exclamation" />
                        </span>
                     )
                  }
               </label>

               <label>
                  <input type="text" placeholder="Email adress" {...register("email")} />
                  {errors.email && (
                        <span className="formContact__errors"> 
                           {errors.email.message} 
                           <img src="/assets/exclamation-solid.svg" alt="Icon exclamation" />
                        </span>
                     )
                  }
               </label>

               <label>
                  <input type="tel" placeholder="Phone" {...register("phone")}/>
                  {errors.phone && (
                        <span className="formContact__errors"> 
                           {errors.phone.message} 
                           <img src="/assets/exclamation-solid.svg" alt="Icon exclamation" />
                        </span>
                     )
                  }
               </label>

               <label>
                  <textarea placeholder="Your message" {...register("message")} />
                  {errors.message && (
                        <span className="formContact__errors">
                           {errors.message.message} 
                           <img src="/assets/exclamation-solid.svg" alt="Icon exclamation" />
                        </span>
                     )
                  }
               </label>


               {/* Input anti-spam - si le champ est rempli, cela veux dire que c'est un spam */}
               <label className="formContact__remarque">
                  Remarque
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
         </BannerTopDesign>

         {viewModal && <ModalForm message={respAPI.msg} success={respAPI.success}/>}
      </>
      
   )
}

export default FormContact