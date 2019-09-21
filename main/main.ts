const { format } = require('url')
const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')

import { createWindow } from "./window-manager"
import { menu } from "./menu/menu"


app.on('ready', async () => {
// create main window
  const mainWindow = createWindow("index", menu)
})


app.on('window-all-closed', app.quit)
