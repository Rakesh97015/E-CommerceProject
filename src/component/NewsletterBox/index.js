

import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
      event.preventDefault();
}

  return (
    <div className='text-center'>
        <h3 className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</h3>
        <p className="text-muted mt-3">It is a great time to visit our website</p>
        <form onSubmit={onSubmitHandler} >
          <input
            className='w-full sm:flex-1 outline :none'
            type='email'
            placeholder='Enter your email' required/>
          <button
            type='submit'
            className='bg-black text-white text-xs px-10'
           >
            SUBSCRIBE
          </button>
        </form>
    </div>
  )
}

export default NewsletterBox


