import React from 'react'

function Button() {
  return (
    <>
    <div className="flex justify-between items-center">
              <button className="flex space-x-3 items-center bg-black text-white px-7 py-3 rounded-md">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4.5H20V16.5H5.17L4 17.67V4.5ZM4 2.5C2.9 2.5 2.01 3.4 2.01 4.5L2 22.5L6 18.5H20C21.1 18.5 22 17.6 22 16.5V4.5C22 3.4 21.1 2.5 20 2.5H4ZM6 12.5H18V14.5H6V12.5ZM6 9.5H18V11.5H6V9.5ZM6 6.5H18V8.5H6V6.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>VIA SUPPORT CHAT</span>
              </button>
              <button className="flex space-x-3 items-center bg-black text-white px-16 py-3 rounded-md">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 11.29C8.06 14.12 10.38 16.43 13.21 17.88L15.41 15.68C15.68 15.41 16.08 15.32 16.43 15.44C17.55 15.81 18.76 16.01 20 16.01C20.55 16.01 21 16.46 21 17.01V20.5C21 21.05 20.55 21.5 20 21.5C10.61 21.5 3 13.89 3 4.5C3 3.95 3.45 3.5 4 3.5H7.5C8.05 3.5 8.5 3.95 8.5 4.5C8.5 5.75 8.7 6.95 9.07 8.07C9.18 8.42 9.1 8.81 8.82 9.09L6.62 11.29Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>VIA CALL</span>
              </button>
            </div>
            <div className="py-3">
            <button className="flex space-x-3 justify-center items-center bg-transparent text-black text-base px-6 py-3 rounded-md border border-black w-full">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 4.5H20.5V16.5H5.67L4.5 17.67V4.5ZM4.5 2.5C3.4 2.5 2.51 3.4 2.51 4.5L2.5 22.5L6.5 18.5H20.5C21.6 18.5 22.5 17.6 22.5 16.5V4.5C22.5 3.4 21.6 2.5 20.5 2.5H4.5ZM6.5 12.5H18.5V14.5H6.5V12.5ZM6.5 9.5H18.5V11.5H6.5V9.5ZM6.5 6.5H18.5V8.5H6.5V6.5Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>VIA EMAIL FORM</span>
            </button>
            </div>
            </>
  )
}

export default Button