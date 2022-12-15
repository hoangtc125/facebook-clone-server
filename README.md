<p align="center">
    <image src="assets/images/social_network.png"></image>
</p>

## Run server
```
    $ npm install 
    $ cd api
    $ npm run server
```


## API
<hr>

### 1. Register
- **Type**: POST
- **Request**:
  
    ```
        {   
            "name": "thanh",
            "email": "thanh@gmail.com",
            "password": "thanh123"
        }
    ```
- **Respone**:
  
    ```
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            "user": {
                "id": "5f75eec6819376603e1874a5",
                "name": "thanh",
                "email": "thanh@gmail.com"
            }
        }
    ```

### 2. Login
- **Type**: POST
- **Request**:
  
    ```
        {   
            "email": "thanh@gmail.com",
            "password": "thanh123"
        }
    ```
- **Respone:**
  
    ```
        {
            "msg": "Login successfully",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
            "user": {
                "id": "5f75eec6819376603e1874a5",
                "name": "thanh",
                "email": "thanh@gmail.com"
        }
    }
    ```