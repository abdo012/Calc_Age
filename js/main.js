let year_of_birth_day_input = document.querySelector(".age_input");
// let calc_btn = document.querySelector(".calc");
let reset_btn = document.querySelector(".reset");
let form = document.querySelector("form");
let container = document.querySelector(".container");
// console.log(age_input.value)

let year_dayes = 365;
let year = 2022;
// let hour_day = 24;
// let hour_minute = 60;
// let hour_secon = 60;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(year_of_birth_day_input.value === ""){
        container.innerHTML = `<p id="mseeg">Pleas Enter Data...😒</p>`
    }else{
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
    }

    // reset button
    reset_btn.addEventListener("click", () => {
    container.innerHTML = `
    
        <p>your age is :- <span></span>  </p>
        <p>your age in day's is :- <span></span> </p>
        <p>your age in hour's is :- <span></span> </p>
        <p>your age in minute's is :- <span></span> </p>
        <p>your age in second's is :- <span></span> </p>
    
    `;
    });
});
