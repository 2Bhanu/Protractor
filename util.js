function customloc() {
    by.addLocator('ng_click',
        function (value,parentele){
        sel = "*[ng-click = '" + value + "']"
        console.log(sel)
        //using = parentele || document,
        elem = using.querySelectorAll(sel)
        console.log(elem)
        return elem
    })
}
module.exports = customloc