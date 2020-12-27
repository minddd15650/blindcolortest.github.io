function check() {
    var c=0;
    var q1=document.quiz2.question1.value;
    var q2=document.quiz2.question2.value;
    var q3=document.quiz2.question3.value;
    var q4=document.quiz2.question4.value;
    var q5=document.quiz2.question5.value;
    var q6=document.quiz2.question6.value;
    var q7=document.quiz2.question7.value;
    var result=document.getElementById('result');
    var quiz2=document.getElementById("quiz2");
    if (q1=="29") {c++}
    if (q2=="3") {c++}
    if (q3=="74") {c++}
    if (q4=="ไม่สามารถอ่านได้") {c++}
    if (q5=="ไม่สามารถลากเส้นจาก X ไป X ได้") {c++}
    if (q6=="5") {c++}
    if (q7=="15") {c++}
    quiz2.style.display="none";

    if (c==7) {
        result.textContent="ยินดีด้วย ท่านไม่ได้เป็นตาบอดสี"
    } else {
        result.textContent="ท่านเป็นตาบอดสีแดง-เขียว"
    }


}