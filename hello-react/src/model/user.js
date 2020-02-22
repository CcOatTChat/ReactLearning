 let user = {
    userid : '',
    firstname :'',
    lastname :'',
    birthday : '',
    email : ''
}

const clearData =() => {
    this.user.firstname = "";
    this.user.lastname = "";
    this.user.birthday = "";
    this.user.email = "";
  }

export default {
    user,
    clearData
}
 
  