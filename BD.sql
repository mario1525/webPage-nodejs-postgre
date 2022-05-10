create DATABASE ususarios;

CREATE TABLE Persona
   (  
      id serial primary key,    
      Nombre varchar,
      Apellido varchar,
      correo varchar,
      edad int,
      clave varchar       
   )

   insert into persona(nombre, apellido, correo, edad, clave ) 
       values('manuel', 'hola','meio@hte.com',15 ,'masfidáds')
