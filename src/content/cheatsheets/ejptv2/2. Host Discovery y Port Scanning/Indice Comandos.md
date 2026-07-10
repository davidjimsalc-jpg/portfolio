
1. Host Discovery y Port Scanning

	1. Wireshark 
	2. [[1. Ping y fping|Ping (Host Discovery)]]
	3. [[1. Ping y fping|Fping (Host Discovery)]]
	4. [[5. nmap (Host Discovey y Port Scanning)|Nmap (Host Discovery/Port Scanning)]]
	5. [[3. NSE Nmap|NSE Nmap]]
	6. [[4. Firewall Detection e IDS Evasion Nmap|Firewall Detection e IDS Evasion Nmap]]
	7. [[5. Nmap + MSF resultados|Nmap + MSF resultados]] 


2. Banner Grabbing

	1. [[1. Banner Grabbing|Banner Grabbing]]





#### PASOS DE ESTA FASE

1. **Host Discovery:**

ifconfig: ver nuestra interfaz, IP y mascara
nmap -sn OPCIONES IP_red/mascara

2. **Port Scanning:**

nmap -Pn -s(S,U,T...) OPCIONES IP ,     

