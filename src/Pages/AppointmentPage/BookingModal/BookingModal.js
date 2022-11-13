import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment //here treatment is appointment option
    const date = format(selectedDate, 'PP')

    //handlers
    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const slot = form.slot.value
        const Patientname = form.name.value
        const phone = form.phone.value
        const email = form.email.value

        const booking = {
            appointmentDate: date,
            Patientname,
            phone,
            email,
            Treatment: name,
            slot
        }
        // console.log(date, name, email, phone, slot);
        console.log(booking);
        form.reset()
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className=''>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                            <input type="text" value={date} className="input input-bordered w-full bg-gray-300 font-semibold" readOnly />
                            <select name='slot' className="select select-bordered w-full" required>
                                {
                                    slots?.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                            <input name='email' type="email" placeholder="E-mail" className="input input-bordered w-full" required />
                            <br />
                            <input type="submit" value="Submit" className="btn btn-accent input w-full" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;