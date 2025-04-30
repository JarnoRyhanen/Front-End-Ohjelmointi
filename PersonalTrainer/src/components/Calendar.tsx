import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEvent, Training } from '@/Types';
import dayjs from 'dayjs';

const Calendar = () => {

    const [events, setEvents] = useState<CalendarEvent[]>([]);

    const fetchTrainings = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/gettrainings`)
            .then((response) => response.json())
            .then((data) => {
                const formattedEvents = data.map((training: Training) => {
                    const start = dayjs(training.date).subtract(3, "hour");
                    const end = start.add(training.duration, 'minute');

                    return {
                        title: `${training.activity} / ${training.customer.firstname} ${training.customer.lastname}`,
                        start: start.toISOString(),
                        end: end.toISOString(),
                    };
                });
                setEvents(formattedEvents);
            })
            .catch((error) => console.error('Error fetching trainings:', error));
    };

    useEffect(() => {
        fetchTrainings();
    }, []);

    return (
        <div className="p-6">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height={screen.height}
                headerToolbar={{
                    start: 'today prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                weekends={true}
                events={events} />
        </div>
    );
};

export default Calendar;