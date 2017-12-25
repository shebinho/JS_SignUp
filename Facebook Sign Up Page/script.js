function Contact(id, gender, firstName,lastName,email,password,birthday) {
    this.id = id;
    this.gender = gender;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;

}

function signUp(){
    var index = 1;
    var form = document.getElementById("contacts-form");
    var table = document.getElementById("contacts-table");
    var save = document.getElementById("contacts-op-save");

    
        this.init = function(){
        var self = this;
        form.addEventListener("sumbit", function(e) {
        e.preventDefault();
         var name = this.firstName.value;
         var gender = this.gender.value;
         var last_name = this.lastName;
         var email = this.email;
         var password = this.password;
         var birthday = this.birthday;
         var id = index;

         var contact = new Contact(id,gender,last_name,email,password,birthday);

         self.addRow(contact, contact.id,"save");
         
            this.reset();
            index++;
    });
    

    
}
var SignUp = new signUp();
SignUp.init();
