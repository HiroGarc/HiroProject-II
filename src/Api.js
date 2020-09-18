
// import SignIn from '../src/screens/SignIn';
// import 

const URL_API = 'http://192.168.0.26/BuscaApp';


export default () =>{

checkToken : async () => {

},

SignIn = async (email,password) => {
     const req = await fetch (`${URL_API}/`,{
          method:'POST',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({email,password})
            
          });
          // const json = await req.json();
          // return json;
     },
     
     

SignUp = async(nome_usuario,email,senha) => {
     const req = await fetch (`${URL_API}/usuario.php`,{
          method:'POST',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(
          {
               'nome_usuario' : nome_usuario,
               'email':email,
               'senha': senha,
            
          })
          // const json = await req.json();
          // return json;
         
     }).then(res=> res.json())
     .then(resData=>{
       
     }).catch((error) => {
          console.error(error);
        });
   
  
}



}






