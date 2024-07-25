import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer, Container} from './components/index'
import './App.css'
import { Outlet } from 'react-router-dom'
// import {Editor } from '@tinymce/tinymce-react';


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }

    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <>
    <div className='flex flex-col min-h-screen w-auto'>
        <Header/>
        <div className='flex-grow'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
    
  ) : (null)
}

export default App
