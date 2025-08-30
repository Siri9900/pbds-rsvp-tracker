'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'

type RSVP = {
  id: string
  user_id: string
  event_id: string
  status: 'Yes' | 'No' | 'Maybe'
}

export default function RSVPsPage() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])

  useEffect(() => {
    const fetchRsvps = async () => {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('event_id', { ascending: true })

      if (error) {
        console.error('Error fetching RSVPs:', error)
      } else if (data) {
        setRsvps(data)
      }
    }

    fetchRsvps()
  }, [])

  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">📝 RSVP Tracker</h1>
      <table className="min-w-full border text-sm bg-white rounded overflow-hidden">
        <thead className="bg-gray-300 text-gray-900">
          <tr>
            <th className="px-4 py-2 text-left border-b font-bold">User ID</th>
            <th className="px-4 py-2 text-left border-b font-bold">Event ID</th>
            <th className="px-4 py-2 text-left border-b font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {rsvps.map((rsvp, index) => (
            <tr
              key={rsvp.id}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
            >
              <td className="px-4 py-2 border-b text-black">{rsvp.user_id}</td>
              <td className="px-4 py-2 border-b text-black">{rsvp.event_id}</td>
              <td className="px-4 py-2 border-b text-black">{rsvp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
