import React,{useState} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import{
    Container,
    InputArea,
    BotaoLogin,
    TextoBotao,
    SignMessageButton,
    SignMessageText,
    SignMessageButtonTextSignUp,

} from './styles';
  
     import Api from '../../Api';


     import SignInput from '../../componentes/SignInput'; 

//  import MaquinaLogo from '../../assets/maquina lavar.svg';
    import PersonIcon from '../../assets/person.svg';
    import EmailIcon from'../../assets/email.svg';
    import LockIcon  from '../../assets/lock.svg';
    //import Api from '../../Api';

    export default()=>{
        
        const navigation=useNavigation();
        
        const[nomeField,setNomeField]= useState("");
        
        const[emailField,setEmailField]= useState("");
        
        const[passwordField,setPasswordField]= useState("");

        
        
        const ButtonLoginClick= async() => {
            if(nomeField != ''&& emailField !=''&&passwordField ){
                let json = await Api.SignUp(nomeField,emailField,passwordField);
                console.log(json);
                console.log('usuario cadastrado')
            }else{
                alert('obrigatorio preecher os campos');
            }

        }
        
        
        const MessageButtonClick =()=>{
            navigation.reset({
                routes:[{name:'SignIn'}]
            });

        }

    return(
    <Container>
    
       {/* <MaquinaLogo width = "100%" width ="160" />    */}
        <InputArea>
          
        <SignInput  IconSvg ={PersonIcon} 
            placeholder ="Digite o seu nome"
            value ={nomeField}
            onChangeText={text=>setNomeField(text)}
           />
        
          
          <SignInput  IconSvg ={EmailIcon}
            placeholder ="Digite o seu email"
            value ={emailField}
            onChangeText={text=>setEmailField(text)}
           />
        
        <SignInput IconSvg ={LockIcon}
            placeholder ="Digite a sua senha"
            value ={passwordField}
            onChangeText={text=>setPasswordField(text)}
            password ={true}
        />  

        

        <BotaoLogin onPress={ButtonLoginClick}>
            <TextoBotao>CADASTRAR</TextoBotao>
        </BotaoLogin>

        </InputArea>
        <SignMessageButton onPress={MessageButtonClick}>
        <SignMessageText>já  tens uma conta?</SignMessageText>
        <SignMessageButtonTextSignUp>Faça Login</SignMessageButtonTextSignUp>
        </SignMessageButton>
    
    </Container>
    
    );
}