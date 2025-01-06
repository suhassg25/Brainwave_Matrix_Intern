document.getElementById('createPostForm').addEventListener('submit', async function () {
    const Data = {
        post: "",
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    }
    await fetch("http://localhost:8089/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
    }).then(() => {window.location.href = "./blog.html"}).catch((err) => console.log(err))


});