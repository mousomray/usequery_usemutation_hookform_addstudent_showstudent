import axios from "axios"
import { toast } from "react-toastify"
import { myendpoint } from "./endpoints"
import axiosInstance from "./api"

// Add Student  
export const addStudent = async (data) => {

    try {
        const apiurl = myendpoint[0];
        const response = await axiosInstance.post(apiurl, data)
        console.log("Fetching Add Student Data", response);
        toast.success(response?.data?.message)
        return response
    }
    catch (error) {
        console.log('Error while calling Add student data', error)
        toast.error(error?.response?.data?.message)
    }
}

// Show Student 
export const showstudent = async () => {

    try {
        const apiurl = myendpoint[1];
        const response = await axiosInstance.get(apiurl)
        console.log("Fetching Show student data", response);
        return response?.data?.data
    }
    catch (error) {
        console.log('Error while calling All student data', error.message)
    }
}
