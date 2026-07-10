
Realizamos un escaneo de puestos basico

![[Pasted image 20260326142725.png]]

Vamos a ver la pagina web para saber a lo que nos enfrentamos y encontramos el CMS GetSimple

![[Pasted image 20260326142924.png]]![[Pasted image 20260326143024.png]]

Hemos visto que tiene un /robots.txt con un /admin/
![[Pasted image 20260326143102.png]]
![[Pasted image 20260326143148.png]]


Vamos a enumerar directorios con gobuster antes de intentar nada de fuerza bruta a ver si encontramos info:

![[Pasted image 20260326143439.png]]

En /data/users/admin.xml encontramos lo que parece ser un hash y un usuario admin:

![[Pasted image 20260326171654.png]]

![[Pasted image 20260326173132.png]]


Encontramos las credenciales admin:admin por lo que intentamos entrar al cms por el panel de login admin

![[Pasted image 20260326173210.png]]

Dentro vemos que se trata de la version GetSimple 3.5.15

![[Pasted image 20260326173229.png]]

Buscamos vulns con searchsploit

![[Pasted image 20260326173339.png]]

Buscamso en internet a ver si encontramos algo

![[Pasted image 20260326173355.png]]

Aqui como hemos visto hay una vulnerabilidad en MSF que podemos automatizar

![[Pasted image 20260326173435.png]]
![[Pasted image 20260326181041.png]]![[Pasted image 20260326181005.png]]

Vemos que no es vulnerable de esta forma.

Pero vamos a hacer de forma manual:

![[Pasted image 20260326173915.png]]![[Pasted image 20260326174001.png]]![[Pasted image 20260326174011.png]]![[Pasted image 20260326174153.png]]![[Pasted image 20260326174238.png]]

Como hemos visto no nos deja abrirlo directamente (es debido al codigo php anterior), probamos con un reverse shell directamente borrando todo el contenido

![[Pasted image 20260326174759.png]]![[Pasted image 20260326174456.png]]

Abrimos un listener

![[Pasted image 20260326174510.png]]![[Pasted image 20260326174911.png]]

Estamos dentro y conseguimos la primera flag

![[Pasted image 20260326174843.png]]


Escala de privs

Podemos usar php como sudo sin contraseña, por lo que podemos crear un reverse shell php y ejecutarlo con privs de root

![[Pasted image 20260326180244.png]]
![[Pasted image 20260326175557.png]]

Antes abrimos nuestro listener

![[Pasted image 20260326175635.png|341]]

Ejecutamos el shell

![[Pasted image 20260326175605.png]]

Obtenemos el shell root y obtenemos la ultima flag

![[Pasted image 20260326175617.png]]

![[Pasted image 20260326175743.png]]