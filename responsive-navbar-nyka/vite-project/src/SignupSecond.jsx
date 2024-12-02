import React, { useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import 'react-day-picker/style.css';


import "./Signup.css";

// Function to detect Safari browser
const isSafari = () => {
  const userAgent = navigator.userAgent;
  console.log("userAgent....", userAgent);
  return (
    /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/CriOS/.test(userAgent)
  );
};

// Custom YearMonthForm component for selecting month and year
function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();
  const currentYear = date.getFullYear();
  const years = [];

  // Adding year range (from current year to 10 years ahead)
  for (let i = currentYear; i < currentYear + 10; i++) {
    years.push(i);
  }

  const handleChange = (e) => {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

function SignupSecond() {
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
    <div className="signup-containerrr">
      <input
        type="text"
        value={dateOfBirth ? dateOfBirth.toLocaleDateString() : ""}
        onFocus={toggleCalendar}
        placeholder="DD-MM-YYYY"
        readOnly
      />
      {isCalendarOpen && (
        <div className="custom-calendar-containerrr" ref={calendarRef}>
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
            className="custom-calendarrr"
            captionElement={({ date, localeUtils }) => (
              <YearMonthForm
                date={date}
                localeUtils={localeUtils}
                onChange={handleDateChange}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}

export default SignupSecond;
