window.run = function() {
  function templateIfy(str,t,obj=false) {
    if (t<1) return;
    let res="";
    for(let i=0; i<t; i++) res+="`${";
    obj?res+=str:res+="`"+str+"`";
    for(let i=0; i<t; i++)res+="}`";
    return res;
  }
  $=s=>document.getElementById(s);
  $("res").innerHTML=templateIfy($("code").value,$("n").value);
  $("res").style='';
  $("cp").style='';
}
