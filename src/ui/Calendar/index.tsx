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
          eventTimeFormat={{
            // 時間の表示形式を設定
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // 24時間表記を指定
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
          .fc-title {
            font-size: 20px;
          }
      `}
      </style>
    </>
  );
};
