var a=Number(process.argv[2]);
var b=Number(process.argv[3]);
var ans="";
var s=a+b;
var h=Math.floor(s/3600);
s=s%3600;
var m=Math.floor(s/60);
s=s%60;
var a1 = [1,21,31,41,51];
var a2 = [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54];
if (h>0){
	ans+=h;
	if (a1.indexOf(h)>=0){ans += " час ";}
	else if (a2.indexOf(h)>=0){ans+= " часа ";}
	else ans+=" часов ";
}
if (m>0){
	ans+=m;
	if (a1.indexOf(m)>=0){ans += " минута ";}
	else if (a2.indexOf(m)>=0){ans+= " минуты ";}
	else ans+=" минут ";
}
if (s>0){
	ans+=s;
	if (a1.indexOf(s)>=0){ans += " секунда ";}
	else if (a2.indexOf(s)>=0){ans+= " секунды ";}
	else ans+=" секунд";
}
console.log(ans);
