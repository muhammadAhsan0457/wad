var database = {
    user : "ali",
    password : "123"
}
var newsfeed =[
    {
        user: "usman",
        status: "i am happy today"
    },
    {
        user: "umer",
        status:"i am eating my fav"
    }
]
var un = prompt("Enter username")
var pass = prompt("Enter password")

if(un === database.user && database.password === pass)
{
    alert("successful")


}
else
{
    alert("wrong password")

}