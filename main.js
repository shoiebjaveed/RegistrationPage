function saveData(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;

    const userDetails = {
        name,
        email,
        phonenumber
    }
    axios.post('https://crudcrud.com/api/8e3846a9d2db48b9b82d2c24168cdb12/userDump',userDetails)
    .then((result)=>{
        showUsers(result.data)
        console.log(result)
    })
    .catch((err)=>{
        console.log(err);
}
    )}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/8e3846a9d2db48b9b82d2c24168cdb12/userDump',this.userDetails)
    .then((result)=>{
        console.log(result)

        for(var i = 0; i < result.data.length; i++){
            showUsers(result.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

function showUsers(user){
    
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';

    
    deleteFromScreen()

    const parentNode = document.getElementById('listOfUser');
    const childHTML = `<li id=${user._id}> ${user.name} | ${user.email} | ${user.phonenumber}
                            <button onclick=deleteData('${user._id}')> Delete </button>
                            <button onclick=editUser('${user.name}','${user.name}','${user.phonenumber}')> Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(name, email, phonenumber, userId){

    document.getElementById('username').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phonenumber').value = phonenumber;

    deleteData(userId);
 }

function deleteData(userId){
    axios.delete(`https://crudcrud.com/api/8e3846a9d2db48b9b82d2c24168cdb12/userDump/${userId}`)

    .then((result)=>{
        deleteFromScreen(userId);
        console.log(result);
    })
    .catch((err)=>{
        console.log(err)
    })

}

function deleteFromScreen(userId){
    const parentNode = document.getElementById('listOfUser');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
