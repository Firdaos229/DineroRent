import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

type IProps = {
  date: Date | null;
  setDate: (date: Date | null) => void;
  minDate?: Date | null;
  cls?: string;
  defaultValue?: string;
};

export default function DatePicker({ date, setDate, minDate,cls='', defaultValue='Choose Date'}: IProps) {
  return (
    <Flatpickr
      id="datetime-picker"
      placeholder="Choose Date"
      className={cls}
      type="text"
      defaultValue={defaultValue}
      value={date as Date}
      options={{
        dateFormat: "Y-m-d",
        enableTime: false,
        defaultDate: new Date(),
        closeOnSelect: true,
        minDate: minDate || "today" // Sets minimum date based on passed prop or defaults to today
      }}
      onChange={([selectedDate]) => {
        setDate(selectedDate);
      }}
    />
  );
}
