const http = new easyHTTP;

//get posts

const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err){
        console.log(err);
    } else {
         console.log(posts);
    }
});

//get single post

const posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(err){
        console.log(err);
    } else {
         console.log(post);
    }
});

//create data

const data = {
    title: 'custom post',
    body: 'custom post'
};
// Post post

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    } else {
         console.log(post);
    }
});

//Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err){
        console.log(err);
    } else {
         console.log(post);
    }
});



