import dayjs, { Dayjs } from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

export interface IFormattedObj {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
}

/**
 * Function that will format the date object for easier manipulation.
 * @param date
 * @returns see interface above.
 */
const formatDateObject = (
  date: Dayjs,
  currentMonthData: Dayjs
): IFormattedObj => {
  const clonedObj = { ...date.toObject() };
  const formattedObject = {
    day: clonedObj.date,
    month: clonedObj.months,
    year: clonedObj.years,
    isCurrentMonth: clonedObj.months === currentMonthData.month(),
    isCurrentDay: date.isToday(),
  };

  return formattedObject;
};

export interface IAllDays {
  dates: IFormattedObj[];
}

/**
 * Function that creates an array of current month weeks (7 days in 5-6 rows).
 * @param currentMonthData
 * @returns see interface above.
 */
export const getAllDays = (
  currentMonthData: Dayjs
): React.SetStateAction<IAllDays[] | null> => {
  let currentDate = currentMonthData.startOf("month").weekday(0);
  const nextMonth = currentMonthData.add(1, "month").month();
  let allDates = [];
  let weekDates = [];
  let weekCounter = 1;
  let weeks = 0;
  while (
    currentDate.weekday(0).toObject().months !== nextMonth /*|| weeks < 6*/
  ) {
    const formatted = formatDateObject(currentDate, currentMonthData);
    weekDates.push(formatted);
    if (weekCounter === 7) {
      allDates.push({ dates: weekDates });
      weekDates = [];
      weekCounter = 0;
      weeks++;
    }
    weekCounter++;
    currentDate = currentDate.add(1, "day");
  }
  return allDates;
};