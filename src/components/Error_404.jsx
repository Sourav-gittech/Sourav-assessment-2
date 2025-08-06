import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error_404 = () => {
    return (
        <div className='text-center manage-padding'>
            <h3>Oops...</h3>
            <h5 className='py-3'>Page Not Found!</h5>
            <Button variant='success' className='big-btn' as={Link} to='/'>Go To Home Page</Button>
        </div>
    )
}

export default Error_404