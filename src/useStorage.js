import { useState, useEffect } from 'react'
import { projectStorage } from './firebaseConfig'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name)
  }, [file])

  storageRef.put(file).on('state_changed', (snap) => {
    const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
    setProgress(percentage)
  }, (err) => {
    setError(err)
  }, async () => { // fires when upload is complete
    const url = await storageRef.getDownloadURL()
		 setUrl(url)
  })

  return { progress, url, error }
}

export default useStorage