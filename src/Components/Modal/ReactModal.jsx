import React from 'react';

const ReactModal = () => {
      return (
            <div>
                  


                  {/* ==========Modal for update============== */}
<ReactModal
isOpen={showModal}
onRequestClose={() => setShowModal(false)}
contentLabel=""
shouldCloseOnOverlayClick={true}
shouldCloseOnEsc={true}
ariaHideApp={false}
style={{
      overlay: {
            backgroundColor: 'rgba(2, 0, 0, 0.2)',
            backdropFilter: 'blur(2px)'
      },
      content: {
            width: '450px',
            height: '300px',
            margin: 'auto',
            padding: '35px 5px',
            border: '1px solid black'
      },
}} >


<div className="w-full flex flex-col justify-center items-center">
      <h5 className='my-3'>Update Booking Duration</h5>
      <div className=' mt-24 flex gap-4'>
            {/* <button className="btn bg-amber-800 hover:bg-amber-800 text-white" onClick={() => {

                  const BookingTimeDay = (new Date(uptEndDate) - new Date(uptStartDate)) / 86400000
                  if (!uptStartDate || !uptEndDate) {
                        return (
                              Swal.fire({
                                    title: "Please Enter Update Booking and End Date",
                                    icon: "warning",
                                    confirmButtonText: "OK",
                                    customClass: {
                                          confirmButton: 'custom-confirm-button',
                                    },
                              })
                        )
                  } else if (BookingTimeDay < 1) {
                        return (Swal.fire({
                              title: "Please Make sure Your Booking Date",
                              text: `Your Start date is ${uptStartDate} and your End date is ${uptEndDate}. You Need at least one day`,
                              icon: "warning",
                              confirmButtonText: "OK",
                              customClass: {
                                    confirmButton: 'custom-confirm-button',
                              },
                        }))
                  }
                  const updatedDateDatas = { updateStartDate: uptStartDate, updateEndDate: uptEndDate, updateBookingTimeDay: BookingTimeDay, RoomTitle }

                  axios.put(`https://hotel-booking-app-server-wi7a.vercel.app/my_bookings/update_date?email=${user.email}`, updatedDateDatas)
                        .then(() => {
                              Swal.fire({
                                    title: "Success Changed your Date",
                                    icon: "success"
                              });
                              refetch()
                              setShowModal(false)
                        })
                        .catch(err => console.log(err))
            }}>
                  Update Date
            </button> */}
            <button className="btn" onClick={() => setShowModal(false)}>
                  Close
            </button>
      </div>

</div>
</ReactModal>
            </div>
      );
};

export default ReactModal;