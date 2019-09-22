import { Remote } from "electron";
import { RendererProcessIpc } from "electron-better-ipc";
import * as ews from "ews-javascript-api";
import * as xhr from "@ewsjs/xhr";

interface ElectronRemote {
  requir: NodeRequireFunction;
}

declare global {
  interface Window {
    ipc: RendererProcessIpc
    remote: ElectronRemote & Omit<Remote, keyof ElectronRemote>
    ews: typeof ews
    ewsXhr: typeof xhr
  }
}
