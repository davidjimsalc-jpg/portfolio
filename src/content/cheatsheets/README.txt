Flujo para subir cheatsheets desde Obsidian
==========================================

Guarda cada cheatsheet como Markdown dentro de una carpeta por certificacion.
La pagina respeta todos los niveles de subcarpetas que existan:

  src/content/cheatsheets/cpts/0. Introduccion/2. Getting Started/6. Web Enum.md
  src/content/cheatsheets/cpts/3. Explotacion web/4. SQLi fundamentos/1. Introduccion.md
  src/content/cheatsheets/ejptv2/Tu carpeta/Tu cheatsheet.md

Frontmatter recomendado:

---
title: Nmap
certification: eJPTv2
order: 1
draft: false
---

El buscador de /cheatsheets filtra por titulo y contenido del Markdown.
El contenido se abre en la misma pagina, sin crear una ruta individual.

Si exportas imagenes desde Obsidian tipo ![[Pasted image.png]], copialas a:

  public/cheatsheets/attachments/
