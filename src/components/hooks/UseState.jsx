import React, { useState } from 'react'

const UseState = () => {
  const initial = true;
  const initialState = {
    name: '',
    city: ''
  }
  const [toggleText, setTogglText] = useState(initial);
  const [formData, setFormData] = useState(initialState);

  function handleToggle() {
    setTogglText(!toggleText)
  }
  return (
    <div className='flex flex-col py-10 items-center justify-center'>
      <h1>UseState Hook</h1>
      <div className='flex flex-col items-center justify-center'>
        {
          toggleText ? <p className='items-center font-bold'>Hello Geetesh</p> : null
        }
        <button onClick={handleToggle} className="m-3 px-4 py-2 border-black border-[2px] rounded-lg bg-green-300">Toggle Text</button>
      </div>
      <div className='border-[2px] border-[#ddd]'>
        <div>
          <input onChange={ (event) => {setFormData(
            {
              ...formData,
              [event.target.name] : event.target.value
            }
          )}}
          type="text" name='name' placeholder='Enter name' />


          <select onChange={ (event) => {
            setFormData({
              ...formData,
              [event.target.name] : event.target.value
            })
          }}
          name="city" id="city" placeholder='city'>
            <option value="city">select city</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Indore">Indore</option>
            <option value="Jaora">Jaora</option>
            <option value="Nimuch">Nimuch</option>
          </select>
        </div>
      </div>
        <p className='font-bold'>Name is {formData.name}</p>
        <p className='font-bold'>City is {formData.city}</p>
    </div>
  )
}

export default UseState
