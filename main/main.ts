const { format } = require("url")
const { BrowserWindow, app } = require("electron")
const isDev = require("electron-is-dev")

import { createWindow } from "./window-manager"
import { menu } from "./menu/menu"

import prepareIpc from "./ipc/ipc"

app.on("ready", async () => {
// create main window
  const mainWindow = createWindow("Index", menu)
  prepareIpc()
})

app.on("window-all-closed", app.quit)
