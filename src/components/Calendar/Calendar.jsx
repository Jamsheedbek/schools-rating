import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const newDate = new Date();
const currentYear = newDate.getFullYear();

const Calendar = ({ value = currentYear.toString() }) => {
  const [date, setDate] = React.useState(dayjs(value));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year"]}
        label="Year only"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
