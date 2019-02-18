function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// get
 easyHTTP.prototype.get = function (url, callback) {
    this.http.open('get', url, true);

    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200){
           callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send();
 }

// post

// put

// delete
