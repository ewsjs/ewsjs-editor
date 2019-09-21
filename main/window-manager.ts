import { BrowserWindow, Menu } from "electron";
const { format } = require('url')
const { resolve } = require('app-root-path')

const isDev = require('electron-is-dev');

const formatpath = page => {
  return format({
    pathname: resolve(`build/renderer/${page}/${page}.html`),
    protocol: 'file:',
    slashes: true
  })
}

export const getWindowUrl = page => isDev ? `http://localhost:1124/${page}/${page}.html` : formatpath(page);


export const openWindow = (name, parentWindow = null, modal = false) => {
  const parent = parentWindow || (modal ? BrowserWindow.getFocusedWindow() : null);
  const bw = new BrowserWindow({
    parent: parent,
    modal,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  bw.loadURL(getWindowUrl(name));
}

export const openModalWindow = (name, parentWindow = null) => openWindow(name, parentWindow, true)

export const createWindow = (page, menu = null) => {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })
  const url = getWindowUrl(page);
  if(menu){
    Menu.setApplicationMenu(menu);
  }
  mainWindow.loadURL(url)
}
