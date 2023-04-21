import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "dayjs/locale/en";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const SmallCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <LocalizationProvider adapterLocale="en" dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={(newValue: Dayjs | null) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};

export default SmallCalendar;