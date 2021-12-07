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

function createPost(post,callback){
    setTimeout( () => {
        posts.push(post);
        callback();
    },2000);
}


createPost( {title: 'Post three', content: 'This is post three'},getPosts);

