function leapYear(year){
    var result, year; 
    year = parseInt(document.getElementById("leapYear_value").value);
    result=((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    
    document.getElementById("display_result").innerHTML= result;
};

