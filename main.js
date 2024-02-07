//Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data")
getButton.onclick = function(){
    getRepos()
}
//Get Repos Function
function getRepos(){
 if (theInput.value == "") {   //if value is empty
    reposData.innerHTML = "<span>please write github username.</span>";


}
else {
    fetch('https://api.github.com/users/ElzeroWebSchool/repos')
	.then((response) => response.json())
	.then((repositories)=>{
console.log(repositories)
reposData.innerHTML = ''
})
}
}
