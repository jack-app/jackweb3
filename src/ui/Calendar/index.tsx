import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import styled from "styled-components";
import styles from "./index.module.scss";
type Props = {};

const CalendarWrapper = styled.div`
  .fc-icon-chevron-right::before {
    color: #ffc785;
  }
  .fc-icon-chevron-left::before {
    color: #ffc785;
  }
  .fc .fc-toolbar-title {
    font-size: 32px;
  }
  .fc-direction-ltr {
    background-color: #fff4e3;
    width: 100%;
  }
  .fc-scroller-harness {
    background-color: #fff4e3;
  }
  .fc-day-sat {
    color: blue;
  }
  .fc-day-sun {
    color: red;
  }
  .fc-day-sat .fc-col-header-cell-cushion {
    color: blue;
  }
  .fc-day-sun .fc-col-header-cell-cushion {
    color: red;
  }
  .fc-event {
    display: grid;
    justify-content: center;
  }
  .fc-daygrid-event-dot {
    display: none;
  }
  .fc-daygrid-dot-event .fc-event-title {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
  .fc-time {
    font-size: 0.8rem;
  }
  .fc-title {
    font-size: 1rem;
  }
  .fc-daygrid-event-harness {
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Calendar: React.FC<Props> = () => {
  const googleCalendarApiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  return (
    <CalendarWrapper>
      <div className={styles.container}>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={googleCalendarApiKey}
          events={{ googleCalendarId: googleCalendarId }}
          height={"auto"}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          views={{
            dayGridMonth: {
              titleFormat: { month: "long" },
            },
          }}
          eventContent={(eventInfo) => {
            const { start, end } = eventInfo.event;
            const startTime = start
              ? start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
              : "";
            const endTime = end
              ? end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
              : "";
            return (
              <>
                <div className="fc-time">
                  {startTime} - {endTime}
                </div>
                <div className="fc-title">{eventInfo.event.title}</div>
              </>
            );
          }}
        />
      </div>
      <style>
        {`
          :root {
            --fc-button-bg-color: transparent;
            --fc-button-border-color: transparent;
            --fc-button-hover-bg-color: transparent;
            --fc-button-hover-border-color: transparent;
            --fc-button-active-bg-color: transparent;
            --fc-button-active-border-color: transparent;
          }
        `}
      </style>
    </CalendarWrapper>
  );
};
