import React, { useState } from 'react'

function FormAbout() {
    const [name , setName] = useState('zaheer')
    const handleFrom = (e) => {
        e.preventDefault();
        setName(e.target[0].value)
    }
  return (
    <form onSubmit={handleFrom}>
                <div className="flex flex-col relative mt-1" >
                    <label className=" absolute -top-2.5 left-4 text-sm bg-white px-1">Name</label>
                    <input type="text" className="border-2 h-8 px-3 py-5 text-sm"/>
                </div>
                <div className="flex flex-col relative mt-5" >
                    <label className=" absolute -top-2.5 left-4 text-sm bg-white px-1 ">EMAIL</label>
                    <input type="email" name="email" className="border-2 h-8 px-3 py-5 text-sm"/>
                </div>
                <div className="flex flex-col relative mt-5" >
                    <label className=" absolute -top-2.5 left-4 text-sm bg-white px-1">EMAIL</label>
                    <textarea rows={5} type="email" name="email" className="border-2 px-3 py-3 text-sm"/>
                </div>
                <div className="flex justify-end mt-3">
                    <button className="bg-black px-14 py-3 text-white rounded-md">
                    SUBMIT
                    </button>
                    
                </div>
                <ul>
                        <li>{name}</li>
                    </ul>
            </form>
  )
}

export default FormAbout