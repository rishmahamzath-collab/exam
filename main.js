let users = []

if(sessionStorage.getItem('users')){
    users = JSON.parse(sessionStorage.getItem('users'))
    displayUserList();
}

userform.addEventListener('submit',(event)=>{
    event.preventDefault();

    const username = userName.value
    const useremail = userEmail.value
    const userphone = userPhone.value

    console.log(username,useremail,userphone);

    if(username && useremail && userphone){
        const editindex = editStatus.value
        if(editindex ==""){
            users.push({

                name: username,
                email: useremail,
                phone: userphone
            })
        }else{
            users[editindex]={

                name: username,
                email: useremail,
                phone: userphone
                
            }
        }
    }else{
        alert("Please fill the form Completely")
    }
    
    console.log(users);
    userform.reset();

    sessionStorage.setItem('users',JSON.stringify('users'))
    displayUserList();
})


function displayUserList(){
    tablebody.innerHTML ="";
    users.forEach((item,index)=>{
        tablebody.innerHTML+=` <tr>
                    <td>${index}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${index.phone}</td>
                    <td>
                    <button onclick="viewUser(${index})" class="btn btn-primary">View</button>
                    <button onclick="editUser(${index})" class="btn btn-warning">Edit</button>
                    <button onclick="deleteUser(${index})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>`
    })
}


function editUser(userIndex){
    const userDetails = users[userIndex]

    userName.value = userDetails.name
    userEmail.value = userDetails.email
    userPhone.value = userDetails.phone
    editStatus.value = userIndex
}

function deleteUser(userIndex){
    if(confirm("Are you sure, you want to delete your data")){
        users.splice(userIndex,1);


    sessionStorage.setItem('users',JSON.stringify('users'))
    displayUserList();

    }
}

