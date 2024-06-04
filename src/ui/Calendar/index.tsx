import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import styles from "./index.module.scss";

type Props = {};

export const Calendar: React.FC<Props> = () => {
  const googleCalendarApiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = process.env.GOOGLE_CALENDAR_ID;
  return (
    <>
      <div className={styles.container}>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={googleCalendarApiKey}
          events={{ googleCalendarId: googleCalendarId }}
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
        />
      </div>
      <style>
        {/* module.cssだとFullCalendarに対してスタイルを当てられないのでinlineStyleを使用 */}
        {`
          .fc-icon-chevron-right::before {
            color: #fb8700
          }
          .fc-icon-chevron-left::before {
            color: #fb8700
          }
          :root {
            --fc-border-color: black;
            --fc-button-bg-color: transparent;
            --fc-button-border-color: transparent;
            --fc-button-hover-bg-color: transparent;
            --fc-button-hover-border-color: transparent;
            --fc-button-active-bg-color: transparent;
            --fc-button-active-border-color: transparent;
          }
          .fc .fc-toolbar-title {
            font-size: 36px;
          }
          .fc-direction-ltr {
            background-color: #fff4e3;
            width: 100%;
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
          .fc-day-sun .fc-col-header-cell-cushion{
            color: red;
          }
          .fc-daygrid-event-dot {
            display: none;
          }
          .fc-direction-ltr .fc-daygrid-event .fc-event-time {
            display: none;
          }
          .fc-event-title {
            text-align: center;
            font-size: 18px;
          }
      `}
      </style>
    </>
  );
};
