import React, { useEffect, useState } from 'react'
import { getRewards } from '../services/api'

export default function Rewards() {
  const [rewards, setRewards] = useState([])

  useEffect(() => {
    getRewards().then(res => setRewards(res.data)).catch(() => setRewards([]))
  }, [])

  return (
    <div style={{border:'1px solid #ddd', borderRadius:16, padding:16, marginTop:12}}>
      <h2>🏆 المكافآت</h2>
      {rewards.length === 0 && <p>لا توجد بيانات مكافآت بعد.</p>}
      {rewards.map(r => (
        <p key={r.id}>{r.user}: ⭐ {r.points} - 🎖️ {r.badges}</p>
      ))}
    </div>
  )
}
