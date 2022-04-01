const usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
  ];
  
usuarios.map((usuario)=> { return usuario.ativo ? usuariosAtivos.push(usuario) : usuariosInativos.push(usuario); });
  
  const usuariosAtivos = [] // ???
  const usuariosInativos = [] // ???