function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="45") {c++}
    if (q2=="7") {c++}
    if (q3=="ไม่สามารถอ่านได้") {c++}
    if (q4=="29") {c++}
    if (q5=="3") {c++}
    if (q6=="74") {c++}
    if (q7=="73") {c++}
    if (q8=="สามารถลากเส้นตามสีส้มจาก X ไป X ได้") {c++}
    if (q9=="7") {c++}
    if (q10=="16") {c++}
    quiz.style.display="none";

    if (c==10) {
        result.textContent="ยินดีด้วย ท่านไม่ได้เป็นตาบอดสี"
    } else {
        result.textContent="ท่านเป็นตาบอดสี"
    }


}