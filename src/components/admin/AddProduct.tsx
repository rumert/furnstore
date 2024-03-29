'use client'
import React, { useState } from 'react'

export default function AddProduct() {
  const [formFields, setFormFields]: any = useState({      
    name: '',
    price: '',      
    width: '',
    height: '',
    room: '',
    error: ''
  })
  const [loading, setLoading] = useState(false)

  async function handleProduct(e: any) {
    e.preventDefault()
    setLoading(true) 
    const formData = new FormData(e.target)
    try {
      const res: any = await fetch('/api/addProduct', {
        method: 'POST',
        body: formData
      })

      setLoading(false)

      if (res.ok) {
        setFormFields({      
          name: '',
          price: '',      
          width: '',
          height: '',
          room: '',
          error: ''
        })
      } else {
        setFormFields( (prevData: any) => ({ ...prevData, error: res }) )
      }
      
    } catch (err) {
      setFormFields( (prevData: any) => ({ ...prevData, error: 'an error occured, please try again' }) )
    }
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleProduct} className='h-[90%] text-black text-xl text-center flex flex-col items-center'>
      <input 
      type="text" 
      className='border-2 rounded-2xl mb-4 pl-4 w-[50%] h-10'
      name='name'
      value={formFields.name}
      onChange={e => setFormFields( (prevData: any) => ({ ...prevData, name: e.target.value }) )}
      placeholder='Product Name'
      required
      /> 

      <input 
      type="number" 
      className='border-2 rounded-2xl mb-4 pl-4 w-[50%] h-10'
      name='price'
      value={formFields.price}
      onChange={e => setFormFields( (prevData: any) => ({ ...prevData, price: e.target.value }) )}
      placeholder='Price'
      required
      /> 

      <input 
      type="number" 
      className='border-2 rounded-2xl mb-4 pl-4 w-[50%] h-10'
      name='width'
      value={formFields.width}
      onChange={e => setFormFields( (prevData: any) => ({ ...prevData, width: e.target.value }) )}
      placeholder='Width'
      required
      /> 

      <input 
      type="number" 
      className='border-2 rounded-2xl mb-4 pl-4 w-[50%] h-10'
      name='height'
      value={formFields.height}
      onChange={e => setFormFields( (prevData: any) => ({ ...prevData, height: e.target.value }) )}
      placeholder='Height'
      required
      /> 

      <textarea 
      name="description" 
      id="description" 
      cols={1} 
      rows={1}
      placeholder='Description'
      className='h-20 w-[50%] mb-4 border-2 px-4 rounded-2xl'
      />

      <select name="room" id="room" className='mb-4' required>
        <option value="" selected disabled >Select a Room</option>
        <option value="kitchen">Kitchen</option>
        <option value="bedroom">Bedroom</option>
        <option value="livingRoom">Living Room</option>
      </select>

      <select name="category" id="category" className='mb-4' required>
        <option value="" selected disabled >Select a Category</option>
        <option value="chair">Chair</option>
        <option value="accentChair">Accent Chair</option>
        <option value="sofa">Sofa</option>
        <option value="dresser">Dresser</option>
        <option value="wardrobe">Wardrobe</option>
      </select>

      <label htmlFor="file" className='text-white'>Product Image</label>
      <input
      id="file" 
      type="file" 
      className='mt-1 mb-4 text-base w-[50%]'
      name='file'
      onChange={(e: any) => setFormFields( (prevData: any) => ({ ...prevData, file: e.target.files[0] }) )}
      required
      /> 

      {loading ? 
      <button disabled type="button" className="w-1/2 h-10 rounded-xl bg-action-color hover:opacity-80 flex items-center justify-center">
        <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        Processing...
      </button>
      : <button type='submit' className='w-1/2 h-10 rounded-xl bg-action-color'>ADD</button>}
      
      <h1>{formFields.error}</h1>
    </form>       
  )
}
