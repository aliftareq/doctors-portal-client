import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    //handlers
    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <section className='h-[600px] lg:h-[700px] flex justify-center items-center'>
            <div className='w-64 lg:w-96'>
                <h1 className='text-4xl text-center'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="Jhankar Mahabub"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: 'Name is required'
                            })}
                        />
                        {errors.name && <p className='text-red-400' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email"
                            placeholder="example@gmail.com"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: 'Email is required'
                            })}
                        />
                        {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="*******"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 char or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' }
                            })}
                        />
                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value='Register' type="submit" />
                </form>
                <p className='text-center mt-3'>Already have an account?
                    <span className='text-secondary ml-2 underline block lg:inline'>
                        <Link to='/login'>Login</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline  w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </section>
    );
};

export default Register;