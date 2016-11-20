var app = angular.module("contacts",["firebase"]);


app.controller("contactCtrl", function ($scope, $firebaseObject,$firebaseArray) {
var contacts=[];
    contacts[0]={name:"abhishek",email:"abhikori1994@gmail.com",phnumber:973849677};
    contacts[1]={name:"Rahul",email:"abhikori1994@gmail.com",phnumber:973849677};
    contacts[2]={name:"Rohith",email:"abhikori1994@gmail.com",phnumber:973849677};
    contacts[3]={name:"Raj",email:"abhikori1994@gmail.com",phnumber:973849677};
$scope.contacts=contacts;


    $scope.add= function (contact) {

        contacts.push(contact);
    }


});