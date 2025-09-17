import React, { useEffect, useState } from 'react'
import { getWords } from '../services/api'

// لعبة سحب الحرف المناسب للكلمة (نسخة مبسطة)
export default function Games() {
  const [words, setWords] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    getWords().then(res => setWords(res.data)).catch(() => setWords([
      {id:1, text:'قطة', language:'ar'}, {id:2, text:'كتاب', language:'ar'}
    ]))
  }, [])

  const handleGuess = (word, letter) => {
    if (word.text.includes(letter)) setScore(s => s + 1)
  }

  const letters = ['ا','ب','ت','ث','ج','ح','خ','د','ر','س','ص','ط','ع','ف','ق','ك','ل','م','ن','ه','و','ي']

  return (
    <div style={{border:'1px solid #ddd', borderRadius:16, padding:16, marginTop:12}}>
      <h2>🎮 لعبة الحروف</h2>
      <p>النقاط: {score}</p>
      {words.map(w => (
        <div key={w.id} style={{margin:'8px 0', padding:8, background:'#f8f8f8', borderRadius:12}}>
          <strong>الكلمة:</strong> {w.text}
          <div style={{display:'flex', gap:6, flexWrap:'wrap', marginTop:8}}>
            {letters.map(l => (
              <button key={l} onClick={() => handleGuess(w, l)}>{l}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
