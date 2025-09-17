import React, { useEffect } from 'react'
import '@google/model-viewer'

export default function CameraAR() {
  useEffect(() => {
    // Custom setup can be added later
  }, [])

  return (
    <div style={{border:'1px solid #ddd', borderRadius:16, padding:16, marginTop:12}}>
      <h2>📷 الواقع المعزز (3D)</h2>
      <p>عرض نموذج ثلاثي الأبعاد باستخدام <code>&lt;model-viewer&gt;</code>.</p>
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        alt="نموذج ثلاثي الأبعاد"
        auto-rotate
        camera-controls
        ar
        style={{width:'100%', height:'400px'}}
      >
      </model-viewer>
    </div>
  )
}