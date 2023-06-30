document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(".column")
    const home = document.querySelector("#home")
    home.classList.add("active")
    columns.forEach((column)=>{
        column.addEventListener("click", () => {
            columns.forEach((column)=>{
                column.classList.remove("active")
            })

            column.classList.add("active")
        })
    })
})