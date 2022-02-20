function s()
{

    var q1=document.f.q1.value;
    var q2=document.f.q2.value;
    var q3=document.f.q3.value;
    var correct=0;
    if(q1=="امنة بنت وهب")
    {
        correct++;
    }
    if(q2=="2هجرى")
    {
        correct++;
    }
    if(q3=="مرة")
    {
        correct++;
    }
    var pic=["win.gif","mid.gif","cry.gif"];
    var m=["رائع احسنت","جيد","حسبى الله و نعمة الوكيل"];
    var score;
    if(correct==0)
    {
        score=2;
    }
    if(correct>0&&correct<3)
    {
        score=1;
    }
    if(correct==3)
    {
        score=0
    }
    document.getElementById('re').style.visibility="visible";
    document.getElementById('result').innerHTML=m[score];
    document.getElementById('im').src=pic[score];
}