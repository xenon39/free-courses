s=process.argv[2];
n=Number(process.argv[3])%26;
var ans="";
for (var i=0;i<s.length;i++) {
    if (s.charCodeAt(i)>64 && s.charCodeAt(i)<91){
	ans+=String.fromCharCode((s.charCodeAt(i)-65+n)%26+65);
    }	
    else if (s.charCodeAt(i)>96 && s.charCodeAt(i)<123){
	ans+=String.fromCharCode((s.charCodeAt(i)-97+n)%26+97);
    }
    else ans+=s[i];
}
console.log(ans);
