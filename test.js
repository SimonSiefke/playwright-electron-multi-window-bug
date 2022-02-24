import { _electron as electron } from "playwright";

export const launchApp = async () => {
  const electronApp = await electron.launch({
    args: ["index.cjs"],
  });
  return electronApp;
};

const main = async () => {
  console.log("before launch 1");
  const app1 = await launchApp();
  console.log("after launch 1");
  console.log("before launch 2");
  const app2 = await launchApp();
  console.log("after launch 2");
};

main();
