import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { startBrowserKeepAlive } from './keepAlive'

startBrowserKeepAlive()

createRoot(document.getElementById("root")!).render(<App />);
