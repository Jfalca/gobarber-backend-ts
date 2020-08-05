// const appointmentDate = startOfHour(parsedDate);

//   const findAppointmentInSameDate = appointmentsRepository.findByDate(
//     appointmentDate,
//   );

//   if (findAppointmentInSameDate) {
//     return response
//       .status(400)
//       .json({ message: 'This appointment is already booked' });
//   }

//   const appointment = appointmentsRepository.create({
//     provider,
//     date: parsedDate,
//   });

class CreateAppointmentService {
  constructor() {}
}

export default CreateAppointmentService;
