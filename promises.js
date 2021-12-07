const posts=[
    {title: 'Post one', content: 'This is port one'},
    {title: 'Post two', content: 'This is port two'}
];

function getPosts(){
    setTimeout( () => {
        let output='';
        posts.forEach( (post) => {
        output += `<li>${post.title}</li>`
    });
    document.body.innerHTML=output;
    },1000)
}

function createPost(post){
    return new Promise (function (resolve, reject){
        setTimeout( function () {
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            }
            else{
                reject("Ha habido un error")
            }
        },2000);
    })
}


createPost( {title: 'Post three', content: 'This is post three'})
.then(function(){
    getPosts();
});

