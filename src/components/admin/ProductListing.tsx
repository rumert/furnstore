'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";

export default function ProductListing (  { room, products } : any) {

    const [isHidden, setIsHidden] = useState(true)
    const [isImageFormActive, setIsImageFormActive]: any = useState({})
    const [isNameFieldActive, setIsNameFieldActive]: any = useState({})
    const [isPriceFieldActive, setIsPriceFieldActive]: any = useState({})
    const [formFields, setFormFields]: any = useState({      
        name: '',
        price: '',      
        width: '',
        height: '',
        room: ''
      })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    function handleMenu() {
        setIsHidden(!isHidden)
    }

    async function handleProduct(e: any, productId: any) {
        
        e.preventDefault()
        setLoading(true) 
        const formData = new FormData(e.target)
        formData.append("id", productId)
        formData.append("room", room.toLowerCase())
        
        try {
            const res: any = await fetch('/api/editProduct', {
                method: 'POST',
                body: formData
            })

            setLoading(false)

            if (res.ok) {
                router.refresh()
            } else {
                setFormFields( (prevData: any) => ({ ...prevData, error: res }) )
            }
        
        } catch (err) {
            setFormFields( (prevData: any) => ({ ...prevData, error: 'an error occured, please try again' }) )
        }       
    }

    return (

    <div className='flex flex-col justify-center items-center py-2 px-4 w-screen'>
        <button onClick={handleMenu} className='w-full flex justify-center items-center border-2 border-primary-color-1'>
            {isHidden ? <FaArrowRight className="text-action-color mr-2" /> : <FaArrowDown className="text-action-color mr-2" />}
            {room}
        </button>
        {!isHidden && products?.map((product: any, index: any) => {
            return (
                <div className='w-full flex items-center gap-8 pl-3 py-1 border border-t-0 border-primary-color-1 rounded-md' key={index}>
                    
                    <div className="relative h-16 w-16">
                        <Image 
                        fill
                        sizes="10vw"
                        className='rounded-xl object-cover' 
                        src={product.url}
                        alt="product" 
                        />
                        <button onClick={() => setIsImageFormActive((prevState: any) => ({ ...prevState, [index]: !prevState[index]  }))}>
                            <FaPen className="absolute top-0 -right-5 text-action-color text-base"/>
                        </button>
                    </div>

                    <form className={isImageFormActive[index] ? 'h-6 w-fit flex justify-center items-center gap-1' : 'hidden'} encType="multipart/form-data" onSubmit={(e) => handleProduct(e, product.id)}>
                        <input 
                        type="number" 
                        className='h-full w-[5vw] border rounded-md text-xs text-black'
                        name='width'
                        value={formFields.width}
                        onChange={e => setFormFields( (prevData: any) => ({ ...prevData, width: e.target.value }) )}
                        placeholder={'W: '+ product.width}
                        required
                        /> 

                        <input 
                        type="number" 
                        className='h-full w-[5vw] border rounded-md text-xs text-black'
                        name='height'
                        value={formFields.height}
                        onChange={e => setFormFields( (prevData: any) => ({ ...prevData, height: e.target.value }) )}
                        placeholder={'H: '+ product.height}
                        required
                        /> 

                        <input
                        id="file" 
                        type="file" 
                        className='h-full w-[9vw] border rounded-md text-xs text-black'
                        name='file'
                        onChange={(e: any) => setFormFields( (prevData: any) => ({ ...prevData, file: e.target.files[0] }) )}
                        required
                        />
                        {loading ? 
                        <button disabled type="button" className="h-full w-[5vw] rounded-md bg-action-color text-base hover:opacity-80 flex items-center justify-center">
                            <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Processing...
                        </button>
                        : <button type='submit' className='h-full w-[6vw] px-1 text-base rounded-md bg-action-color'>Change</button>} 
                    </form>

                    <form className={isNameFieldActive[index] ? 'text-center flex justify-center items-center gap-2' : 'hidden'} encType="multipart/form-data" onSubmit={(e) => handleProduct(e, product.id)}> 
                        <input 
                        type="text" 
                        className="text-base h-8 w-40 mr-2 text-black" 
                        placeholder={product.name}
                        name='name'
                        value={formFields.name}
                        onChange={e => setFormFields( (prevData: any) => ({ ...prevData, name: e.target.value }) )}
                        required
                        />
                        {loading ? 
                        <button disabled type="button" className="h-full w-[5vw] rounded-md bg-action-color text-base hover:opacity-80 flex items-center justify-center">
                            <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Processing...
                        </button>
                        : <button type='submit' className='h-full w-[6vw] px-1 text-base rounded-md bg-action-color'>Change</button>}    
                    </form>
                    <h1 className={!isNameFieldActive[index] ? 'text-2xl' : 'hidden'}>{product.name}</h1>
 
                    <button onClick={() => setIsNameFieldActive((prevState: any) => ({ ...prevState, [index]: !prevState[index]  }))}>
                        <FaPen className='text-action-color text-base' />
                    </button>

                    <form className={isPriceFieldActive[index] ? 'text-center flex justify-center items-center gap-2' : 'hidden'} encType="multipart/form-data" onSubmit={(e) => handleProduct(e, product.id)}>
                        <input 
                        type="number" 
                        className="text-base h-8 w-40 mr-2 text-black" 
                        placeholder={product.price} 
                        name='price'
                        value={formFields.price}
                        onChange={e => setFormFields( (prevData: any) => ({ ...prevData, price: e.target.value }) )}
                        required
                        />
                        {loading ? 
                        <button disabled type="button" className="h-full w-[5vw] rounded-md bg-action-color text-base hover:opacity-80 flex items-center justify-center">
                            <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Processing...
                        </button>
                        : <button type='submit' className='h-full w-[6vw] px-1 text-base rounded-md bg-action-color'>Change</button>}
                    </form>
                    <h1 className={!isPriceFieldActive[index] ? 'text-2xl' : 'hidden'}>{product.price}$</h1>

                    <button onClick={() => setIsPriceFieldActive((prevState: any) => ({ ...prevState, [index]: !prevState[index]  }))}>
                        <FaPen className='text-action-color text-base' />
                    </button>
                            
                    <form className='text-center flex justify-center items-center gap-2' encType="multipart/form-data" onSubmit={(e) => handleProduct(e, product.id)}>
                        <label className='text-2xl' htmlFor="room">Room:</label>
                        <select name="newRoom" id="room" className='text-base h-8 w-40 mr-2 text-black'>
                            <option selected={room == "Kitchen"} value="kitchen">Kitchen</option>
                            <option selected={room == "Bedroom"} value="bedroom">Bedroom</option>
                            <option selected={room == "Living Room"} value="livingRoom">Living Room</option>
                        </select>
                        {loading ? 
                        <button disabled type="button" className="h-full w-[5vw] rounded-md bg-action-color text-base hover:opacity-80 flex items-center justify-center">
                            <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Processing...
                        </button>
                        : <button type='submit' className='h-full w-[6vw] px-1 text-base rounded-md bg-action-color'>Change</button>}
                    </form>

                    <form className='text-center flex justify-center items-center gap-2' encType="multipart/form-data" onSubmit={(e) => handleProduct(e, product.id)}>
                        <textarea 
                        name="description" 
                        id="description" 
                        cols={1} 
                        rows={3}
                        placeholder={product.description}
                        className='text-black text-xs w-40 border-2 px-4 rounded-2xl'
                        required
                        />
                        {loading ? 
                        <button disabled type="button" className="h-full w-[5vw] rounded-md bg-action-color text-base hover:opacity-80 flex items-center justify-center">
                            <svg aria-hidden="true" role="status" className="inline w-3 h-2 me-3 text-primary-color-2 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Processing...
                        </button>
                        : <button type='submit' className='h-full w-[6vw] px-1 text-base rounded-md bg-action-color'>Change</button>}
                    </form>

                    <h1>{formFields.error}</h1>

                </div>
            )
        })}   
    </div>  

    )    
}