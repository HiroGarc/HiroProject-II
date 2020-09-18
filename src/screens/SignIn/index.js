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
  
    import SignInput from '../../componentes/SignInput'; 

 import MaquinaLogo from '../../assets/maquina lavar.svg';
    import EmailIcon from'../../assets/email.svg';
     import LockIcon  from '../../assets/lock.svg';


    export default()=>{
        
        const navigation=useNavigation();
        
        const[emailField,setEmailField]= useState("");
        
        const[passwordField,setPasswordField]= useState("");
        
        
        const ButtonLoginClick=()=>{

        }
        
        
        const MessageButtonClick =()=>{
            navigation.reset({
                routes:[{name:'SignUp'}]
            });

        }

    return(
    <Container>
    
       <MaquinaLogo width = "100%" width ="160" />    
        <InputArea>
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
            <TextoBotao>LOGIN</TextoBotao>
        </BotaoLogin>

        </InputArea>
        <SignMessageButton onPress={MessageButtonClick}>
        <SignMessageText>Ainda nao tens uma conta?</SignMessageText>
        <SignMessageButtonTextSignUp>Cadastre-se</SignMessageButtonTextSignUp>
        </SignMessageButton>
    
    </Container>
    
    );
}