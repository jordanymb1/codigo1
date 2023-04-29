function generarContrasena(longitud: number): string {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
      contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contrasena;
  }
  
  function generarContrasenaConNumeros(longitud: number): string {
    const caracteres = "0123456789";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
      if (i === 0 || i === longitud - 1) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      } else {
        contrasena += generarContrasena(1);
      }
    }
    return contrasena;
  }
  
  console.log(generarContrasenaConNumeros(12)); // Genera una contraseña de longitud 12 con al menos un número al principio y al final