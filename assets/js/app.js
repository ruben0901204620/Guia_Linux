/**
 * TERMINAL ASYNCHRONOUS SIMULATION ENGINE
 * Controladores acoplados a identificadores estructurales específicos.
 * Optimización: Ritmo de tipeado humanizado y cadencia ralentizada (90ms).
 */

const CONSOLE_REGISTRY = {
    // --- SECCIÓN  ---
    "echo-shell": {
        SHELL: "echo \"Hola Linux\"",
        output: "<span>Hola Linux</span>"
    },
    // --- SECCIÓN 2 ---
    "history": {
        SHELL: "history 3",
        output: "&nbsp;&nbsp;152&nbsp;&nbsp;clear<br>&nbsp;&nbsp;153&nbsp;&nbsp;ls -lah Escritorio/<br>&nbsp;&nbsp;154&nbsp;&nbsp;history 3"
    },
    "clear": {
        SHELL: "clear",
        output: "<span class='text-zinc-500'># Pantalla limpia. Terminal vaciada por completo</span>"
    },
    "type": {
        SHELL: "type cd ; type cp ; type ls",
        output: "cd is a shell builtin<br>cp is /usr/bin/cp<br>ls is aliased to `ls --color=auto'<br><span class='text-zinc-500'># Revela la naturaleza exacta e identidad de cada comando interno o externo</span>"
    },
    "ls-lah": {
        SHELL: "ls -lah",
        output: "total 24K<br>drwxr-xr-x 2 root root 4.0K Jun 20 16:30 .<br>drwxr-xr-x 5 root root 4.0K Jun 20 16:25 ..<br>-rw-r--r-- 1 root root  220 Jun 20 16:25 .bash_profile<br>-rw-r--r-- 1 root root 3.7K Jun 20 16:25 .bashrc<br>drwxr-xr-x 2 root root 4.0K Jun 20 16:30 Escritorio<br><span class='text-zinc-500'># Listado detallado incluyendo archivos ocultos (.) y tamaños legibles</span>"
    },

    // --- NUEVA SECCIÓN 3 (FUNCIONALIDAD INYECTADA) ---
    "help-builtin": {
        SHELL: "help cd",
        output: "<span class='text-blue-400'>cd: cd [-L|[-P [-e]] [-@]] [dir]</span><br>&nbsp;&nbsp;&nbsp;&nbsp;Change the shell working directory.<br>&nbsp;&nbsp;&nbsp;&nbsp;Change the current directory to DIR. The default DIR is the value of the HOME shell variable.<br><br><span class='text-emerald-400'>✓ Comando interno (builtin) ejecutado con éxito bajo entorno Bash.</span>"
    },
    "man": {
        SHELL: "man cp",
        output: "<span class='text-white font-bold'>CP(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Commands&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CP(1)</span><br><br><span class='text-yellow-400 font-bold'>NAME</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cp - copy files and directories<br><br><span class='text-yellow-400 font-bold'>SYNOPSIS</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='font-bold'>cp</span> [<span class='text-zinc-400'>OPTION</span>]... [-T] <span class='text-zinc-400'>SOURCE DEST</span><br><br><span class='text-zinc-500'>(Presiona 'q' en un sistema real para salir del búfer del manual)</span>"
    },
    "info": {
        SHELL: "info ls",
        output: "<span class='text-emerald-400 bg-zinc-900 px-1'>File: coreutils.info,&nbsp;&nbsp;Node: ls invocation,&nbsp;&nbsp;Next: dir invocation</span><br><br><span class='text-white font-bold'>10.1 `ls': List directory contents</span><br>==================================<br>The `ls' program lists information about files (of any type, including directories).<br><br><span class='text-zinc-400'>* Menu:</span><br>- Choosing files::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Which files to list.<br>- Sorting the output::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to sort the list."
    },
    "whatis": {
        SHELL: "whatis ls cd cp",
        output: "ls (1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- list directory contents<br>cd (1posix)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- change the working directory<br>cp (1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- copy files and directories"
    },
    "apropos": {
        SHELL: "apropos \"partition\"",
        output: "cfdisk (8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- display or manipulate a disk partition table<br>fdisk (8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- manipulate disk partition table<br>sfdisk (8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- display or manipulate a disk partition table"
    },
    "program-help": {
        SHELL: "mkdir --help",
        output: "Usage: mkdir [OPTION]... DIRECTORY...<br>Create the DIRECTORY(ies), if they do not already exist.<br><br>Mandatory arguments to long options are mandatory for short options too.<br>&nbsp;&nbsp;-m, --mode=MODE&nbsp;&nbsp;&nbsp;set file mode (as in chmod)<br>&nbsp;&nbsp;-p, --parents&nbsp;&nbsp;&nbsp;&nbsp;no error if existing, make parent directories as needed"
    },

    // --- NUEVA SECCIÓN 4 (FUNCIONALIDAD INYECTADA) ---
    "and-operator": {
        SHELL: "mkdir test && cd test",
        output: "<span class='text-zinc-500'># Primer comando (mkdir) exitoso (exit code 0)</span><br><span class='text-zinc-500'># Condición AND se cumple. Evaluando comando adyacente...</span><br><span class='text-prompt-user font-bold text-emerald-400'>user@machine</span><span class='text-white'>:</span><span class='text-prompt-dir font-bold text-sky-400'>~/test</span><span class='text-white'>#</span>"
    },
    "or-operator": {
        SHELL: "ls /no_existe || echo 'Ruta no encontrada'",
        output: "ls: cannot access '/no_existe': No such file or directory<br><span class='text-zinc-500'># Comando inicial fallido (exit code > 0)</span><br><span class='text-zinc-500'># Operador OR intercepta error y despliega el flujo alterno:</span><br><span class='text-orange-400'>Ruta no encontrada</span>"
    },
    "seq-operator": {
        SHELL: "echo 'Iniciando secuencia' ; comando_erroneo ; date",
        output: "Iniciando secuencia<br>bash: comando_erroneo: command not found<br>Sat Jun 20 16:44:12 CST 2026<br><span class='text-zinc-500'># El punto y coma (;) no evalúa estados; ejecuta en ráfaga incondicional</span>"
    },

    // --- NUEVA SECCIÓN 5 (ATALANTA DE ALIASES) ---
    "alias-setup": {
        SHELL: "alias clist='clear ; ls' && clist",
        output: "<span class='text-zinc-500'># Registrando mapeo del alias de comandos...</span><br><span class='text-zinc-500'># Pantalla limpia por instrucción de búfer secundario (clear)</span><br>total 8K<br>drwxr-xr-x 2 root root 4.0K Jun 20 16:30 <span class='text-prompt-dir font-bold'>Escritorio</span><br>-rw-r--r-- 1 root root 3.7K Jun 20 16:25 .bashrc"
    },
    "alias-removal": {
        SHELL: "unalias clist ; type clist",
        output: "<span class='text-zinc-500'># Purgando puntero de memoria interna...</span><br><span class='text-red-400'>bash: type: clist: not found</span><br><span class='text-zinc-500'># Error capturado con éxito: El alias ha dejado de existir en el entorno actual</span>"
    },

    // --- NUEVA SECCIÓN 6 (SIMULACIÓN DE ATAJOS) ---
    // "atajos-shell": {
    //     SHELL: "history | grep 'ls' (Simulando Ctrl+R + Alt+.)",
    //     output: "<span class='text-zinc-500'>(reverse-i-search)`ls': ls -lah /home/usuario/Documentos/proyectos/</span><br><span class='text-zinc-500'># Autocompletado incremental de Ctrl+R exitoso.</span><br><br><span class='text-prompt-user font-bold text-emerald-400'>user@machine:~#</span> cd /home/usuario/Documentos/proyectos/<br><span class='text-zinc-500'># Ruta expandida automáticamente al presionar [Alt + .] sin tener que reescribir.</span><br><span class='text-prompt-user font-bold text-emerald-400'>user@machine</span><span class='text-white'>:</span><span class='text-prompt-dir font-bold text-sky-400'>~/Documentos/proyectos</span><span class='text-white'>#</span>"
    // },

    // =========================================================================
    // REGISTRO INYECTADO — SECCIÓN 5 (SISTEMA DE FICHEROS DESDE WORD)
    // =========================================================================
    "pwd-check": {
        SHELL: "pwd",
        output: "<span class='text-white'>/home/ruben</span><br><span class='text-zinc-500'># Imprime la ruta absoluta del directorio actual.</span>"
    },
    "cd-root": {
        SHELL: "cd /",
        output: "<span class='text-zinc-500'># Navegación absoluta a la raíz del sistema de ficheros '/' con éxito.</span>"
    },
    "cd-relative": {
        SHELL: "cd Escritorio/",
        output: "<span class='text-zinc-500'># Navegación relativa completada desde el directorio de trabajo actual.</span>"
    },
    "cd-father": {
        SHELL: "cd ..",
        output: "<span class='text-zinc-500'># Cambiando de ubicación un nivel hacia arriba (directorio padre).</span>"
    },
    "cd-home": {
        SHELL: "cd ~",
        output: "<span class='text-zinc-500'># Retornando directamente a la carpeta Home del usuario (/home/ruben).</span>"
    },
    "cd-previous": {
        SHELL: "cd -",
        output: "<span class='text-white'>/home/ruben/Escritorio</span><br><span class='text-zinc-500'># Intercambiando la ubicación a la última carpeta visitada.</span>"
    },
    "ls-check": {
        SHELL: "ls",
        output: "<span class='text-sky-400 font-bold'>Documentos/</span>&nbsp;&nbsp;<span class='text-sky-400 font-bold'>Descargas/</span>&nbsp;&nbsp;<span class='text-sky-400 font-bold'>Escritorio/</span>&nbsp;&nbsp;nota.txt"
    },
    "ls-la": {
        SHELL: "ls -la",
        output: "<span class='text-zinc-400'>drwxr-xr-x&nbsp;&nbsp;2 ruben ruben 4096 Jun 20 18:00</span> <span class='text-sky-400 font-bold'>.</span><br><span class='text-zinc-400'>drwxr-xr-x 20 ruben ruben 4096 Jun 20 17:30</span> <span class='text-sky-400 font-bold'>..</span><br><span class='text-zinc-400'>-rw-r--r--&nbsp;&nbsp;1 ruben ruben&nbsp;&nbsp;240 Jun 20 18:05</span> <span class='text-white'>nota.txt</span>"
    },
    "tree-check": {
        SHELL: "tree",
        output: "<span class='text-white'>.</span><br><span class='text-zinc-500'>├── </span><span class='text-sky-400 font-bold'>Documentos</span><br><span class='text-zinc-500'>│   └── proyecto.md</span><br><span class='text-zinc-500'>└── </span><span class='text-white'>nota.txt</span><br><br><span class='text-zinc-400'>2 directories, 2 files</span>"
    },
    "file-check": {
        SHELL: "file nota.txt",
        output: "<span class='text-white'>nota.txt: ASCII text, with CRLF line terminators</span>"
    },
    "mkdir-simple": {
        SHELL: "mkdir Proyectos",
        output: "<span class='text-zinc-500'># Directorio 'Proyectos' inicializado correctamente en el entorno.</span>"
    },
    "mkdir-parents": {
        SHELL: "mkdir -p Curso/Linux/Comandos",
        output: "<span class='text-zinc-500'># Creación anidada exitosa. Estructuras intermedias generadas sin error.</span>"
    },
    "touch-file": {
        SHELL: "touch nuevo.txt",
        output: "<span class='text-zinc-500'># Fichero vacío creado o marca temporal modificada para 'nuevo.txt'.</span>"
    },
    "nano-edit": {
        SHELL: "nano documento.txt",
        output: "<span class='text-cyan-400'>[ Buffer de Editor ] Abriendo interfaz GNU nano en terminal simulada...</span>"
    },
    "cat-check": {
        SHELL: "cat info.txt",
        output: "<span class='text-amber-300'>Línea 1: Bienvenidos a la guía núcleo de Linux.</span><br><span class='text-amber-300'>Línea 2: Enterprise Dashboard Systems Activo.</span>"
    },
    "more-check": {
        SHELL: "more largo.txt",
        output: "<span class='text-zinc-300'>[Desplegando paginación inicial hacia adelante]</span><br><span class='text-white'>Contenido...</span><br><span class='bg-zinc-700 text-black px-1 text-xs font-bold'>-- Más (30%) --</span>"
    },
    "less-check": {
        SHELL: "less masivo.log",
        output: "<span class='text-zinc-400'>: Visor LESS en escucha (Flechas arriba/abajo activas). Presione 'q' para salir.</span>"
    },
    "cp-file": {
        SHELL: "cp nota.txt copia_nota.txt",
        output: "<span class='text-zinc-500'># Archivo copiado y sincronizado a la ruta destino con éxito.</span>"
    },
    "cp-dir": {
        SHELL: "cp -r Documentos/ /tmp/BackupDocs/",
        output: "<span class='text-zinc-500'># Estructura de árbol copiada recursivamente al destino temporal.</span>"
    },
    "mv-file": {
        SHELL: "mv nota.txt /tmp/",
        output: "<span class='text-zinc-500'># Fichero trasladado o renombrado de nodo dentro de la estructura.</span>"
    },
    "rm-file": {
        SHELL: "rm antiguo.txt",
        output: "<span class='text-zinc-500'># Archivo borrado permanentemente de las tablas lógicas del sistema.</span>"
    },
    "rm-rf": {
        SHELL: "rm -rf /tmp/directorio/",
        output: "<span class='text-rose-400 font-bold'>[WARN] Borrado recursivo, forzado y sin confirmación completado con éxito.</span>"
    },
    "find-name": {
        SHELL: "find . -name '*.txt'",
        output: "<span class='text-emerald-400'>./nota.txt</span><br><span class='text-emerald-400'>./nuevo.txt</span>"
    },
    // =========================================================================
    // NUEVAS ADICIONES — SECCIÓN 6: BLOQUE 1 (INODOS Y DENTRIES)
    // =========================================================================
    "sec6-df-inodes": {
        SHELL: "df -i",
        output: "Filesystem&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inodes&nbsp;&nbsp;&nbsp;IUsed&nbsp;&nbsp;&nbsp;&nbsp;IFree&nbsp;IUse%&nbsp;Mounted on<br>/dev/sda2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1250000&nbsp;&nbsp;340120&nbsp;&nbsp;&nbsp;909880&nbsp;&nbsp;&nbsp;28%&nbsp;/<br>tmpfs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;503891&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;503879&nbsp;&nbsp;&nbsp;&nbsp;1%&nbsp;/dev/shm<br><span class='text-zinc-500'># Muestra el estado del pool de inodos. IFree representa las entradas libres.</span>"
    },
    "sec6-ls-inodes": {
        SHELL: "ls -li archivo.txt",
        output: "<span class='text-emerald-400 font-bold'>1413521</span> -rw-r--r-- 1 root root 42 Jun 21 20:15 archivo.txt<br><span class='text-zinc-500'># El primer bloque numérico a la izquierda (1413521) expone el ID del inodo.</span>"
    },
    "sec6-stat-inode": {
        SHELL: "stat archivo.txt",
        output: "File: archivo.txt<br>Size: 42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blocks: 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IO Block: 4096&nbsp;&nbsp;&nbsp;regular file<br>Device: 802h/2050d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-emerald-400 font-bold'>Inode: 1413521</span>&nbsp;&nbsp;&nbsp;Links: 1<br>Access: (0644/-rw-r---- )&nbsp;&nbsp;Uid: ( 0/root )&nbsp;&nbsp;&nbsp;Gid: ( 0/root )<br>Access: 2026-06-21 20:15:00.000000000 -0600<br>Modify: 2026-06-21 20:12:31.000000000 -0600<br>Change: 2026-06-21 20:14:55.000000000 -0600<br><span class='text-zinc-500'># Extracción completa de los metadatos de control del inodo de forma exitosa.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 2 (ENLACES SIMBÓLICOS Y DUROS)
    // =========================================================================
    "sec6-ln-soft": {
        SHELL: "ln -s /home/usuario/Escritorio/fichero.txt enlace_simbolico && ls -la enlace_simbolico",
        output: "lrwxrwxrwx 1 root root 35 Jun 21 20:20 <span class='text-cyan-400 font-bold'>enlace_simbolico</span> -> <span class='text-sky-400'>/home/usuario/Escritorio/fichero.txt</span><br><span class='text-zinc-500'># Enlace simbólico generado correctamente. El indicador inicial 'l' confirma la naturaleza del link.</span>"
    },
    "sec6-ln-hard": {
        SHELL: "ln archivo_origen.txt enlace_duro.txt && ls -li archivo_origen.txt enlace_duro.txt",
        output: "<span class='text-emerald-400 font-bold'>1413525</span> -rw-r--r-- <span class='text-amber-400 font-bold'>2</span> root root 42 Jun 21 20:21 archivo_origen.txt<br><span class='text-emerald-400 font-bold'>1413525</span> -rw-r--r-- <span class='text-amber-400 font-bold'>2</span> root root 42 Jun 21 20:21 enlace_duro.txt<br><span class='text-zinc-500'># Mismo inodo (1413525) asignado a ambos nombres. El contador de enlaces lógicos subió a 2.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 3 (WILDCARDS / COMODINES)
    // =========================================================================
    "sec6-wildcard-asterisk": {
        SHELL: "cat fichero*",
        output: "<span class='text-zinc-400'>[fichero1.txt]</span> Contenido del primer archivo log.<br><span class='text-zinc-400'>[fichero2.txt]</span> Datos del segundo archivo de control.<br><span class='text-zinc-400'>[ficheroC.txt]</span> Parámetros de configuración C.<br><span class='text-zinc-500'># La shell expandió el asterisco (*) listando de forma masiva los archivos coincidentes.</span>"
    },
    "sec6-wildcard-question": {
        SHELL: "cat fichero?.txt",
        output: "<span class='text-zinc-400'>[fichero1.txt]</span> Contenido del primer archivo log.<br><span class='text-zinc-400'>[fichero2.txt]</span> Datos del segundo archivo de control.<br><span class='text-zinc-500'># El signo (?) limitó la coincidencia exclusivamente a archivos con un único carácter en esa posición.</span>"
    },
    "sec6-wildcard-posix": {
        SHELL: "ls -d [[:upper:]]*",
        output: "<span class='text-sky-400 font-bold'>Descargas/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-sky-400 font-bold'>Documentos/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-sky-400 font-bold'>Escritorio/</span><br><span class='text-zinc-500'># Filtrado POSIX correcto. Solo se listan elementos cuya primera letra está en mayúscula.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 4 (EXPANSIONES DE LA SHELL)
    // =========================================================================
    "sec6-echo-builtin": {
        SHELL: "echo esto es un texto && type echo",
        output: "esto es un texto<br>echo is a shell builtin<br><span class='text-zinc-500'># El comando echo nativo de la shell responde imprimiendo la cadena recibida.</span>"
    },
    "sec6-expansion-pathname": {
        SHELL: "echo fichero*",
        output: "fichero1.txt fichero2.txt ficheroC.txt<br><span class='text-zinc-500'># Expansión de Ruta completada: la shell tradujo el comodín antes de que el comando lo leyera.</span>"
    },
    "sec6-expansion-tilde": {
        SHELL: "echo ~",
        output: "/home/luchdev<br><span class='text-zinc-500'># Expansión de Tilde completada: se tradujo el símbolo al directorio raíz del usuario en ejecución.</span>"
    },
    "sec6-expansion-arithmetic": {
        SHELL: "echo $((2 + 2))",
        output: "4<br><span class='text-zinc-500'># Expansión Aritmética exitosa: la operación interna matemática fue evaluada por la shell.</span>"
    },
    "sec6-expansion-braces": {
        SHELL: "echo {1,2,3} && echo fichero{1,2,3}.txt",
        output: "1 2 3<br>fichero1.txt fichero2.txt fichero3.txt<br><span class='text-zinc-500'># Expansión de llaves: combinación puramente nominal generada con éxito sin requerir rastreos en disco.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 5 (SUSTITUCIÓN DE COMANDOS)
    // =========================================================================
    "sec6-SHELL-substitution": {
        SHELL: "ls -la $(which cat)",
        output: "-rwxr-xr-x 1 root root 43416 Jun 21 20:25 <span class='text-emerald-400 font-bold'>/bin/cat</span><br><span class='text-zinc-500'># La shell ejecutó first 'which cat', devolvió '/bin/cat' y 'ls -la' evaluó directamente esa ruta.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 6 (COMILLAS EN LA SHELL)
    // =========================================================================
    "sec6-quotes-double": {
        SHELL: "USER=luchdev && echo \"El usuario actual es: $USER\"",
        output: "El usuario actual es: luchdev<br><span class='text-zinc-500'># Comillas dobles activas: la variable $USER fue expandida correctamente a su valor dinámico.</span>"
    },
    "sec6-quotes-single": {
        SHELL: "USER=luchdev && echo 'El usuario actual es: $USER'",
        output: "El usuario actual es: $USER<br><span class='text-zinc-500'># Comillas simples activas: se forzó el literal absoluto anulando por completo la expansión de la variable.</span>"
    },
    "sec6-quotes-escape": {
        SHELL: "echo El precio total es \\$5",
        output: "El precio total es $5<br><span class='text-zinc-500'># Carácter de escape backslash (\\) exitoso: se anuló la propiedad especial del símbolo '$' de forma selectiva.</span>"
    },
    // =========================================================================
    // ADICIONES — SECCIÓN 6: BLOQUE 7 (ESCAPANDO CARACTERES ESPECIALES)
    // =========================================================================
    "sec6-backslash-escape": {
        SHELL: "echo \"expansion: $(which cat), no expansion: \$(which cat)\"",
        output: "expansion: /bin/cat, no expansion: $(which cat)<br><span class='text-zinc-500'># Barra invertida exitosa: el escape evitó que se evaluara la segunda llamada de sustitución.</span>"
    },
    "sec6-echo-escape-sequences": {
        SHELL: "echo -e \"linea1\\nlinea2\\ttexto tabulado\"",
        output: "linea1<br>linea2&nbsp;&nbsp;&nbsp;&nbsp;texto tabulado<br><span class='text-zinc-500'># El flag -e procesó \\n como salto de línea de terminal y \\t como espaciado de tabulación.</span>"
    }
    
    
};

const IntegratedTerminalEngine = {
    init() {
        this.registerTerminalTriggers();
        this.configureThemeController();
    },

    registerTerminalTriggers() {
        document.querySelectorAll('.console-box-wrapper').forEach(wrapper => {
            const button = wrapper.querySelector('.btn-replay');
            const terminal = wrapper.querySelector('.custom-terminal');
            if (!button || !terminal) return;

            const simId = terminal.getAttribute('data-sim-id');
            if (!CONSOLE_REGISTRY[simId]) return;

            button.addEventListener('click', () => {
                this.executeSimulation(terminal, CONSOLE_REGISTRY[simId]);
            });
        });
    },

    executeSimulation(terminal, data) {
        const historyContainer = terminal.querySelector('.terminal-stream-history');
        const typingSpan = terminal.querySelector('.current-typing');
        if (!historyContainer || !typingSpan) return;

        // Limpieza de estados anteriores
        historyContainer.innerHTML = "";
        typingSpan.textContent = "";

        let currentIndex = 0;
        const targetText = data.SHELL;

        const typeRoutine = () => {
            if (currentIndex < targetText.length) {
                typingSpan.textContent += targetText.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeRoutine, 70); // Velocidad natural de escritura
            } else {
                // Escritura finalizada -> Renderizar respuesta del sistema operativo
                setTimeout(() => {
                    historyContainer.innerHTML = `
                        <div class="flex items-center gap-2">
                            <span class="text-prompt-user font-bold text-emerald-400">user@machine</span><span class="text-white">:</span><span class="text-prompt-dir font-bold text-sky-400">~</span><span class="text-white">#</span>
                            <span class="text-white">${data.SHELL}</span>
                        </div>
                        <div class="terminal-output text-zinc-300 py-1 text-xs sm:text-sm leading-relaxed font-mono">
                            ${data.output}
                        </div>
                        <div class="border-b border-zinc-800/60 my-2"></div>
                    `;
                    typingSpan.textContent = "";
                    
                    // Ajustar scroll automático vertical de pantalla
                    const currentView = historyContainer.parentElement;
                    currentView.scrollTop = currentView.scrollHeight;
                }, 300); 
            }
        };

        setTimeout(typeRoutine, 200);
    },

    configureThemeController() {
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.updateToggleButton(toggle, currentTheme);

        toggle.addEventListener('click', () => {
            const html = document.documentElement;
            const targetTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            this.updateToggleButton(toggle, targetTheme);
        });
    },

    updateToggleButton(button, theme) {
        if (theme === 'light') {
            button.innerHTML = `<i class="fas fa-moon text-indigo-600"></i> <span>MODO OSCURO</span>`;
        } else {
            button.innerHTML = `<i class="fas fa-sun text-amber-400"></i> <span>MODO CLARO</span>`;
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    IntegratedTerminalEngine.init();
});