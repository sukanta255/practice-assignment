import React, { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Signup.css";

// Function to detect Safari browser
const isSafari = () => {
  const userAgent = navigator.userAgent;
  console.log("userAgent....",userAgent)
  return (
    /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/CriOS/.test(userAgent)
  );
};

function Signup() {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  const calendarRef = useRef(null);
  

  // Check if it's Safari on initial render
  useEffect(() => {
    if (isSafari()) {
      setIsSafariBrowser(true);
    }
  }, []);

  console.log("isSafariBrowser....",isSafariBrowser)

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (selectedDate) => {
    setDateOfBirth(selectedDate);
    setIsCalendarOpen(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  // Set min and max dates (if required, otherwise remove these lines)
  const minDate = new Date(1900, 0, 1); // Jan 1, 1900
  const maxDate = new Date(); // Current date

  return (
    <div className="signup-container">
      {isSafariBrowser ? (
        <>
          <input
            type="text"
            value={dateOfBirth ? dateOfBirth.toLocaleDateString() : ""}
            onFocus={toggleCalendar}
            placeholder="DD-MM-YYYY"
            readOnly
          />
          {isCalendarOpen && (
            <div className="custom-calendar-container" ref={calendarRef}>
              <DayPicker
                selected={dateOfBirth}
                onDayClick={handleDateChange}
                captionLayout="dropdown"
                hideNavigation
                showYearDropdown
                scrollableYearDropdown
                minDate={minDate}
                maxDate={maxDate}
                showCaption={true}
                className="custom-calendar"
              />
            </div>
          )}
        </>
       ) : (

        <input
          type="date"
          value={dateOfBirth ? dateOfBirth.toLocaleDateString("en-CA") : ""}
          onChange={(e) => setDateOfBirth(new Date(e.target.value))}
        />
      )} 
    </div>
  );
}

export default Signup;




// import React, { useState, useEffect, useRef } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./Signup.css";

// function Signup() {
//   const [dateOfBirth, setDateOfBirth] = useState(null);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const calendarRef = useRef(null);

//   const toggleCalendar = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleDateChange = (selectedDate) => {
//     setDateOfBirth(selectedDate);
//     setIsCalendarOpen(false);
//   };

//   // Close calendar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (calendarRef.current && !calendarRef.current.contains(event.target)) {
//         setIsCalendarOpen(false);
//       }
//     };

//     if (isCalendarOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isCalendarOpen]);

//   // Set min and max dates (if required, otherwise remove these lines)
//   const minDate = new Date(1900, 0, 1); // Jan 1, 1900
//   const maxDate = new Date(); // Current date

//   return (
//     <div className="signup-container">
//         <input
//           type="text"
//           value={dateOfBirth ? dateOfBirth.toLocaleDateString() : ""}
//           onFocus={toggleCalendar}
//           placeholder="DD-MM-YYYY"
//           readOnly
//         />
//       {isCalendarOpen && (
//         <div className="custom-calendar-container" ref={calendarRef}>
//           <DayPicker
//             selected={dateOfBirth}
//             onDayClick={handleDateChange}
//             captionLayout="dropdown"
//             hideNavigation
//             showYearDropdown
//             scrollableYearDropdown
//             minDate={minDate}
//             maxDate={maxDate}
//             showCaption={true}
//             className="custom-calendar"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./Signup.css";

// function Signup() {
//   const [dateOfBirth, setDateOfBirth] = useState(null);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const toggleCalendar = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleDateChange = (selectedDate) => {
//     setDateOfBirth(selectedDate);
//     setIsCalendarOpen(false);
//   };

//   // Set min and max dates (if required, otherwise remove these lines)
//   const minDate = new Date(1900, 0, 1); // Jan 1, 1900
//   const maxDate = new Date(); // Current date

//   return (
//     <div className="signup-container">
//       {!isCalendarOpen && (
//         <input
//           type="text"
//           value={dateOfBirth ? dateOfBirth.toLocaleDateString() : ""}
//           onFocus={toggleCalendar}
//           placeholder="DD-MM-YYYY"
//           readOnly
//         />
//       )}
//       {isCalendarOpen && (
//         <div className="custom-calendar-container">
//           <DayPicker
//             selected={dateOfBirth}
//             onDayClick={handleDateChange}
//             captionLayout="dropdown" 
//             hideNavigation 
//             showYearDropdown
//             scrollableYearDropdown
//             minDate={minDate} 
//             maxDate={maxDate} 
//             showCaption={true}
//             className="custom-calendar"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;
