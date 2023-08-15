import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {ImSpinner9} from 'react-icons/im'
import {PiPaperPlaneTiltLight} from 'react-icons/pi'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [submit, setSubmit] = useState('Submit')

  const sendEmail = (e) => {
    setSubmit('Submitting')
    e.preventDefault();
    if (form.current.message.value != '' && form.current.name.value != '' && form.current.message.email != ''  ){
      
      setLoading(true)
      emailjs.sendForm('service_7zb4n0f', 'template_oc89xxg', form.current, 'UrRaQcEB7fssOyFgd')
        .then((result) => {
            setLoading(false)
            e.target.reset()
            setSubmit('Submitted')
            setTimeout(() => {
              setSubmit('Submit')
            }, 2000);
            console.log(result.text);
        }, (error) => {
            setLoading(false)
            console.log(error.text);
        });
    }else{
      alert('Please fill the form correctly!')
    }
    };

  return (
    <div id='contact' className="flex animate-fadeIn justify-center">
      <div className='my-10 max-sm:mb-20 max-sm:my-0 w-8/12 max-sm:w-full'>
        <h1 className='font-bold text-4xl'>Let's talk</h1>
        <div className='flex flex-col'>
          <form onSubmit={sendEmail} ref={form}>
            <div className='flex flex-col my-5'>
                <label className='text-xl my-1' htmlFor="">Name</label>
                <input name='name' placeholder="What's your good name?" className='border rounded text-xl p-2' type="text" />
            </div>
            <div className='flex flex-col my-5'>
                <label className='text-xl my-1' htmlFor="">Email</label>
                <input name='email' placeholder="Please enter your email" className='border rounded text-xl p-2' type="text" />
            </div>
            <div className='flex flex-col my-5'>
                <label className='text-xl my-1' htmlFor="">Message</label>
                <textarea name='message' placeholder="I like to read your message..." className='border rounded text-xl p-2' rows={10} />
            </div>

            <button className=' flex items-center p-1 my-4 rounded bg-gradient-to-r from-cyan-700 to-cyan-400 font-bold text-2xl text-white hover:bg-white cursor-pointer  transition-all shadow-lg  hover:shadow-cyan-400 w-fit'>{submit}
            {loading?
            <ImSpinner9 className='mx-2 animate-spin'/>
            :
            <PiPaperPlaneTiltLight className='mx-2'/>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
