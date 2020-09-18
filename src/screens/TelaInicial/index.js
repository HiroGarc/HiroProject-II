       import React,{useEffect} from 'react';
       import {Container,LoadingIcon} from './styles';
       import AsyncStorage from '@react-native-community/async-storage';
       import{useNavigation} from '@react-navigation/native';
        import MaquinaLogo from '../../assets/maquina lavar.svg'

       export default ()=>{
              const navigation = useNavigation();

       useEffect(()=>{
       const checkToken = async()=>{
              const token = await AsyncStorage.getItem('token');
              if(token !==null){

              }else{
                navigation.navigate('SignIn');

              }

       }
              checkToken();
       },[]);
           
            return(
               <Container>
        
        <MaquinaLogo width = "100%" height ="160" /> 

       <LoadingIcon size ="large" color= "#FFFFFF"  />

       

        </Container>

       );

       }