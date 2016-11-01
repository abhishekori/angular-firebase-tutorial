/**
 * Created by abhishek on 1/11/16.
 */
var app = angular.module("contacts",["firebase"]);


app.controller("contactCtrl", function ($scope, $firebaseObject,$firebaseArray) {
//var contacts=[];
//    contacts[0]={name:"abhishek",email:"abhikori1994@gmail.com",phnumber:973849677};
//    contacts[1]={name:"Rahul",email:"abhikori1994@gmail.com",phnumber:973849677};
//    contacts[2]={name:"Rohith",email:"abhikori1994@gmail.com",phnumber:973849677};
//    contacts[3]={name:"Raj",email:"abhikori1994@gmail.com",phnumber:973849677};
//$scope.contacts=contacts;
//console.log(contacts);

    var ref= firebase.database().ref().child("contacts");
     $scope.contacts=$firebaseArray(ref);



    $scope.add=function(contact){
        console.log("add");
        $scope.contacts.$add({
            name:contact.name,
            email:contact.email,
            phnumber:contact.phnumber
        });
        $scope.contact=null;
    };
   // $scope.contacts=$firebaseArray(ref);
});