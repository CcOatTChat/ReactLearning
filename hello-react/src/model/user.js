 let user = {
    userid : '',
    firstname :'',
    lastname :'',
    birthday : '',
    email : ''
}

const clearData =() => {
    user.firstname = "";
    user.lastname = "";
    user.birthday = "";
    user.email = "";
  }

export default {
    user,
    clearData
}
 
  