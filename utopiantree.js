function utopianTree(n) {
    // Write your code here
    var total=0
     var sum=0
     var mul=0
    for(let i=0;i<=n;i++)
    {
        if(i%2==0)
        {
            sum=sum+1
            
        }
        else if(i%2!=0)
        {
        sum=sum*2
        }
    }
  // var g=`${sum}\n${mul}`
//return (sum)