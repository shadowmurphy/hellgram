const { app, BrowserWindow, ipcMain } = require("electron");
const { createWindow } = require("./app/functions/window")
const path = require('path');

let signWindow;

app
.whenReady()
.then(() => {
    signWindow = createWindow("sign", {
      width: 400,
      height: 500,
      frame: false,
      resizable: false,
      transparent: true,
      webPreferences: {
        preload: path.join(__dirname, "./app/preload.js"),
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: true,
      },
    });
  
    ipcMain
    .on("closeApp", () => {
      signWindow.close();
    })
    // .on("generateCaptcha", (event) => {
    //   const captcha = svgCaptcha.create();
    //   event.sender.send("captchaGenerated", captcha.data);
    // });
});

app
.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})
.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) signWindow
})