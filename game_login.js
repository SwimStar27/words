function game(){
    player1n=document.getElementById("p1").value;
    player2n=document.getElementById("p2").value;
    localStorage.setItem("p1",player1n);
    localStorage.setItem("p2",player2n);
    window.location.replace("game_page.html");
}