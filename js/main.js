let year_of_birth_day_input = document.querySelector(".age_input");
let calc_btn = document.querySelector(".calc");
let reset_btn = document.querySelector(".reset");
let container = document.querySelector(".container");

let year_dayes = 365;
let year = 2022;

/*
    Add Click To Calc Button And Cheak The Data From User
*/
calc_btn.addEventListener("click", (e) => {
    e.preventDefault();
//-------Cal_ Cheak_Data_function-------------
    cheak()
});
// ---------------Cal_Reset_Button_function-----------
    reset_click()

//-----------Cheak_Data_function----------------- 
function cheak(){
    if(year_of_birth_day_input.value === ""){
        container.innerHTML = `<p id="mseeg">Pleas Enter Data...😒</p>`
    }else if(year_of_birth_day_input.value > 2022){
        container.innerHTML = `<p id = "cheak">Enter a real Year...😒</p>`
    }else if(year_of_birth_day_input.value <= 0){
        container.innerHTML = `<p id = "cheak">enter year of birth day...😒</p>`
    }else{
        calc_end_result()
    }
}
// ------------End_Result_function-------------
function calc_end_result(){
            var calc_age =  year - year_of_birth_day_input.value;
            var calc_age_in_daye = calc_age * year_dayes;
            var calc_age_in_hour = calc_age_in_daye * 24;
            var calc_age_in_minute = calc_age_in_hour * 60;
            var calc_age_in_second = calc_age_in_minute * 60;
            var fainal_resulrt = `
        <p>your age is :- <span>${calc_age} year &#128519</span>  </p>
        <p>your age in day's is :- <span>${calc_age_in_daye} Day &#128518</span> </p>
        <p>your age in hour's is :- <span>${calc_age_in_hour} hour 😌</span> </p>
        <p>your age in minute's is :- <span>${calc_age_in_minute} minute 😐</span> </p>
        <p>your age in second's is :- <span>${calc_age_in_second} second 😑</span> </p>
        `;
    container.innerHTML = fainal_resulrt;
};
// ---------------Reset_Button_function--------------
function reset_click(){
    reset_btn.addEventListener("click", () => {
        container.innerHTML = `
        
            <p>your age is :- <span></span>  </p>
            <p>your age in day's is :- <span></span> </p>
            <p>your age in hour's is :- <span></span> </p>
            <p>your age in minute's is :- <span></span> </p>
            <p>your age in second's is :- <span></span> </p>
        
        `;
        });
};
