let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let search = document.querySelector(".bx-search");

btn.onclick= function()
{
    //activo y desactivo el menu
    sidebar.classList.toggle("active");
}
search.onclick= function()
{
    //activo y desactivo el menu
    sidebar.classList.toggle("active");
}