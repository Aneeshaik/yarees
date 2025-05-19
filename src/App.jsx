import { useEffect, useState } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'


const App = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseuser) => {
      setUser(firebaseuser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  return user ? <ChatRoom /> : <Login />
 }

export default App
