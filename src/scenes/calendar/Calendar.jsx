import React, { useState } from 'react'
import FullCalendar  from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { formatDate } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useLocalStorage from '../../hooks/useLocalStorage'

export function Calendar () {
  const [currentEvents, setCurrentEvents] = useLocalStorage("calendarEvents" , []);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

return (
  <Box m="20px">
    {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

    <Box display="flex" justifyContent="space-between">
      {/* CALENDAR SIDEBAR */}
      <Box
        flex="1 1 20%"
        bgcolor="primary_bg.main"
        p="15px"
        borderRadius="4px"
      >
        <Typography variant="h7" color="primary_text.main">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: "primary.main",
                margin: "10px 0",
                borderRadius: "2px",
                color:"white"
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography >
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* CALENDAR */}
      <Box flex="1 1 100%" ml="15px" color="secondary_text.main">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={currentEvents}
        />
      </Box>
    </Box>
  </Box>
);
}