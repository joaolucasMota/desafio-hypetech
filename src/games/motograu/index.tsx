import './index.css'

import React, { useContext, useEffect } from 'react'
import Display from './components/display'
import Snackbar from '@/core/components/snackbar'
import Results from '@/core/components/results'
import TransactionBar from '@/core/components/transaction-bar'
import Controls from '@/core/components/controls/crash-control'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { SessionContext } from '@/core/providers/session.provider'
import { GameStatus } from '@/core/providers/enums/game-status'
import Navbar from '@/core/components/navbar'
import Header from './components/Header/header'
import Chat from './components/chat/chat'
import RoundInfos from './components/roundInfos/roundInfos'
import Bets from './components/bets/bets'

function HomePage() {
  const { setLoading } = useContext<any>(SessionContext)
  const { iframeRef, gameStatus, executeAction, balance } =
    useContext<any>(CrashGameContext)

  useEffect(() => {
    iframeRef.current?.contentWindow.addEventListener(
      'instance-created',
      () => {
        setLoading(false)
        if (gameStatus == GameStatus.RUNNING)
          setTimeout(() => executeAction('start'), 1000)
      }
    )
  }, [iframeRef])

  return (
    <div className="main">
    <div className="header-1">
      <Header />
    </div>
    <div className='iframeChat'>
    <RoundInfos/>
      <div className="results-and-iframe-container">
        <div className='results'>
          <Results className="results"/>
        </div>
        <iframe
          ref={iframeRef}
          className="rounded-md overflow-hidden w-full h-full pointer-events-none min-h-[250px] sm:min-h-[300px]"
          src="/motograu/index.html"
        ></iframe>
        <Display color={'pink'} />
        <Bets/>
      </div>
      <Chat />
    </div>
  </div>
  )
}

export default HomePage
