import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Head from 'next/head';
import { Video, ArrowRight, Plus } from 'lucide-react';

import styles from '@/styles/home.module.css'

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid meeting ID to join the meeting")
    }
  }

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>SignWave - Professional Video Conferencing Platform</title>
        <meta name="description" content="Connect, collaborate, and communicate with SignWave's cutting-edge video conferencing platform. Crystal clear video, instant connectivity, and professional-grade features." />
      </Head>
      
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Video size={20} />
          </div>
          <span className={styles.logoText}>SignWave</span>
        </div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.accent}>SignWave</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Professional video conferencing made simple
          </p>
        </div>
        
        <div className={styles.meetingActions}>
          <div className={styles.joinSection}>
            <h3>Join a Meeting</h3>
            <div className={styles.joinForm}>
              <input 
                type="text"
                placeholder='Enter Meeting ID' 
                value={roomId} 
                onChange={(e) => setRoomId(e?.target?.value)}
                className={styles.meetingInput}
              />
              <button onClick={joinRoom} className={styles.joinButton}>
                <span>Join</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className={styles.divider}>
            <span>or</span>
          </div>
          
          <div className={styles.createSection}>
            <button onClick={createAndJoin} className={styles.createButton}>
              <Plus size={20} />
              <span>Start New Meeting</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Video size={16} />
            <span>SignWave</span>
          </div>
          <span>&copy; 2025 SignWave. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}