import React from 'react'
import VoiceInteraction from './components/VoiceInteraction'
import Rewards from './components/Rewards'
import Games from './components/Games'
import CameraAR from './components/CameraAR'

export default function App() {
  return (
    <div style={{maxWidth:900, margin:'0 auto', padding:16, fontFamily:'system-ui'}}>
      <h1>📚 تطبيق تعليمي تفاعلي</h1>
      <p>واجهة React + واجهة خلفية Django REST.</p>
      <VoiceInteraction />
      <Games />
      <Rewards />
      <CameraAR />
      <div style={{marginTop:24, opacity:.6, fontSize:12}}>
        <p>نصيحة: شغّل خادم الواجهة بـ <code>npm run dev</code> وخادم Django على المنفذ 8000.</p>
      </div>
    </div>
  )
}
