const despertador = (intervaloEmSegundos: number) => {
    
    setTimeout(() => {
    console.log(`passaram-se ${intervaloEmSegundos/1000} segundo(s)`);
    }, intervaloEmSegundos);
    
  }

  const relogio = () => {
    const now = new Date();
    setInterval(() => {
        console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
      }, 1000);
    
  };
  despertador(10000);
  relogio();