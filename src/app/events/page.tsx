'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'

type Event = {
  id: string
  title: string
  description: string
  date: string
  city: string
  created_by: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true })

      if (error) {
        console.error('Error fetching events:', error)
      } else if (data) {
        setEvents(data)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📅 Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id} style={{ marginBottom: '1rem' }}>
            <strong>{event.title}</strong> — {new Date(event.date).toLocaleDateString()}<br />
            <em>{event.city}</em><br />
            <small>{event.description}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
