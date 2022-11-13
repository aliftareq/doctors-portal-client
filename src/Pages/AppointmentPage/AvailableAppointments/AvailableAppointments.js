import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='my-5 lg:my-10'>
            <div>
                <p className='px-3 text-primary font-bold text-center'>
                    Available Appointments on {format(selectedDate, 'PP')}.
                </p>
            </div>
            <div>

            </div>
        </section>
    );
};

export default AvailableAppointments;