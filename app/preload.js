const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    closeApp: () => ipcRenderer.send('closeApp'),
    on: (channel, func) => {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
);
