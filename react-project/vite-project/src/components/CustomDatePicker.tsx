import { DatePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const CustomDatePicker = ({ value, onChange }: { value: Dayjs | null, onChange: (date: Dayjs | null) => void }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                defaultValue={dayjs('')}
                value={value}
                onChange={(newValue) => onChange(newValue)}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker