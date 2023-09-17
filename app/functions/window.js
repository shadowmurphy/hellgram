const { BrowserWindow } = require('electron');
const fs = require('fs');

const createWindow = (filename, options={}, extras={}) => {
    const filepath = `${process.cwd()}/app/html/${filename}.html`
    if (!fs.existsSync(filepath)) throw Error("Path not found");
    const window = new BrowserWindow({ ...options, ...extras });
    window.loadFile(filepath);
    return window;
}  

module.exports = { createWindow }