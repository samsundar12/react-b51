function App(){
  const user=["sam sundar","pavi","priya","vijay","praveen"]
  return <>
{
  user.map((ele)=>{
    return<>
    <h1>welcome to {ele}</h1>
    </>
  })
}  </>
 
}
export default App