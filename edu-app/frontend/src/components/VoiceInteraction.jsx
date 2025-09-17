import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function VoiceInteraction() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <div>المتصفح لا يدعم التعرف على الصوت</div>
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'ar' })
  }

  const stopListening = () => {
    SpeechRecognition.stopListening()
  }

  const resetAll = () => {
    resetTranscript()
    stopListening()
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 16, padding: 16, marginTop: 12 }}>
      <h2>🎤 التفاعل الصوتي</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={startListening}>ابدأ</button>
        <button onClick={stopListening}>إيقاف</button>
        <button onClick={resetAll}>إعادة</button>
      </div>
      <p style={{ marginTop: 8, color: listening ? 'green' : 'gray' }}>
        {listening ? '🎧 جاري الاستماع…' : 'اضغط ابدأ للتحدث'}
      </p>
      <p><strong>النص:</strong> {transcript}</p>
    </div>
  )
}
