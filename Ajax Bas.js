// Ajax

// (1) typing event
document.querySelector('#btn-load').addEventListener('click' , loadData)

function loadData() {
    // (2) create XMLHttpRequest
    const xhr = new XMLHttpRequest()

    // (3) open Request
    xhr.open('GET' , 'data.txt' , true)

    // (4) load Response
    xhr.onload = function() {
        console.log(this.status);
        console.log(this.readyState);

        if (this.status === 200 && this.readyState === 4){
            // 200 -> correct
            // 404 -> not found
            // 403 -> forbiden
            //-----------------
            // 0 -> unsent
            // 1 -> opened
            // 2 -> received
            // 3 -> loading
            // 4 -> done
            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // (5) send Request
    xhr.send()
}