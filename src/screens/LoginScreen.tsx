import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { loginModel } from '../models/login.model';
import  generalTheme  from '../theme/generalTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { loginProcess } from '../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: loginModel) => {
    dispatch(loginProcess(data));
  }

  const registerGoogle = () => console.log('Recordar contraseña');
  const rememberPassword = () => console.log('Recordar contraseña');
  const registerPage = () => console.log('Go to registrar');

  return (
      <View style={styles.container}>
          
          <View style={styles.boxLogin}>
            <Controller
              control={control}
              rules={{
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder='Email'
                  />
                  )}
                  name="email"
            />
            {errors.email?.type === 'required' && <Text style={{...generalTheme.errorMessages, paddingLeft: 15, marginTop: -5}}>Email is required</Text>}
            {errors?.email?.type === 'pattern' && <Text style={{...generalTheme.errorMessages, paddingLeft: 15, marginTop: -5}}>Please enter a valid email address</Text>}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={styles.input}
                onBlur={onBlur}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={onChange}
                value={value}
                />
                )}
                name="password"
                />
              {errors.password && <Text style={{...generalTheme.errorMessages, paddingLeft: 15, marginTop: -5}}>Password is required</Text>}

            <View style={{...styles.inlineLinks, paddingBottom: 20}}>
              <Text>¿Olvidaste tu contraseña? </Text><Text style={generalTheme.linkColor} onPress={rememberPassword}>Recuerdala aquí</Text>
            </View>

            <View style={{paddingTop: 20}}>
              <TouchableOpacity style={ generalTheme.buttons} onPress={handleSubmit(onSubmit)}>
                <Text style={generalTheme.buttonsText}> Login </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{...generalTheme.buttons, marginTop: 10, backgroundColor: '#db4437'}} onPress={registerGoogle}>
                <Text style={generalTheme.buttonsText}> Login with Google </Text>
              </TouchableOpacity>
            </View>

            <View style={{...styles.inlineLinks, paddingTop: 20}}>
              <Text>¿No tienes una cuenta? </Text><Text style={generalTheme.linkColor} onPress={registerPage}>Registrate aquí</Text>
            </View>
        </View>

      </View>
  );
};


const styles = StyleSheet.create({
    container : {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#0069d4'
    },
    input: {
      borderWidth: 1,
      borderColor: '#c5c5c5',
      borderRadius: 20,
      marginVertical: 10,
      paddingHorizontal: 20
    },
    boxLogin: {
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      padding: 30,
      marginHorizontal: 30
    },
    inlineLinks: {
      display: 'flex',
      alignSelf: 'center',
      flexDirection: 'row',
      
    }
});