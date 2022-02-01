import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, getJson, toast, localeTh } from "@mobiscroll/react";

function CalendarUser() {
  const [myEvents, setEvents] = React.useState([
    {
        start: "2022-02-07T08:00:00.000Z",
        end: "2022-02-07T17:00:00.000Z",
        title: "เช้า",
        color: "#ff6d42",
      },
      {
        start: "2022-02-05T12:00:00.000Z",
        end: "2022-02-05T20:00:00.000Z",
        title: "บ่าย",
        color: "#7bde83",
      },
      {
        start: "2022-02-12T12:00:00.000Z",
        end: "2022-02-13T20:00:00.000Z",
        title: "ดึก",
        color: "#7bde83",
      },
  
  ]);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return (
    <Eventcalendar
      locale={localeTh}
      theme="ios"
      themeVariant="light"
      clickToCreate={false}
      dragToCreate={false}
      dragToMove={false}
      dragToResize={false}
      data={myEvents}
      view={view}
      onEventClick={onEventClick}
    />
  );
}

export default CalendarUser;

