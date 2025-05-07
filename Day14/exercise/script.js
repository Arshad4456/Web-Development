console.log("Exercise Hacker's Simulator")


async function getdata() {
    return new Promise((resolve, reject) => {
        const randomDelay = Math.floor(Math.random() * 7000) + 1000;


        setTimeout(() => {
            console.log("Initializing Hacking...")
            console.log("Reading Your Files...")
            console.log("Password Files Detected...")
            console.log("Sending all Passwords and Personal Files to Server...")
            console.log("Cleaning up...")
            console.log(randomDelay)
            resolve("now it's done")


            let html = `<p class="loading">Initializing Hacking</p>
    <p class="loading">Reading Your Files</p>
    <p class="loading">Password Files Detected</p>
    <p class="loading">Sending all Passwords and Personal Files to Server</p>
    <p class="loading">Cleaning up</p>`;
    
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
        }, randomDelay);

    })
}

async function main() {

    let data = await getdata()
    console.log(data);
}

main();