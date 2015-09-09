'use strict';

var express = require('express')
var path = require('path')
var Pageres = require('pageres')

var config = require('./config')
var app = express()

app
    .use('/screenshot', function (req, res) {
        var url = req.query.url
        if (!url) {
            return res.status(400).send('lack url')
        }
        var width = req.query.width || 800
        var delay = req.query.delay || 0
        var selector = req.query.selector

        var tempFileName = 'temp-' + Date.now()
        var pageres = new Pageres({
            filename: tempFileName,
            delay: delay,
            selector: selector || ''
        }).src(url, ['' + width + 'x400'])
          .dest(__dirname + '/output')

        pageres.run(function(err) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.sendFile(__dirname + '/output/' + tempFileName + '.png')
            }
        })
    })
    .use('/', function(req, res) {
        res.send('visit http://127.0.0.1:8099/screenshot?url=www.iqiyi.com to view the demo')
    })
    .listen(config.port, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log('server start at 0.0.0.0:' + config.port)
        }
    })