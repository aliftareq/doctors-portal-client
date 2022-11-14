import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    //handlers
    const handleLogin = (data) => {
        // e.preventDefault()
        console.log(data);
    }
    return (
        <section className='h-[500px] lg:h-[600px] flex justify-center items-center'>
            <div className='w-64 lg:w-96'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="example@gmail.com"
                            className="input input-bordered w-full"
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
                                minLength: { value: 6, message: 'Password Must be 6 Character or longer' },

                            })} />
                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p className='text-center mt-3'>New to Doctors Portal?
                    <span className='text-secondary ml-2 underline block lg:inline'>
                        <Link to='/register'>Create new account</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline  w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </section>
    );
};

export default Login;