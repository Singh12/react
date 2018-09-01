var a,b,rest;

[a,b] = [10,20];
console.log(a);
console.log(b);

[d,e,...rests] = [10,20,30,40,50];
console.log(rests);
console.log(typeof(rests));

({s,f} = {a:10,b:30,c:30});
console.log(s);
console.log(f);