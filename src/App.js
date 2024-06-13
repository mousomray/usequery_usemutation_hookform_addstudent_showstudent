import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/Common/Navbar'
import Addstudent from './Pages/Addstudent'

// Import QueryClient for React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Showstudent from './Pages/Showstudent'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'

const App = () => {

    // Create a client
    const queryClient = new QueryClient()

    return (
        <>
            <ToastContainer />
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/addstudent' element={<Addstudent />} />
                        <Route path='/showstudent' element={<Showstudent />} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default App
