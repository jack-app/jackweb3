import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import React from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

type Props = {};

const MobileCalendarWrapper = styled.div`
  .fc-icon-chevron-right::before {
    color: #ffc785;
  }
  .fc-icon-chevron-left::before {
    color: #ffc785;
  }
  .fc-button-primary {
    background-color: transparent;
    border-color: transparent;
  }
  .fc-button-primary:hover {
    background-color: transparent;
    border-color: transparent;
  }
  .fc-button-primary:active {
    background-color: transparent;
    border-color: transparent;
  }
  .fc-theme-standard .fc-list-day-cushion {
    background-color: #fffcf2;
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0.5rem 0;
  }
`;

export const MobileCalendar: React.FC<Props> = (props) => {
  const googleCalendarApiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  return (
    <MobileCalendarWrapper>
      <div className={styles.container}>
        <FullCalendar
          initialView="listMonth"
          plugins={[listPlugin, dayGridPlugin, googleCalendarPlugin]}
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
            listMonth: {
              titleFormat: { month: "long" },
            },
          }}
          locales={[jaLocale]}
          locale="ja"
          listDayFormat={{
            month: "numeric",
            day: "numeric",
            weekday: "short",
            omitCommas: true,
          }}
          listDaySideFormat={false}
        />
      </div>
    </MobileCalendarWrapper>
  );
};
