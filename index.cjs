const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

const main = async () => {
  const hasLock = app.requestSingleInstanceLock();
  if (hasLock) {
    await app.whenReady();
    createWindow();
    app.on("second-instance", createWindow);
  } else {
    app.quit();
  }
};

main();
