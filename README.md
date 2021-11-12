# Networking-grid. 
## Hackaton JOBMadrid

Este proyecto consiste en una página donde encontrarás informacion de distintas empresas. En el listado aparece su tamaño, nombre, año de fundación... Si abres la pestalla filter, verás que puedes filtrar por tipo de empresa.

This project consists of a page where you will find information about different companies. In the list you will find their size, name, year of foundation... If you open the filter screen, you will see that you can filter by type of company.

## Información importante ⚠️ / Important information ⚠️
Debido a un problema con las cors de la url del hackaton, el fetch no funciona si tienes activada la seguridad del navegador. Si usas Chrome, abre el ejecutador de tareas, si estás en Windows con el siguiente comando

```
Windows + R
```
y a continuación pon la siguiente linea de código 

```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```
Esto desactivará la seguridad de Google y podrás ver la página correctamente.

Because of a problem with the hackathon url cors, the fetch does not work if you have browser security enabled. If you are using Chrome, open the task runner, if you are on Windows with the following command

```
Windows + R
```
and then enter the following line of code 

```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```
This will disable Google security and you will be able to see the page correctly.

## Calidad de código 💎 / Code quality 💎

Utilizando la plataforma que se nos daba en el enunciado (Dashboard), la calidad del código es: **A**

Using the platform given in the statement (Dashboard), the quality of the code is: **A**


## Comenzando 🚀 / Starting 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### Pre-requisitos 📋 / Prerequisites 📋

¿Que necesitas para instalar el software?

```
Necesitas tener instalado Node JS
```

What do you need to install the software?

```
You need to have installed Node JS
```

### Instalación 🔧 / Installation 🔧

1. Descargar este repositorio en zip o clonar el repositorio en tu dispositivo (si clonas el repositorio, ten en cuenta de que no podrás añador tus commits)
2. Abre una terminal en la carpeta raíz de tu repositorio
3. Instala las dependencias locales ejecutando en la terminal el comando:

```
npm install
```

1. Download this repository in zip or clone the repository on your device (if you clone the repository, note that you will not be able to add your commits).
2. Open a terminal in the root folder of your repository.
3. Install the local dependencies by running the command in the terminal:

```
npm install
```

### Arrancar el proyecto ⚙️ / Starting the project ⚙️

Una vez hecho el paso anterior, **hay que arrancar el proyecto cada vez que programes**. Para ello, ejecuta el comando:

```
npm start
```

A continuación puedes observar que:

- Se abrirá una ventana en tu navegador pretederminado, que mostrará tu web.
- Los ficheros sobre lo que trabajarás estan dentro de la carpeta `src/`

Once you have done the previous step, **start the project every time you program**. To do this, run the command:

```
npm start
```

Then you can see that:

- A window will open in your pre-finished browser, which will display your website.
- The files you will be working on are inside the `src/` folder.

### Publicar el proyecto en GitHub Pages 📚 / Publish the project on GitHub Pages 📚

Introducir el comando

```
npm run githubpages
```

Y a continuación:

1.  Sube tu repo a la carpeta `docs/` que se te acaba de generar
2.  Entra en la pestaña settings de tu repositorio
3.  En el apartado de GitHub Pages activa la opción **master branch/docs folder**

Enter the command

```
npm run githubpages
```

And then:

1. Upload your repo to the docs/ folder that was just generated for you.
2. Go to the settings tab of your repo
3. In the GitHub Pages section activate the **master branch/docs folder** option.

## Construido con 🛠️ / Built with 🛠️

- HTML
- SASS
- GULP
- REACT

## Autores ✒️ / Authors ✒️

- **Irene Bioque** [Github](https://github.com/IreneBioque)

## Licencia 📄 / Licence 📄

Este proyecto está bajo la Licencia MIT License mira el archivo [LICENSE](LICENSE) para más detalles

This project is licensed under the MIT License MIT License see the [LICENSE](LICENSE) file for more details.
