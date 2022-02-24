p1n=localStorage.getItem("p1");
p2n=localStorage.getItem("p2");
p1score=0;
p2score=0;
document.getElementById("play1n").innerHTML=p1n+" : ";
document.getElementById("play2n").innerHTML=p2n+" : ";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("pq").innerHTML="Ask A Question : "+ p1n;
document.getElementById("pa").innerHTML="Answer The Question : "+ p2n;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("the word in lower case is : "+word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    dividelength=Math.floor(word.length/2);
    charAt2=word.charAt(dividelength);
    letter3=word.length-1;
    charAt3=word.charAt(letter3);
    remcharAt1=word.replace(charAt1,"_");
    remcharAt2=remcharAt1.replace(charAt2,"_");
    remcharAt3=remcharAt2.replace(charAt3,"_");
    console.log(charAt3);

    qword="<h3 id='display'>Question:  "+remcharAt3+"</h3>";
    displayinput="<br>Answer:  <input id='iaminput' type='text'>";
    subutton="<br><br> <button class='btn btn-primary' onclick='check()'>Check</button>";
     row=qword+displayinput+subutton;
     document.getElementById("result").innerHTML=row;
     document.getElementById("word").value="";
    }
playerq="p1";
playera="p2";
    function check(){
        getanswer=document.getElementById("iaminput").value;
        answer=getanswer.toLowerCase();
        console.log("answer in lower case:  "+answer);
        if(answer==word){
            if(playera=="p1"){
                p1score=p1score+1;
                document.getElementById("p1score").innerHTML=p1score;
            }
            else{
                p2score=p2score+1;
                document.getElementById("p2score").innerHTML=p2score;
            }
        }
        if(playerq=="p1"){
            playerq="p2";
            document.getElementById("pq").innerHTML="Question Turn:  "+p2n;
        }
        else{
            playerq="p1";
            document.getElementById("pq").innerHTML="Question Turn:   "+p1n;
        }
        if(playera=="p1"){
            playera="p2";
            document.getElementById("pa").innerHTML="Answer Turn:  "+p2n;
        }
        else{
            playera="p1";
            document.getElementById("pa").innerHTML="Answer Turn:  "+p1n;
        }
        document.getElementById("result").innerHTML="";
    }