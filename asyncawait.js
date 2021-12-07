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

async function init(){
    await createPost( {title: 'Post three', content: 'This is post three'});

    getPosts();

   
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

 init();

document.addEventListener("DOMContentLoaded",()=>{
    console.log("hola")
})
