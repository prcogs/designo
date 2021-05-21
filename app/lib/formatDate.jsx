
export const formatDate = (dateAndTime, separator = " ") => {
   const [ date , time ] = dateAndTime.split(separator)
   
   const formatedDate = date.split("-")[2] + "/" + date.split("-")[1] + "/" + date.split("-")[0].split('')[2] + date.split("-")[0].split('')[3]
   const formatedTime = time.substr(0, 5)

   return [formatedDate, formatedTime]
}