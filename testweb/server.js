const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

let router = express.Router()

app.use(express.json())

let db = [
  { id: '1', title: 'hello1', body: 'balbalbcal' },
  { id: '2', title: 'hello2', body: 'balbalbcal' },
  { id: '3', title: 'hello3', body: 'balbalbcal' },
  { id: '4', title: 'hello4', body: 'balbalbcal' },
]

router.route('/posts')
  .get((req, res) => {
    res.send(db)
  })
  .post((req, res) => {
    db.push(req.body)
    res.send(201)
    res.end()
  })

router.route('/posts/:id')
  .get((req, res) => {
    const ret = db.find((e) => e.id === req.params.id)
    if (ret)
      res.send(ret)
    else
      res.status(404).end()
  })
  .put((req, res) => {
    const ret = db.find((e) => e.id === req.params.id)
    if (ret) {
      db = db.map((e) => {
        if (e.id === req.params.id) {
          return req.body
        }
        else {
          return e
        }
      })
      res.status(204)
      res.end()
    }
    else {
      res.status(404).end()
    }
  })
  .delete((req, res) => {
    const ret = db.find((e) => e.id === req.params.id)
    if (ret) {
      db = db.map((e) => {
        if (e.id === req.params.id) {
          return req.body
        }
        else {
          return e
        }
      })
      res.status(202)
      res.end()
    }
    else {
      res.status(404).end()
    }
  })

app.use(router)

//app.use(express.static(path.join(__dirname, 'static')))

// app.get('/', (req, res) => {
//     console.log(req.headers)
//     console.log(path.join(__dirname, 'static', 'index.html'))
//     // const content = fs.readFileSync(path.join(__dirname, 'static', 'index.html'), 'utf-8')
//     // res.send(content)
// })


app.listen(3000)

/*    
constpath = require('path');
constfs = require('fs');
consthttp = require('http');
consthttps = require('https');
constexpress = require('express');
constapp = express();
constkey = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.key'));
constcert = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.crt'));
constoptions = {​​
key:key,
cert:cert
}​​;
app.get('/', (req, res) => {​​
res.sendFile(path.join(__dirname, 'static/index.html'));
}​​);
constserver = https.createServer(options, app)
server.listen(4443, () => {​​
console.log('server listen on https://localhost:4443')
  }​​);
*/