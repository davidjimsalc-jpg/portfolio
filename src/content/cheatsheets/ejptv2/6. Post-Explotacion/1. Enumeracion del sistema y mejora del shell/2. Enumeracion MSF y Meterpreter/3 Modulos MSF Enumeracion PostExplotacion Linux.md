
* post/linux/gather/enum_config

| search enum_config                |                                                 |
| --------------------------------- | ----------------------------------------------- |
| use post/linux/gather/enum_config | Recopila los archivos de configuracion de Linux |
| show options                      |                                                 |
| set session N                     |                                                 |
| run                               | Los verdes son los que existen                  |
| loot                              | Veremos los archivos                            |
| cat /archivo                      | Leemos uno                                      |

- post/linux/gather/env

| search type:post platform:linux env |                                   |
| ----------------------------------- | --------------------------------- |
| use post/linux/gather/env           | Recopila las variables de entorno |
| show options                        |                                   |
| set session N                       |                                   |
| run                                 | Los verdes son los que existen    |

- post/linux/gather/enum_network

| search enum_network                |                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| use post/linux/gather/enum_network | Recopila info de la red                                                                           |
| show options                       |                                                                                                   |
| set session N                      |                                                                                                   |
| run                                | Cosas como intentar abrir el sshd, recopilar info y configuraciones del firewall, dns...          |
| loot                               |                                                                                                   |
| cat /archivo                       | En el de dns config vemos que el ns principal es members-linode.com (linode es un servicio cloud) |


- post/linux/gather/enum_protections

| search enum_protections                |                                                                                                                                                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| use post/linux/gather/enum_protections | Checkea el endurecimiento de los mecanismos del sistemas , enumera aplicaciones instaladas que puede ser usada para dificultar, prevenir o detectar ataques. Intenta descubrir los modulos de Linux (LSM), antivirus, IDS/IPS... |
| show options                           |                                                                                                                                                                                                                                  |
| set session N                          |                                                                                                                                                                                                                                  |
| run                                    | Vemos cosas como: ASLR, SMEP, SMAP, Yama, tcpdump...                                                                                                                                                                             |
| notes                                  |                                                                                                                                                                                                                                  |


- post/linux/gather/enum_system

| search enum_system                |                                                      |
| --------------------------------- | ---------------------------------------------------- |
| use post/linux/gather/enum_system | Recopila informacion del sistema                     |
| show options                      |                                                      |
| set session N                     |                                                      |
| run                               | Vemos cosas como: ASLR, SMEP, SMAP, Yama, tcpdump... |
| loot                              |                                                      |
| cat /ruta/installed_packets       |                                                      |
| cat /ruta/cronjobs                |                                                      |


- post/linux/gather/checkcontainer

| search checkcontainer                |                                 |
| ------------------------------------ | ------------------------------- |
| use post/linux/gather/checkcontainer | Nos dice si tiene un contenedor |
| show options                         |                                 |
| set session N                        |                                 |
| run                                  | Parece ser un Docker host       |


- post/linux/gather/checkvm

| search checkvm platform:linux |                            |
| ----------------------------- | -------------------------- |
| use post/linux/gather/checkvm | Detecta un entorno virtual |
| show options                  |                            |
| set session N                 |                            |
| run                           |                            |

- post/linux/gather/enum_user_history

| search enum_user_history                |                                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------- |
| use post/linux/gather/enum_user_history | Trata de conseguir los history (contienen comadnos realizados previamente) a de las cuentas |
| show options                            |                                                                                             |
| set session N                           |                                                                                             |
| run                                     |                                                                                             |
| loot                                    |                                                                                             |
| cat /ruta/para_root                     |                                                                                             |


