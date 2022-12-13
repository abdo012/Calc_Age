let select_day = document.querySelector(".day");
let select_month = document.getElementById("month");
let select_year = document.querySelector(".year");
let calc_btn = document.querySelector(".calc");
let reset_btn = document.querySelector(".reset");
let container = document.querySelector(".container");
let label = document.querySelector(".label");
let emoji_error = document.querySelector(".emoji-error");

// select_day.onfocus = function(){

// }
// After page load focus the input 
window.onload = function () {
    select_day.focus();
};
calc_btn.addEventListener("click", (e)=>{
    e.preventDefault();

    cheak();
})
// ---------------Cal_Reset_Button_function-----------
reset_click();

//----------- Cheak Data From User
function cheak() {
    let Year_cheak = new Date();
  // Cheak All Input is Empty Or Not
    if(select_day.value === "" && select_month.value === "" && select_year.value === ""){
        container.innerHTML = `<p id="mseeg">Pleas Enter Data...😒</p>`;
        select_day.classList.add("error");
        select_month.classList.add("error");
        select_year.classList.add("error");
        label.classList.add("label-error");
        emoji_error.style.display = "block";
        EndError()
    }
    // Cheak The Day Input
    else if(select_day.value === ""){
        select_day.classList.add("error");
        container.innerHTML = `<p id="mseeg">dont leave the field empty...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }else if(select_day.value < 1 || select_day.value > 31){
        select_day.classList.add("error")
        container.innerHTML = `<p id="mseeg">Pleas Enter A real Data...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
}
    // Cheak The Month Input
    else if(select_month.value === ""){
        select_month.classList.add("error");
        container.innerHTML = `<p id="mseeg">dont leave the field empty...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }
    // Cheak The Year Input
    else if(select_year.value === ""){
        select_year.classList.add("error");
        container.innerHTML = `<p id="mseeg">dont leave the field empty...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }
    else if(select_year.value < 1970){
        select_year.classList.add("error")
        container.innerHTML = `<p id="mseeg">enter a year greater than 1970...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }else if(select_year.value > Year_cheak.getFullYear()){
        select_year.classList.add("error")
        container.innerHTML = `<p id="mseeg">this year has not come yet...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }
    else {
    EndResult();
    };
};
function EndResult(){
    let data_from_user = `"${select_month.value} ${select_day.value} , ${select_year.value}" `;

    let birth_day = new Date(data_from_user);
    let new_date = new Date();
    let difference = new_date - birth_day;
    // Calc Age 
    let age = difference / 1000 / 60 / 60 / 24 / 365;
    // start calc month
    let reset_of_months = Number(age.toString().slice(3,5));
    let calc_month_reset = reset_of_months / 100 * 365;
    let month_reset = calc_month_reset / 31;
    // end
    let age_in_day = difference / 1000 / 60 / 60 / 24;
    let age_in_hours = difference / 1000 / 60 / 60;
    let age_in_minuts = difference / 1000 / 60 ;
    let age_in_second = difference / 1000;
    let fainal_resulrt = `
    <p>your age is : <span>${Math.trunc(age)} year and ${Math.trunc(month_reset)} month and a few days &#128519</span>  </p>
    <p>your birthDay after : <span>${Math.trunc(12 - month_reset)} month and a few days &#128519</span>  </p>
    <p>your age in day's is : <span>${Math.trunc(age_in_day)} Day &#128518</span> </p>
    <p>your age in hour's is : <span>${Math.trunc(age_in_hours)} hour 😌</span> </p>
    <p>your age in minute's is : <span>${Math.trunc(age_in_minuts)} minute 😐</span> </p>
    <p>your age in second's is : <span>${Math.trunc(age_in_second)} second 😑</span> </p>
    `;
    container.innerHTML = fainal_resulrt;
}



// ---------------Reset_Button_function--------------
function reset_click() {
    reset_btn.addEventListener("click", () => {
    container.innerHTML = `
                <p>your age is : <span></span>  </p>
                <p>your birthDay after : <span></span>  </p>
                <p>your age in day's is : <span></span> </p>
                <p>your age in hour's is : <span></span> </p>
                <p>your age in minute's is : <span></span> </p>
                <p>your age in second's is : <span></span> </p>
        `;
    });
};

// ----------End The Eror In 1 Second------------
function EndError(){
    setTimeout(()=>{
        select_day.classList.remove("error");
        select_month.classList.remove("error");
        select_year.classList.remove("error");
        label.classList.remove("label-error");
        emoji_error.style.display = "none";
    },700)
}