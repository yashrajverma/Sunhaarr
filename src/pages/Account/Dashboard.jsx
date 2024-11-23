import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1 className='font-bold mb-6 text-xl text-primaryNavy'>Profile Details</h1>
            <div className='flex flex-col justify-start items-start w-full'>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Full Name</p>
                    <p className='font-bold '>Yashraj Verma </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Mobile Number</p>
                    <p className='font-bold '>1234567890 </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Email Id</p>
                    <p className='font-bold '>meriEMailIdHai@hai.com </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Gender</p>
                    <p className='font-bold '>Male </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>DOB</p>
                    <p className='font-bold '>Yashraj Verma </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Location</p>
                    <p className='font-bold '>- not added - </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard