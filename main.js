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
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/f711cf8e782c47b7bbc117d4c06a32e9/userDetails')
    .then((result) => {
        showUsers(result.data)
        console.log(result);

        for (var i = 0; i < result.data.length; i++){
            showUsers(result.data[i])
        }
    }).catch((err) => {
        console.log(err)
    });
})

function showUsers(user){
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';

    const parentNode = document.getElementById('listOfUser');
    const childHtml =`<li> ${user.name} | ${user.email} | ${user.phone} </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHtml;
}
