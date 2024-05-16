import axios from "axios"
import { toast } from "react-toastify"

// Add Student  
export const addStudent = async (data) => {
    
    const API_URL = 'https://tureappservar.onrender.com/student/create'

    try {
       const response =  await axios.post(API_URL, data)
       toast.success(response?.data?.message) 
       return response?.data
    }
    catch (error) {
        console.log('Error while calling Add student data', error)
        toast.error(error?.response?.data?.message)
    }
}

// Show Student 
export const showstudent = async () => {
    
    const API_URL = 'https://tureappservar.onrender.com/student/show'

    try {
        return await axios.get(API_URL)
    }
    catch (error) {
        console.log('Error while calling All student data', error.message)
    }
}
