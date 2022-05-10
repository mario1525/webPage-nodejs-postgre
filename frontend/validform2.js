let form2 = document.getElementById('form2');
        correo2 = form2.email2,
        pwd2 = form2.pwd2,
       error2 = document.getElementById('error2');

       function validarCorreo(e){
        if(correo2.value == '' || correo2 == null){
            console.log('Completa el correo');
            error2.style.display = 'block';
            error2.innerHTML = error2.innerHTML + '<li class="dat">Ingresa Un correo</li>';
            e.preventDefault();
    }else{
        let mai = document.getElementsByName('email2')[0].value;
        console.log(mai);
        error2.style.display='none';
    }
    }

    function validarPwd(e){
        if(pwd2.value == '' || pwd2 == null){
            console.log('Completa la contraseña ');
            error2.style.display = 'block';
            error2.innerHTML = error2.innerHTML + '<li class="dat">Ingresa Una contraseña </li>';
            e.preventDefault();
    }else{
        let pwd = document.getElementsByName('pwd2')[0].value;
        console.log(pwd);
        error2.style.display='pwd';
    }
    }

    function validarForm(e){
        error2.innerHTML = '';
        error2.style.display = 'block';        
        validarCorreo(e);       
        validarPwd(e);

     }

    form2.addEventListener('button', validarForm);