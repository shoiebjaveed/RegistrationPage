function saveData(event){
    event.preventDefault()
    let name, email, phone;
    name = event.target.username.value;
    email = event.target.email.value;
    phone = event.target.phonenumber.value;
    
    let userDetails = {
        name,
        email,
        phone
    };

    axios.post('https://crudcrud.com/api/f711cf8e782c47b7bbc117d4c06a32e9/userDetails', userDetails)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err)
    });

}
