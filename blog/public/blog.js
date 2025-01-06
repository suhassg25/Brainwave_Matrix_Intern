async function  ready(){

    const allPost = await fetch('http://localhost:8089/posts').then((all)=>{return all }).catch((err)=>console.log(err));
    const action = await allPost.json();
    const postElement =  document.getElementsByClassName('posts')[0];
await action.postCollection.forEach((postItem, id)=>{
     const newDiv = document.createElement('div');
     newDiv.className=`item${id}`;
    //  const img = document.createElement('img');
    //  img.src= postItem.post;
     const h2 = document.createElement('h2');
     h2.textContent = postItem.title;
     const p = document.createElement('p');
     p.textContent=postItem.content
     const btn = document.createElement('button');
     btn.textContent = "Delete";
     btn.className = `${postItem._id}`;
     btn.id = "deleteBtn";
        
    //  newDiv.appendChild(img)
     newDiv.appendChild(h2)
     newDiv.appendChild(p)
     newDiv.appendChild(btn);
postElement.appendChild(newDiv);
document.getElementsByClassName(`${postItem._id}`)[0].onclick = async function(){
    await fetch(`http://localhost:8089/posts/${postItem._id}`,{
        method : "DELETE"
    })
};

})      
    
}
ready();

