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
        container.innerHTML = `<p id="mseeg">من فضلك ادخل البيانات...😒</p>`;
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
      container.innerHTML = `<p id="mseeg">لا تترك حقل الادخال فارغ...😒</p>`;
      emoji_error.style.display = "block";
      EndError()
    }else if(select_day.value < 1 || select_day.value > 31){
      select_day.classList.add("error")
      container.innerHTML = `<p id="mseeg"> من فضلك ادخل بيانات حقيقيه...😒</p>`;
      emoji_error.style.display = "block";
      EndError()
  }
    // Cheak The Month Input
    else if(select_month.value === ""){
      select_month.classList.add("error");
      container.innerHTML = `<p id="mseeg">لا تترك حقل الادخال فارغ...😒</p>`;
      emoji_error.style.display = "block";
      EndError()
    }
    // Cheak The Year Input
    else if(select_year.value === ""){
      select_year.classList.add("error");
      container.innerHTML = `<p id="mseeg">لا تترك حقل الادخال فارغ...😒</p>`;
      emoji_error.style.display = "block";
      EndError()
    }
    else if(select_year.value < 1970){
        select_year.classList.add("error")
        container.innerHTML = `<p id="mseeg">ادخل سنه اكبر من  1970...😒</p>`;
        emoji_error.style.display = "block";
        EndError()
    }else if(select_year.value > Year_cheak.getFullYear()){
      select_year.classList.add("error")
      container.innerHTML = `<p id="mseeg">هذه السنه لم تاتي بعد...😒</p>`;
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
    <p>عمرك هو : <span>${Math.trunc(age)} سنه و ${Math.trunc(month_reset)} شهور وبضعه ايام &#128519</span>  </p>
    <p>باقي علي عيد ميلادك القادم : <span>${Math.trunc(12 - month_reset)} شهر وبضعه ايام &#128519</span>  </p>
    <p>عمرك بالايام هو : <span>${Math.trunc(age_in_day)} يوم &#128518</span> </p>
    <p>عمرك بالساعات هو : <span>${Math.trunc(age_in_hours)} ساعه 😌</span> </p>
    <p>عمرك بالدقائق هو : <span>${Math.trunc(age_in_minuts)} دقيقه 😐</span> </p>
    <p>عمرك بالثواني هو : <span>${Math.trunc(age_in_second)} ثانيه 😑</span> </p>
    `;
    container.innerHTML = fainal_resulrt;
}



// ---------------Reset_Button_function--------------
function reset_click() {
    reset_btn.addEventListener("click", () => {
      container.innerHTML = `
          
      <p>عمرك هو : <span></span>  </p>
      <p>باقي علي عيد ميلادك القادم: <span></span>  </p>
      <p>عمرك بالايام هو : <span></span> </p>
      <p>عمرك بالساعات هو: <span></span> </p>
      <p>عمرك بالدقائق هو : <span></span> </p>
      <p>عمرك بالثواني هو : <span></span> </p>
          
          `;
    });
  };
  
// ----------End The Error In 1 Second------------
  function EndError(){
    setTimeout(()=>{
        select_day.classList.remove("error");
        select_month.classList.remove("error");
        select_year.classList.remove("error");
        label.classList.remove("label-error");
        emoji_error.style.display = "none";
    },700)
  }
