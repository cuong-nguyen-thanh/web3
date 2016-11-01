function longRunningOperation(callback) {
    // simulate a 3 second operation
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function() {
        console.log('ending a long operation for request:', request.id);
    });
}

// simulate a web requests
webRequest({ id: 1 });
webRequest({ id: 2 });
webRequest({ id: 3 });
webRequest({ id: 4 });
webRequest({ id: 5 });
webRequest({ id: 6 });
