import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/covervideo.mp4';
import logo from '../assets/whitelogo.png';
import { GoogleLogin, googleLogout } from '@react-oauth/google';



const Login = () => {
  const user = false;

  const responseGoogle= (response) => {

  }

  return (
      <div className='flex justfiy-start items-center flex-col h-screen'>
       <div className='relative w-full h-full'>
         <video
           src={shareVideo}
           type='video/mp4'
           loop
           controls={false}
           muted
           autoPlay
           className='w-full h-full object-cover'
         />

         <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
           <div className='p-5'>
             <img src={logo} width= '130px' alt='logo' />
           </div>

           <div className='shadow-2xl'>
             <GoogleOAuthProvider
               render={(renderProps) => (
                <button
                type='button'
                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4'/> Sign in with Google
                </button>
              )}
              
            />
          </div>
            {user ? (
              <div>Logged in</div>
            ): (
              <GoogleLogin
               clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
               render={(renderProps)=>(
                <button
                type='button'
                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4'/> Sign in with Google
                </button>
               )}
               
                onSuccess={(response) => console.log(response)}
                onError={() => console.log('Error')}
               
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default Login
