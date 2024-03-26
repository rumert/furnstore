'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function CreateUser() {

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [formData, setFormData]: any = useState({
      name: '',
      surname: '',
      email: '',
      password: '',
      repPassword: '',
      result: ''
    })

    async function handleRegister(e: any) {
      e.preventDefault()
      if (formData.password != formData.repPassword) {
        setFormData( (prevData: any) => ({ ...prevData, result: 'Passwords do not match' }) )
      } else {
        setLoading(true)
        const res: any = await fetch('/api/createUser', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json', 
          },
          body: JSON.stringify({ 
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            password: formData.password 
          })
        })
        const resMes = await res.json();
        if (res.ok) {
          if (resMes == 'User created. Verification email sent!') {
            setFormData({
              nickname: '',
              email: '',
              password: '',
              repPassword: '',
              result: resMes
            })
            setTimeout(() => {
              router.push('/login');
            }, 1000);
          } else {
            setFormData((prevData: any) => ({ ...prevData, result: resMes }))
          }            
        } else {
          setFormData((prevData: any) => ({ ...prevData, result: resMes }))
        }              
      } 
    }

  return (
    <form onSubmit={handleRegister} className='h-full w-full sm:w-[70%] md:w-[60%] mx-auto p-8 md:p-12 flex flex-col justify-center items-center gap-4 text-black text-lg '>

      <input 
        type="text" 
        id='name' 
        value={formData.name}
        onChange={e => setFormData((prevData: any) => ({ ...prevData, name: e.target.value}))} 
        className='border-2 border-primary-color-2 rounded-xl px-4 w-[75%] h-10 sm:h-12' 
        placeholder='NAME'
        required
      />

      <input 
        type="text" 
        id='surname' 
        value={formData.surname}
        onChange={e => setFormData((prevData: any) => ({ ...prevData, surname: e.target.value}))} 
        className='border-2 border-primary-color-2 rounded-xl px-4 w-[75%] h-10 sm:h-12' 
        placeholder='SURNAME'
        required
      />

      <input 
        type="email" 
        id='email' 
        value={formData.email}
        onChange={e => setFormData((prevData: any) => ({ ...prevData, email: e.target.value}))} 
        className='border-2 border-primary-color-2 rounded-xl px-4 w-[75%] h-10 sm:h-12' 
        placeholder='EMAIL'
        required
      />

      <input 
        type="password" 
        id='password'
        minLength={6}
        value={formData.password} 
        onChange={e => setFormData((prevData: any) => ({ ...prevData, password: e.target.value}))}
        className='border-2 border-primary-color-2 rounded-xl px-4 w-[75%] h-10 sm:h-12'
        placeholder='PASSWORD'
        required
      />

      <input 
        type="password" 
        id='repPassword'
        minLength={6}
        value={formData.repPassword} 
        onChange={e => setFormData((prevData: any) => ({ ...prevData, repPassword: e.target.value}))}
        className='border-2 border-primary-color-2 rounded-xl px-4 w-[75%] h-10 sm:h-12'
        placeholder='REPEAT YOUR PASSWORD'
        required
      />

      {loading ? 
        <button disabled type="button" className="h-12 w-1/2 rounded-3xl bg-action-color text-base hover:opacity-80 flex items-center justify-center">
          <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          Processing...
        </button>
        : <button type='submit' className='h-10 md:h-12 w-1/2 rounded-3xl bg-action-color'>Change</button>}
      <div>
        <p className='inline text-my-text-color pl-4'>Or already </p> 
        <Link href='/login' className='text-action-color-1 underline mb-2'>
          have an account?
        </Link>
      </div>
      <p className={formData.result === 'User created. Verification email sent!' ? 'text-action-color' : 'text-primary-color-2'}>
        {formData.result} 
      </p>
      
    </form>
  )
}