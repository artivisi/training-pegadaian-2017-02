# Implementasi OAuth 2 dengan Spring #

Konsep OAuth 2

![Konsep OAuth 2](img/konsep-oauth.jpg)

Flow Grant Type Authorization Code

![AuthCode](img/oauth-authcode.jpg)

Flow Grant Type Implicit

![Implicit](img/oauth-implicit.jpg)

Flow Grant Type Password

![Password](img/oauth-password.jpg)

Flow Grant Type Device

![Device](img/oauth-device.jpg)


## Authorization Server ##

Endpoints :

### Otorisasi / Mendapatkan Token ###

URL : [http://localhost:10000/oauth/authorize?client_id=aplikasiweb&response_type=code&redirect_uri=http://example.com](http://localhost:10000/oauth/authorize?client_id=aplikasiweb&response_type=code&redirect_uri=http://example.com)

![Auth Code 1](img/authcode-1.png)

### Menukar access code dengan access token ###

URL : http://localhost:10000/oauth/token

![Auth Code 2](img/authcode-2.png)
![Auth Code 3](img/authcode-3.png)
![Auth Code 4](img/authcode-4.png)
![Auth Code 5](img/authcode-5.png)

### Mengecek validitas dan informasi token ###

URL : http://localhost:10000/oauth/check_token

![Check Token 1](img/check-token-1.png)
![Check Token 2](img/check-token-2.png)
![Check Token 3](img/check-token-3.png)
![Check Token 4](img/check-token-4.png)

* Refresh Token

URL : http://localhost:10000/oauth/token

![Refresh Token 1](img/refresh-token-1.png)
![Refresh Token 2](img/refresh-token-2.png)


### Enable JWT ##

Generate dulu keypair yang tersimpan dalam keystore. Bisa dengan interaktif seperti ini

![Generate Keystore](img/generate.keypair.png)

Bisa juga dengan satu kali perintah seperti ini

```
keytool -genkeypair -alias jwt -keyalg RSA -dname "CN=Aplikasi Gadai, OU=Divisi Training, O=ArtiVisi, L=Jakarta, ST=Jakarta, C=ID" -keypass gadai123 -keystore src/main/resources/jwt.jks -storepass gadai123
```
