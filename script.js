function findGrade(){
    z = 0;
    d = 0;
    totalGrade = 0;

    console.log(convertStringToArrayNumber(document.getElementById("Homework Grades").value));
    hwGrade = avg(convertStringToArrayNumber(document.getElementById("Homework Grades").value));
    classworkGrade = avg(convertStringToArrayNumber(document.getElementById("Classwork Grades").value));
    testGrade = avg(convertStringToArrayNumber(document.getElementById("Test Grades").value));
    participationGrade = avg(convertStringToArrayNumber(document.getElementById("Participation Grades").value));
    projectGrade = avg(convertStringToArrayNumber(document.getElementById("Project Grades").value));
    console.log(d);
    if(z>0){
        document.getElementById("Grade1").innerHTML = "Must be all numbers";
        return;
    }
    if(d>0){
        document.getElementById("Grade1").innerHTML = "Real grades please";
            return;
    }
    if(isNaN(document.getElementById("Homework Weight").value + document.getElementById("Classwork Weight").value + document.getElementById("Test Weight").value
            + document.getElementById("Participation Weight").value + document.getElementById("Project Weight").value)){
        document.getElementById("Grade1").innerHTML = "Must be all numbers";
        return;
    }
    totalWeight = parseInt(document.getElementById("Homework Weight").value) + parseInt(document.getElementById("Classwork Weight").value) +
        parseInt(document.getElementById("Test Weight").value) + parseInt(document.getElementById("Participation Weight").value) +
        parseInt(document.getElementById("Project Weight").value);
    if(totalWeight > 100){
        document.getElementById("Grade1").innerHTML = "Total weights must not exceed 100";
        return 1;
    }

    var hwWeight = document.getElementById("Homework Weight").value / totalWeight;
    var classworkWeight = document.getElementById("Classwork Weight").value / totalWeight;
    var testWeight = document.getElementById("Test Weight").value / totalWeight;
    var participationWeight = document.getElementById("Participation Weight").value / totalWeight;
    var projectWeight = document.getElementById("Project Weight").value / totalWeight;
    console.log(hwWeight);

    color(document.getElementById("1"), hwGrade);
    color(document.getElementById("2"), classworkGrade);
    color(document.getElementById("3"), testGrade);
    color(document.getElementById("4"), participationGrade);
    color(document.getElementById("5"), projectGrade);
    totalGrade += hwGrade * hwWeight;
    totalGrade +=  classworkGrade * classworkWeight;
    totalGrade += testGrade * testWeight;
    totalGrade += participationGrade * participationWeight;
    totalGrade += projectGrade * projectWeight;
    totalGrade = Math.round(totalGrade * 100)/ 100;
    document.getElementById("Grade1").innerHTML = "Current Grade: " + totalGrade;
}

function color(x,y){
    if(y > 89){
        x.style.backgroundColor= "#00c000";
    }
    else if(y > 79){
        x.style.backgroundColor= "#38afe1";
    }
    else if(y > 69){
        x.style.backgroundColor= "#fce700";
    }
    else if(y > 59){
        x.style.backgroundColor= "#ff5d00";
    }else{
        x.style.backgroundColor= "#8b0000";
    }
}

function gradeNeeded(){
    if(isNaN(document.getElementById("Final Weight").value) === true){
        document.getElementById("finalGrade").innerHTML = "Must be all numbers";
        return;
    }
    var m = totalWeight + parseInt(document.getElementById("Final Weight").value);
    console.log(m);
    if(m !== 100){
        document.getElementById("finalGrade").innerHTML = "Total weights must add to 100";
        return;
    }
    var y = 100 - document.getElementById("Final Weight").value;
    var g = parseInt(document.getElementById("grade").value) - totalGrade * y / 100;
    console.log(g);
    var l = document.getElementById("Final Weight").value / 100;
    var final = g / l ;
    final = Math.round(final * 100) / 100;
    console.log(final);
    document.getElementById("finalGrade").innerHTML = "You need to get a " + final + "% in order to get your desired grade";
}

function convertStringToArrayNumber(h){
    var y = h.split(",");
    for(var i = 0; i < y.length; i++){
        if(isNaN(y[i])===true){
            z++;
        }
        y[i] = parseInt(y[i]);
         if(y[i] > 150){
            d++;
        }
    }
    return y;
}

function avg(z){
    var x = 0;
    for(var i = 0; i < z.length; i++){
        x += z[i];
    }
    x = x / z.length;
    return x;
}
