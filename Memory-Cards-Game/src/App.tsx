import './App.css'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import Login from './screens/login.screens'
import Game from './screens/game.screens'
import Levels from './screens/levels.screens'
import ScoreBoard from './screens/score-board.screens'
import NotFound from './screens/not-found.screens'
import Status from './components/status/status'
import { GameModeProvider } from './providers/gameModeContext'

function App() {
  const routs: RouteObject[] = [
    {
      path: "/",
      element: <Login/>
    },

    {
      path: "/game",
      element: <Game/>
    },

    {
      path: "/levels",
      element: <Levels/>
    },

    {
      path: "/score-board",
      element: <ScoreBoard/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
  const browserRouter = createBrowserRouter(routs);
  return (
    <GameModeProvider>
      <RouterProvider router={browserRouter}>
        
      </RouterProvider>
    </GameModeProvider>
  )
}

export default App;
