import { IpcRenderer, Remote } from "electron";
import * as ews from "ews-javascript-api";
import * as xhr from "@ewsjs/xhr";

interface ElectronRemote {
  requir: NodeRequireFunction;
}

declare global {
  interface Window {
    ipc: IpcRenderer
    remote: ElectronRemote & Omit<Remote, keyof ElectronRemote>
    ews: typeof ews
    ewsXhr: typeof xhr
  }
}
