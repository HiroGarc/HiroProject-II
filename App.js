import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStacks';
// import UserContextProvider from './src/contexts/userContext';



export default()=>{

return(
 
  // <UserContextProvider>

 <NavigationContainer>
  
  <MainStack/>
  

</NavigationContainer>
// </UserContextProvider>

);



}