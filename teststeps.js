page = require('./page.js')

describe('sample bank page test', function (){

    beforeAll(function () {
        browser.get('http://www.way2automation.' +
            'com/angularjs-protractor/banking/#/login')
    })
    it('click cust log in', function () {
        page.clickcustomer()
        browser.sleep(3000)
        browser.takeScreenshot().then(function (image) {
            filesystem = require('fs')
            streamwr = filesystem.createWriteStream("screenshot.png")
            streamwr.write(image,'base64')
        })
    })

} )