---
theme: white
---

# XE Node.js
Daniele Morosinotto
[@dmorosinotto](https://twitter.com/dmorosinotto)

XE.NET Session 17 Feb 2017 - 
Repo: [https://github.com/dmorosinotto/XE_Nodejs](https://github.com/dmorosinotto/XE_Nodejs)

--

#AGENDA 
##Node.js Intro

- Download & install + LTS
- V8 + SingleThread/event loop
- NPM + package.json + semver
- require() "resolution algoritm"
- DEMOS
- Tips & Tricks

---

#LET'S START

Main site: [https://nodejs.org](https://nodejs.org/en/) + [Docs](https://nodejs.org/en/docs/)
\+ [Download](https://nodejs.org/en/download/) or use [NVM](https://github.com/creationix/nvm)

###LTS = [Long Term Support](https://github.com/nodejs/LTS#lts-schedule)
![LTS Schedule](https://raw.githubusercontent.com/nodejs/LTS/master/schedule.png)

---

##Node.js "definition"

Node.js® is a **JavaScript runtime** 
(_ndr: [ES6/2015](http://node.green/) full in v6.9.3+_) 
built on Chrome's **V8** JavaScript engine. 

Node.js uses an **event-driven**, **non-blocking I/O** model 
(_ndr: [event loop](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html) single thread_) 
that makes it lightweight and efficient. 

Node.js' package ecosystem, **NPM** (_ndr: 400K+ packages), 
is the largest ecosystem of open source libraries in the world.

---

# NPM

Main site: [https://www.npmjs.com/](https://www.npmjs.com/)

400K+ packages | 300M+ download/day | 7.5B+ download/month

--

## package.json
```
{
  "name": "my-first-node-pkg",
  "version": "1.0.0",
  "description": "My first nodejs package",
  "main": "index.js",
  "scripts": {
    "test": "cross-env ZERO=0 node calc.js"
  },
  "keywords": [...],
  "author": "Daniele Morosinotto (d.morosinotto@icloud.com)",
  "license": "MIT",
  "dependencies": {
    "colour.js": "^1.5.2"
  },
  "devDependencies": {
    "cross-env": "*"
  }
}
```

--

## SEMVER = [Semantic version](https://docs.npmjs.com/misc/semver)

#### Major.Minor.Patch ===
##Breaking.Feature.Fix

^1.2.0  --> 1.x.x NEVER 2.0

~1.3.2  --> 1.3.x NEVER 1.4

1.2.34  --> FIXED VERSION

"*"     --> ALWAYS LATEST

---

## require() 
[Module Resolution](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html) algoritm:
```
require(X) from module at path Y
1. If X is a core module,
   a. return the core module
   b. STOP
2. If X begins with './' or '/' or '../'
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
3. LOAD_NODE_MODULES(X, dirname(Y))
4. THROW "not found"
```

- LOAD_AS_FILE(X) = READ **"X"**, **"X.js"**, **"X.json"**, **"X.node"**
- LOAD_AS_DIRECTORY(X) = READ **"X/package.json"** and LOAD_AS_FILE(**.main**) , OR READ **"X/index.js"** , **"X/index.json"**, **"X/index.node"**
- LOAD_NODE_MODULES(X) = READ **"node_modules/X"** FROM currdir RECURSIVE UP TO ROOT "/"

--

calc.js
```
require("colour");
var add = require("./sum");
var op = require("./operations");
console.log( add( .1 , op.sub(3.2,3), '' ).rainbow );
```

operations.js
```
exports.sub = (a,b) => a-b;
exports.mul = function(x,y) { return x*y }
console.log("Javascript","WTF".red,"or","FTW?".green,"(ndr see IEEE 754)".underline.blue);
```

sum/index.js
```
module.exports = (...args) => 
    args.reduce( (s,i)=>s+i, require("./zero") );
```

sum/zero.js
```
const per = require("../operations").mul;
const THE_MEANING_OF_LIFE = per(42, parseInt(process.env.ZERO||0));
module.exports = exports = THE_MEANING_OF_LIFE;
```

---

# DEMOS

- [1-helloworld](1-helloworld/server.js)
- [2-staticfile](2-staticfile/index.js)
- [3-querystring](3-querystring/index.js)
- [4-restapi](4-restapi/index.js)
- [5-database](5-database/routes/customer/custdb.js) [router](5-database/routes/customer/index.js)
- [6-middleware](6-middleware/index.js) [myauth](5-database/myauth.js)
- [7-performance](package.json) npm test

--

## TIPS & Tricks

- Install different version of node side-by-syde:
[NVM](https://github.com/creationix/nvm) / [Win](https://github.com/coreybutler/nvm-windows);
- Fast and re-producible package installer: 
[yarn](https://yarnpkg.com/lang/en/); 
- Node runner live-reload + loadbalancer: [nodemon](https://nodemon.io/) / [pm2](http://pm2.keymetrics.io/); 
- Run/interop .NET and node.js: 
[edge.js](http://tjanczuk.github.io/edge/#/) / [JavaScriptServices](https://github.com/aspnet/JavaScriptServices) ; 
- Typescript REPL + run node project in TS: 
[ts-node](https://github.com/TypeStrong/ts-node); 
- Dubugging node application: 
[node debug](https://nodejs.org/api/debugger.html) / [—inspect](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.nbmuzm3ii);
- Easy (and free) deploy of node & docker application:
[now](https://zeit.co/now)

--

## FEEDBACK & CONTACT

[https://goo.gl/forms/KIluwHIJ8v9JSCXn1](https://goo.gl/forms/KIluwHIJ8v9JSCXn1)
![QRCODE](qrcode.jpg)

- Twitter [@dmorosinotto](https://twitter.com/dmorosinotto)
- Email [d.morosinotto@icloud.com](d.morosinotto@icloud.com)
- Repo [https://github.com/dmorosinotto/XE_Nodejs](https://github.com/dmorosinotto/XE_Nodejs)
