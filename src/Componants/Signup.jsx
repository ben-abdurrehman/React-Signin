import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        firstName: '',
        lastName: '',
        brandName: '',
        brandId: '',
        city: '',
        mobile: '',
        roleId: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, role: [{ roleId: Number(formData.roleId) }] })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }
            
            alert('Signup successful!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='w-[45%] flex items-center justify-center'>
            <div className='w-[85%] h-auto p-9 flex flex-col gap-7 box-border rounded-3xl border border-[#0089ED] bg-white'>
                <div className='flex items-start justify-between p-2'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-xl font-normal'>Welcome to <span className='text-[#0089ED] font-bold'>DevPos</span></h1>
                        <h1 className='text-5xl font-medium'>Sign Up</h1>
                    </div>
                </div>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    {['fullName', 'firstName', 'lastName', 'email', 'password', 'brandName', 'city', 'mobile'].map((field) => (
                        <div className='flex gap-3 flex-col' key={field}>
                            <label className='font-medium' htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                            <input 
                                className='p-3 rounded-xl border border-[#4285F4]'
                                type={field === 'password' ? 'password' : 'text'}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <div className='flex gap-3 flex-col'>
                        <label className='font-medium' htmlFor="brandId">Brand ID</label>
                        <select 
                            className='p-3 rounded-xl border border-[#4285F4]'
                            id='brandId' 
                            name='brandId'
                            value={formData.brandId}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select Brand</option>
                            <option value='1'>DTf Enterprises</option>
                        </select>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <label className='font-medium' htmlFor="roleId">Role</label>
                        <select 
                            className='p-3 rounded-xl border border-[#4285F4]'
                            id='roleId' 
                            name='roleId'
                            value={formData.roleId}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select Role</option>
                            <option value='1'>ADMIN</option>
                        </select>
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <button type="submit" className='bg-[#0089ED] p-3 mt-3 rounded-xl text-white font-semibold'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
