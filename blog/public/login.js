document.getElementById("loginForm").addEventListener('submit', async function (evnet) {
    event.preventDefault();
    try {
        const Users = await fetch("http://localhost:8089/users");

        const act = await Users.json();
        let isUserAvailable = "";
        for (const x of await act.userCollection) {
            if (x.email === document.getElementById("email").value) {
                isUserAvailable = x;
                break;
            } else {
                isUserAvailable = "";
            }
        }

        if (await isUserAvailable != "") {
            if (isUserAvailable.password === document.getElementById('password').value) {
                sessionStorage.setItem('userName', isUserAvailable.name);
                window.location.href = "./blog.html"
            }
            else {
                document.getElementById('error').innerText = "Password Didnot Match"
            }
        }

        else {
            document.getElementById('error').innerText = "Email Not Found Please Signup"
        }
    } catch (err) {
        throw err;
    }
});

