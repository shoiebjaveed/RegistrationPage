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

    axios.post('https://crudcrud.com/api/b1d9358ef6a448ea90d9b420eb0bd836/userDump', userDetails)
    .then((result) => {
        showUsers(result.data)
        console.log(result);
    }).catch((err) => {
        console.log(err)
    });
}
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/b1d9358ef6a448ea90d9b420eb0bd836/userDump')
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
    const childHtml =`<li id='${user._id}'> ${user.name} | ${user.email} | ${user.phone} 
                           <button onclick=deleteData('${user._id}')>Delete</button> 
                           </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHtml;
}

function deleteData(userId){
    axios.delete(`https://crudcrud.com/api/b1d9358ef6a448ea90d9b420eb0bd836/userDump/${userId}`)
    .then((result) => {
        deleteFromScreen(userId);
        console.log(result);
    }).catch((err) => {
        console.log(err)
    });
}

function deleteFromScreen(userId){
    const parentNode = document.getElementById('listOfUser');
    const childNodeToBeDeleted = document.getElementById(userId);
        if(childNodeToBeDeleted) {
            parentNode.removeChild(childNodeToBeDeleted);
            }
}
