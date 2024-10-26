import React from 'react'

export default function HomePage() {

  async function sendEmail(formData: FormData){
    "use server"

    const title = formData.get('title')
    const to = formData.get('to')
    const content = formData.get('content')

    if(!title || !to || !content) {
      return alert('Please fill all fields');
    }

    console.log({title, to, content})

  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form action={sendEmail} method='POST' className='flex flex-col gap-y-4'>
        <input name='title' type="text" placeholder='Email Title'
          className='bg-slate-400 block p-2 placeholder:text-slate-500'
        />
        <input name='to' type="text" placeholder='To' 
          className='bg-slate-400 block p-2 placeholder:text-slate-500'
        />
                
        <textarea name='content' placeholder='write your message'
          className='bg-slate-400 block p-2 placeholder:text-slate-500'
        ></textarea>

        <button
          className='bg-green-500 text-white p-2 rounded-md hover:bg-slate-700'  
        >Enviar</button>
      </form>
    </div>
  )
}
