
import { Stack } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';



export default function AuthLayout() {

  return (
 
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="forgetpassword" options={{ headerShown: false }} />
        <Stack.Screen name="emailverification" options={{ headerShown: false }} />
       
      </Stack>

  );
}
