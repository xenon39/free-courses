n=Number(process.argv[2]);
e=Number(process.argv[3]);
var s=0;
for (var i=1;i<=n;i++){
    s+=Math.pow(i,e);
}
console.log(s);
