let form = document.getElementById('form1');
       nombre = form.nom,
       apellido =form.apell,
       correo = form.email,
       edad = form.edad,
       pwd = form.pwd,
       error = document.getElementById('error');


       function validarNombre(e){        
        if(nombre.value == '' || nombre == null){            
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li class="dat" >Ingresa Un Nombre</li>';
            e.preventDefault();
    }else{
        let nom = document.getElementsByName('nom')[0].value;
        error.style.display='none';
        console.log(nom);
    }
    }

    function validarapellido(e){
        if(apellido.value == '' || apellido == null){            
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li class="dat">Ingresa Un apellido</li>';
            e.preventDefault();
    }else{
        let ape = document.getElementsByName('apell')[0].value;
        error.style.display='none';
        console.log(ape);
    }
    }
    
    function validarCorreo(e){
        if(correo.value == '' || correo == null){           
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li class="dat">Ingresa Un correo</li>';
            e.preventDefault();
    }else{
        let mai = document.getElementsByName('email')[0].value;
        console.log(mai);
        error.style.display='none';
    }
    }

    function validarEdad(e){
        if(edad.value == '' || edad == null){            
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li class="dat">Ingresa Una edad</li>';
            e.preventDefault();
    }else{
        let edad = document.getElementsByName('edad')[0].value;
        console.log(edad);
        error.style.display='none';
    }
    }

    function validarPwd(e){
        if(pwd.value == '' || pwd == null){           
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li class="dat">Ingresa Una contraseña </li>';
            e.preventDefault();
    }else{
        let pwd = document.getElementsByName('pwd')[0].value;
        console.log(pwd);
        error.style.display='pwd';
    }
    }



    function validarForm(e){
        error.innerHTML = '';
        error.style.display = 'block';
        validarNombre(e);
        validarapellido(e);
        validarCorreo(e);
        validarEdad(e);
        validarPwd(e);

     }

    form.addEventListener('submit', validarForm);