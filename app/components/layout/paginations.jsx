import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));
 
 export default function PaginationRounded({ numberMaxPages, handleChange }) {
   const classes = useStyles(); 
 
   return (
     <div className={`${classes.root} paginations`}>
       <Pagination count={numberMaxPages} shape="rounded" onChange={handleChange}/>
     </div>
   );
 }