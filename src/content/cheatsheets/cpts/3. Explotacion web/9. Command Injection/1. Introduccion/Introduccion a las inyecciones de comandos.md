
Nos permite ejecutar comandos en el backend 

## Que son las inyecciones

Ocurren cuando una entrada controlada por el usuario es malinterpretada como parte de una consulta web o del codigo que se esta ejecutando

Tipos de inyecciones:

![[Pasted image 20260723120035.png]]


Otros: inyeccion LDAP, inyeccion NoSQL, inyeccion de cabeceras HTTP... Siempre que la entrada de un usuario se utilice dentro de una consulta sin ser sanetizada adecuadamente


## Inyecciones de comandos del SO

La entrada de usuario debe ir directa o indirectamente a una consulta web que ejecuta comandos del sistema

Todos los lenguajes de programacion tienen funciones que permiten ejecutar comandos en el sistema

#### PHP
Funciones: `exec, system, shell_exec, passthru o popen`

![[Pasted image 20260723120356.png]]

En este ejemplo permite a los usuarios crear un archivo .pdf en el directorio /tmp con el nombre del archivo seleccionado

Como al entrada filename es usada en el touch directamente sin ser sanetizada, la aplicacion web se vuelve vulnerable


#### NodeJS
Funciones: `child_process.exec o child_process.spawn`

![[Pasted image 20260723120625.png]]

En este ejemplo coge del GET el filename sin sanetizar para crear un archivo .txt en /tmp