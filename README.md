# Waiting line App
 
Waiting line app es una app que sirve para agregar clientes en listas de espera para ser atendidos. Estos se organizan en dos listas según el tiempo de espera, una de 2 minutos y otra de 3 minutos. Cada cliente será colocado en la lista que genere menos tiempo de espera para dicho cliente de manera automática.
 
## Uso
 
Para el Frontend:
 
Ir a la carpeta frontend del proyecto y ejecutar:
 
```bash
npm install
```
Luego ejecutar para el modo de desarrollo:
 
```bash
npm run dev
```
Esto abrirá la app en el puerto 3000.
 
Para el Backend:
 
Ir a la carpeta backend del proyecto y ejecutar:
 
```bash
npm install
```
Luego ejecutar para el modo de desarrollo:
 
```bash
npm run dev
```
Esto abrirá la app en el puerto 3001.
 
 
Al momento de ejecutar la aplicación, habrán dos campos de entrada de un formulario.
 
Uno será el id de el cliente que consiste en una cadena alfanumérica de entre 6 caracteres mínimos y 8 caracteres máximo. Con su respectiva validación.
 
El otro será para el nombre del cliente que será una cadena de texto de mínimo 2 caracteres, la cual no lleva números, solamente letras. Con su respectiva validación.
 
Hay un botón a la derecha para agregar el cliente en la lista correspondiente.
 
Al renderizar las listas cada cliente se representa con un ClientCard que lleva:
 
- El número de orden en que será atendido.
 
- El id que identifica a cada cliente.
 
- El nombre del cliente.
 
- En la esquina superior derecha lleva un icono para eliminar el cliente de la lista después de ser atendido.

