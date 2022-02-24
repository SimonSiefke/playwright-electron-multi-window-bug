# Playwright electron multi window bug

```sh
git clone git@github.com:SimonSiefke/playwright-electron-multi-window-bug.git &&
cd playwright-electron-multi-window-bug &&
npm ci &&
node test.js
```

## Output

Sometimes this:

```
before launch 1
after launch 1
before launch 2
after launch 2
/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/chromium/crExecutionContext.js:67
    if (exceptionDetails) throw new js.JavaScriptErrorInEvaluate((0, _crProtocolHelper.getExceptionMessage)(exceptionDetails));
                                ^

JavaScriptErrorInEvaluate: illegal access
    at CRExecutionContext.rawEvaluateHandle (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/chromium/crExecutionContext.js:67:33)
    at runNextTicks (node:internal/process/task_queues:61:5)
    at processImmediate (node:internal/timers:437:9)
    at async evaluateExpression (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/javascript.js:221:25)
    at async CRSession.<anonymous> (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/electron/electron.js:87:13)
```

Sometimes this:

```
before launch 1
after launch 1
before launch 2
^C/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/electron/electron.js:177
        attemptToGracefullyClose: () => app.close(),
                                            ^

TypeError: Cannot read properties of undefined (reading 'close')
    at Object.attemptToGracefullyClose (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/electron/electron.js:177:45)
    at gracefullyClose (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/utils/processLauncher.js:159:19)
    at process.<anonymous> (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/utils/processLauncher.js:131:7)
    at process.emit (node:events:539:35)

Node.js v17.6.0
```

Sometimes this:

```
before launch 1
after launch 1
before launch 2
after launch 2
/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/chromium/crExecutionContext.js:146
  if (!js.isJavaScriptErrorInEvaluate(error) && !(0, _protocolError.isSessionClosedError)(error)) throw new Error('Execution context was destroyed, most likely because of a navigation.');
                                                                                                        ^

Error: Execution context was destroyed, most likely because of a navigation.
    at rewriteError (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/chromium/crExecutionContext.js:146:105)
    at async CRExecutionContext.rawEvaluateHandle (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/chromium/crExecutionContext.js:63:9)
    at async evaluateExpression (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/javascript.js:221:25)
    at async CRSession.<anonymous> (/tmp/playwright-electron-multi-window-bug/node_modules/playwright-core/lib/server/electron/electron.js:87:13)

Node.js v17.6.0
```

Sometimes this:

```
before launch 1
after launch 1
before launch 2
after launch 2
```
