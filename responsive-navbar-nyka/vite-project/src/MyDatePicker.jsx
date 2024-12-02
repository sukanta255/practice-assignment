import React, { useState } from 'react';
import {DatePicker} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h3>Select Your Date of Birth</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy" // Correct date format
        showYearDropdown
        scrollableYearDropdown
        showMonthDropdown
        maxDate={new Date()} // Prevent future dates
        placeholderText="DD-MM-YYYY"
        yearDropdownItemNumber={100} // Show 100 years in the dropdown
       
      />
      {selectedDate && (
        <p>
          Selected Date: {selectedDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
      )}
    </div>
  );
};

export default MyDatePicker;





// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const MyDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   return (
//     <DatePicker
//       selected={selectedDate}
//       onChange={(date) => setSelectedDate(date)}
//       dateFormat="yyyy-MM-dd"
//       showYearDropdown
//       scrollableYearDropdown
//     />
//   );
// };

// export default MyDatePicker;
