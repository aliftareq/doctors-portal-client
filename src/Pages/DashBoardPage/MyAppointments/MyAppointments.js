import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointments = () => {
    //context values
    const { user } = useContext(AuthContext)

    //use of query 
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('patient-token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <section className='px-10'>
            <div>
                <h1 className='text-3xl'>My Appointments</h1>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{booking.Patientname}</td>
                                    <td>{booking.Treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default MyAppointments;