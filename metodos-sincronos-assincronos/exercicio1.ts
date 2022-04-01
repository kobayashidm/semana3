const desafio1asRosasNaoFalam = () => {
    type callbackFn = () => void;
    const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
    
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = (callback) => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        callback();
      }, geraIntervaloAleatório());
    };
  
    const masQueBobagem = (callback) => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        callback();
      }, geraIntervaloAleatório());
    };
  
    const asRosasNaoFalam = (callback) => {
      setTimeout(() => {
        console.log('As rosas não falam');
        callback();
      }, geraIntervaloAleatório());
    };
  
    const simplesmenteAsRosasExalam = (callback) => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        callback();
      }, geraIntervaloAleatório());
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
      }, geraIntervaloAleatório());
    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas(()=> {
        masQueBobagem(()=> {
            asRosasNaoFalam(()=> {
                simplesmenteAsRosasExalam(()=> {
                    oPerfumeQueRoubamDeTi();
                });
            });
        });
    });
};
desafio1asRosasNaoFalam();