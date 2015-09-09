web-screenshot
===

A screenshot tool for web page.

web页面截图工具。

Usage
---

Install **NodeJS** and **NPM** first.

```
git clone git@github.com:yutingzhao1991/web-screenshot.git
cd web-screenshot
npm install
npm start
```

Then use can visit http://127.0.0.1:8099/screenshot?url=www.iqiyi.com to get a screenshot for iqiyi main page.

API
---

/screenshot accept params:

- url: the web site page, required.
- width: web page width, default is 800px.
- delay: number (seconds), delay before make the screenshot, it useful is the webpage need init with js.
- selector: like '#container', '.test' to assign element in the webpage which you want to make a screenshot.

