var isFound = false, isUser = null;
document.getElementsByClassName('submit')[0].addEventListener('mouseover',async function(){

    const User = await fetch('http://localhost:8089/users').then((use)=>{return use} ).catch((err)=>console.log(err));
    isFound = false, isUser = null;
    const action = await User.json();
    for(const x of await action.userCollection){
        if(x.email === document.getElementById('email').value){
            isFound = true;
            isUser = x;
            break;
        }
    }
})


document.getElementById("signup").addEventListener('submit', async function () {
    let isFoundUser = isUser;
           if(!isFound){
            const User = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }
            const response = await fetch('http://localhost:8089/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(User)
            }).then(()=>{window.location.href = "./loginSignup.html"}).catch((err)=>console.log(err));
             
        }else{
            window.location.href = "./loginSignup.html";
            alert("User Already Exists Please Try to Login");
           }
    })