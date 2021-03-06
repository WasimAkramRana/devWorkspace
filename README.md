DEMO4U DEV/v1.0.2 
            
            `NODE`    : 8.x.x  
            `NPM`     : 5.x.x  
            `MySQL`   : 5.5.58  
            `Base URL`: http://localhost:3090  
            `Version` : DEV/v1.0.2
## 1. User / Signup 
>## `POST` */signup* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _nickName_       | `NO`       | _`String`_ | NONE          |
| _password_       | `NO`       | _`String`_ | NONE          |
| _emailId_       | `NO`       | _`String`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user want to login into tryME4U app. This API is use to provide the TryME4U app access to the registered user.
### ***Request***
`Header` 
""
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/signup",
    method: "POST",
    contentType: "application/json"
    data: {
	"nickName": "example",
	"password": "example",
	"emailId": "example@unknown.com"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"message": "Congratulations! You have been successfully registered"
}
```
`401`
```
{
	"status": "error",
	"message": "Something went wrong !!"
}
``` 
***

## 2. User / Login 
>## `POST` */login* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _password_       | `NO`       | _`String`_ | NONE          |
| _emailId_       | `NO`       | _`String`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user want to login into the app. This API is use to provide the TryME4U app access to the registered user.
### ***Request***
`Header` 
""
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/login",
    method: "POST",
    contentType: "application/json"
    data: {
	"password": "example",
	"emailId": "example@unknown.com"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"access-token": "Bearer~eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsIjoidmFzaW1yYW5hQG1vYmlsZXByb2dyYW1taW5nLm5ldCIsIm5pY2tOYW1lIjoidmFzaW1yYW5hIiwiZXhwIjoxNTA5NDUwNjMwLCJpYXQiOjE1MDkzNjQyMzB9.HzYluiaum0tfW3ntUF7kwlm1KiPndlercDVotSpVEGw"
}
```
`401`
```
{
	"status": "error",
	"message": "Something went wrong !!"
}
``` 
***

## 3. User / refreshToken 
>## `POST` */refreshToken* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _access-token_       | `NO`       | _`String`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user want to refresh token for TryME4U app resource access. In this API user send the current valid token for new refresh token so that user can get the access tryME4U resource for next 24 hrs.
### ***Request***
`Header` 
{"x-access-token":"Bearer~eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsIjoicHJhbmF5S2F0aXlhckBtb2JpbGVwcm9ncmFtbWluZy5jb20iLCJuaWNrTmFtZSI6InByYW5heUthdGl5YXIiLCJleHAiOjE1MDk0NTUxNzIsImlhdCI6MTUwOTM2ODc3Mn0.uIo9IFXs4ciG-cQ0hOM8C6D10ZiwMRhzCEAjrDKvSPo"}
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/refreshToken",
    method: "POST",
    contentType: "application/json"
    data: {
	"access-token": "Bearer~eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsI"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"access-token": "Bearer~eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsIjoidmFzaW1yYW5hQG1vYmlsZXByb2dyYW1taW5nLm5ldCIsIm5pY2tOYW1lIjoidmFzaW1yYW5hIiwiZXhwIjoxNTA5NDUwODkwLCJpYXQiOjE1MDkzNjQ0OTB9.0h_uwhwaY_5cBRaN25sX-2Ai4IMa_RZe8lg7Aa8at-w"
}
```
`401`
```
{
	"status": "error",
	"message": "Something went wrong !!"
}
``` 
***

## 4. User / changePassword 
>## `POST` */changePassword* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _oldPassword_       | `NO`       | _`String`_ | NONE          |
| _newPassword_       | `NO`       | _`String`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user want to change his password. In this API user send the old password and new passord which they want to change
### ***Request***
`Header` 
{"x-access-token":"Bearer~eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsIjoicHJhbmF5S2F0aXlhckBtb2JpbGVwcm9ncmFtbWluZy5jb20iLCJuaWNrTmFtZSI6InByYW5heUthdGl5YXIiLCJleHAiOjE1MDk0NTUxNzIsImlhdCI6MTUwOTM2ODc3Mn0.uIo9IFXs4ciG-cQ0hOM8C6D10ZiwMRhzCEAjrDKvSPo"}
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/changePassword",
    method: "POST",
    contentType: "application/json"
    data: {
	"oldPassword": "abcd",
	"newPassword": "abcd2"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"message": "Password successfully changed"
}
```
`401`
```
{
	"status": "error",
	"message": "Something went wrong !!"
}
``` 
***

## 5. User / forgotPassword 
>## `POST` */forgotPassword* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _emailId_       | `NO`       | _`email`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user forgot his password and he want to reset his password. In this API user enter the registerd email address and then hit the forgot password API. After that user go to his email inbox and click on the password reset link
### ***Request***
`Header` 
""
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/forgotPassword",
    method: "POST",
    contentType: "application/json"
    data: {
	"emailId": "abcd@mobileprogramming.net"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"message": "Email successfully send to the user email address"
}
```
`401`
```
{
	"status": "error",
	"message": "Email address is not available"
}
``` 
***

## 6. User / resetPassword 
>## `POST` */resetPassword* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _emailId_       | `NO`       | _`email`_ | NONE          |
| _resetPassword_       | `NO`       | _`password`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user forgot his password and he want to reset his password. In this API user provide the reset password after click on the reset password link.
### ***Request***
`Header` 
""
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/resetPassword",
    method: "POST",
    contentType: "application/json"
    data: {
	"emailId": "abcd@mobileprogramming.net",
	"resetPassword": "@123welcome"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"message": "Your Password Successfully Reset"
}
```
`401`
```
{
	"status": "error",
	"message": "Your Password Reset Request Failed"
}
``` 
***

## 7. User / userSettings 
>## `PUT` */userSettings* 
### ***Prameters***
| Parameters       | Optional   | Type       | Default Value | 
|---------------:  |-----------:|------------|---------------|
| _nickName_       | `NO`       | _`userName`_ | NONE          |
| _chatbotName_       | `NO`       | _`userName`_ | NONE          |
| _imageName_       | `NO`       | _`text`_ | NONE          |
| _action_       | `NO`       | _`text`_ | NONE          |
|                  |            |            |               |

### ***Description***
This API is execute when user want to update their setting details
### ***Request***
`Header` 
""
```
{
    path: "http://localhost:3090/vDEV/v1.0.2/userSettings",
    method: "PUT",
    contentType: "application/json"
    data: {
	"nickName": "alpha",
	"chatbotName": "robo",
	"imageName": "profile"
},
    timeout: 15000
}
```
### ***Response***
`Content-Type` : _application/json_

`200`
```
{
	"status": "success",
	"message": "Profile picture successfully uploaded"
}
```
```
{
	"status": "success",
	"message": "User settings successfully changed"
}
```
`401`
```
{
	"status": "error",
	"message": "Failed to upload the profile picture.Please try again!"
}
```
```
{
	"status": "error",
	"message": "User profile image not available !!"
}
```
```
{
	"status": "error",
	"message": "Something went wrong !!"
}
```
```
{
	"status": "error",
	"message": "No token provided"
}
``` 
***
