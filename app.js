// JSON javascript object notation
// Ajax Json

document.querySelector('#btn-load').addEventListener('click' , loadDataE)
document.querySelector('#btn-loads').addEventListener('click' , loadDataES)

function loadDataE() {
    const xhr = new  XMLHttpRequest()

    xhr.open('GET' , 'employee.json' , true)

    xhr.onload = function() {
        if (this.status === 200) {
            const Response = JSON.parse(this.responseText)
            const output = `
            <ul>
                <li>ID: ${Response.id}</li>
                <li>Name: ${Response.name}</li>
                <li>Age: ${Response.age}</li>
                <li>Job: ${Response.job}</li>
            </ul>
            `
            document.querySelector('#output').innerHTML = output
        }
    }

    xhr.send()

}

function loadDataES() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET' , 'employeeS.json' , true)

    xhr.onload = function() {
        if (this.status == 200) {
            const Response = JSON.parse(this.responseText)
            let output = ''
            Response.forEach(employee => {
                output +=`
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Age: ${employee.age}</li>
                    <li>Job: ${employee.job}</li>
                </ul>

                `
            });
            document.querySelector('#output').innerHTML = output
        }
    }

    xhr.send()
}