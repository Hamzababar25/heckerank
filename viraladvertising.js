var n=3
var sum=0
var save=0
var share=5
for (var i=1;i<=n;i++)
{
    save=Math.floor(share/2)
    sum=sum+save
    share=save*3
    console.log(share)
}
