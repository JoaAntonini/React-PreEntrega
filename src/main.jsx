
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConexion } from './firebase/config'
import './index.css'

firebaseConexion()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
