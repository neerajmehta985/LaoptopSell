import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between items-center bg-gray-700 w-full text-white py-3 px-5'>
            <div>Neeraj</div>

            <ul className='flex gap-5'>
                <li><a href="#/">Home</a></li>
                <li><a href="#/">Home</a></li>
                <li><a href="#/">Home</a></li>
                <li><a href="#/">Home</a></li>
            </ul>

            <div>
                <button>SIgn</button>
                <button>SIgn</button>
            </div>
        </nav>
    </div>
  )
}

