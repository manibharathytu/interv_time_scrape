var timeScraper = require('./time-scraper')

function controller(req, res) {
    // console.log(req.url)
    if (req.url.includes('/getTimeStories')) {
        timeScraper(function controllerCb(data) {
            var response = res;
            response.write(data)
            res.end()
        })
    }
    else {
        res.write('This URL does not exist : '); 
        res.write(req.url); 
        res.end(); 
    }
}



module.exports = controller