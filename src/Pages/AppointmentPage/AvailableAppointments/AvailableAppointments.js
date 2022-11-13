import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption/AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    //states
    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState({})

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setAppointments(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <section className='my-5 lg:my-10'>
            <div className='lg:my-20'>
                <p className='px-3 text-primary font-bold text-center'>
                    Available Appointments on {format(selectedDate, 'PP')}.
                </p>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        appointments.map(option => <AppointmentOption
                            key={option._id}
                            option={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;