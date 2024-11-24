import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

const Dashboard = ({ user }) => {

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold mb-6 text-xl text-primaryNavy'>Profile Details</h1>
                <button className='w-26 bg-primaryNavy text-white font-semibold px-4 py-2 flex justify-start'>
                    <Icon iconName='pencilsquare' className='mr-3 text-white' /> Edit
                </button>
            </div>
            <div className='flex flex-col justify-start items-start w-full'>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Full Name</p>
                    <p className='font-bold '>{user.first_name ?? '- not added -'} {user.last_name ?? '- not added -'} </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Email Id</p>
                    <p className='font-bold '>{user?.email ?? '- not added -'} </p>
                </div>
                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Gender</p>
                    <p className='font-bold '>{user?.gender ?? '- not added -'} </p>
                </div>

                <div className='flex justify-between items-center w-[70%] my-2'>
                    <p>Location</p>
                    <p className='font-bold '>- not added - </p>
                </div>
            </div>
        </div>
    )
}
Dashboard.propTypes = {
    user: PropTypes.object
}
Dashboard.defaultProps = {
    user: { first_name: '', last_name: '', email: '' }
}

export default Dashboard