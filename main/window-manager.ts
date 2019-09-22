import { BrowserWindow, Menu, app } from "electron"
const { join } = require("path")
const { format } = require("url")
const { resolve } = require("app-root-path")

const isDev = require("electron-is-dev")

const formatpath = (page) => {
  return format({
    pathname: resolve(`build/renderer/${page}/${page}.html`),
    protocol: "file:",
    slashes: true
  })
}

export const getWindowUrl = (page) => isDev ? `http://localhost:1124/${page}/${page}.html` : formatpath(page)

export const openWindow = (name, parentWindow = null, modal = false) => {
  const parent = parentWindow || (modal ? BrowserWindow.getFocusedWindow() : null)
  const bw = new BrowserWindow({
    parent,
    modal,
    webPreferences: {
      nodeIntegration: true,
      preload: join(app.getAppPath(), "build/main/static/preload.js")
    }
  })
  bw.loadURL(getWindowUrl(name))
}

export const openModalWindow = (name, parentWindow = null) => openWindow(name, parentWindow, true)

export const createWindow = (page, menu = null) => {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: join(app.getAppPath(), "build/main/static/preload.js")
    }
  })

  mainWindow.once("ready-to-show", () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })
  const url = getWindowUrl(page)
  if (menu) {
    Menu.setApplicationMenu(menu)
  }
  mainWindow.loadURL(url)
}
