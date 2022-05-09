create DATABASE programa;

use DATABASE programa;

CREATE TABLE Persona
   (
      ID int IDENTITY(1,80) PRIMARY KEY,
      Nombre varchar(50),
      Apellido varchar(50),
      correo varchar(50),
      edad int(11),
      clave varchar(50)

   )
