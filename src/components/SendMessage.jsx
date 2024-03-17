import React, { useState } from 'react'

const SendMessage = ({handleSubmission}) => {

    const [value,setValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmission(value);
        setValue('');
    }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleFormSubmit} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" onClick={handleFormSubmit} className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage