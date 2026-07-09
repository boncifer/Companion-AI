

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('companion', {
  version: '0.1.0',

  captureScreen: () => ipcRenderer.invoke('capture-screen'),
});