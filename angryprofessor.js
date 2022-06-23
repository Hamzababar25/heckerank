function angryProfessor(k, a) {
    // Write your code here
   var neg=0
    for(let i=0;i<a.length;i++)
    {
    if(a[i]<=0)
    {
        neg=neg+1
    }
    console.log(neg)
    }
    if(neg>=k)
    {
        return "NO"
    }
    else{
        return "YES"
    }

}