Flujo para subir writeups desde Obsidian
=======================================

Guarda cada writeup como Markdown dentro de una carpeta por plataforma:

  src/content/writeups/htb/mi-maquina.md
  src/content/writeups/tryhackme/mi-room.md

Puedes crear las plataformas que quieras. El nombre de la carpeta se usa como
plataforma si no indicas `platform` en el frontmatter.

Frontmatter recomendado:

---
title: Pivoting Skill Assessment
platform: HTB
categories:
  - Pivoting
  - AD
tags:
  - Windows
  - Linux
difficulty: Medium
summary: Writeup sobre pivoting, credenciales y movimiento lateral.
date: 2026-07-05
---

Para imagenes exportadas desde Obsidian tipo ![[Pasted image.png]], copia los adjuntos a:

  public/writeups/attachments/

La pagina de detalle los convierte automaticamente. Tambien puedes usar Markdown normal:

  ![](/writeups/attachments/Pasted%20image.png)
