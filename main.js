function saveData(){
    let name, email, phone;
    name = document.getElementById("username").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phonenumber").value;
    
    const obj = {
        name,
        email,
        phone
    }
    axios.post("https://crudcrud.com/api/baf1a158f0584e288fa753cbe833cbb1", obj).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}
