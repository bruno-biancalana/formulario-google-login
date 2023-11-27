/*
*Coded by: Bruno Biancalana
*Coded for: Science Valley Research Institute 
*GitHub: https://github.com/bruno-biancalana
*This GitRepositorie: https://github.com/bruno-biancalana/recrutamento-victorion

                            *** FUNÇÕES ALERT/POPUP ** 
*/

async function mensagem(){
const { value: accept } = await Swal.fire({
  title: '<strong>Exemplo de aviso de Politica de armazenamento e privacidade de dados</strong>',
  icon: 'info',
  iconColor: 'yellow',
  html:
    'Acesse a política de armazenamento e privacidade de dados neste ' +
    '<a href="https://bruno-biancalana-dev.netlify.app" target="blank" ><strong>link</strong>.</a>' + ' Ao marcar a opção abaixo, você concorda com os termos de nossa política de privacidade de dados.',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'Eu concordo com os termos de Política de Privacidade de dados da Empresa',
  confirmButtonText:
    'Continue <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'Você precisa concordar com os termos para prosseguir.'
  }
})

}

// script.js

// Função para obter o modo salvo no localStorage
function getModoSalvo() {
  return localStorage.getItem('modoEscuro') === 'true';
}

// Função para aplicar o modo salvo
function aplicarModoSalvo() {
  const body = document.body;
  const modoEscuroBtn = document.getElementById('modoEscuroBtn');
  const iconeModo = document.getElementById('iconeModo');

  const modoSalvo = getModoSalvo();
  
  // Aplica o modo salvo
  body.classList.toggle('modo-escuro', modoSalvo);

  // Atualiza o ícone e o rótulo do botão
  if (modoSalvo) {
    iconeModo.src = 'sol.png';
    modoEscuroBtn.setAttribute('aria-label', 'Ativar Modo Claro');
  } else {
    iconeModo.src = 'lua.png';
    modoEscuroBtn.setAttribute('aria-label', 'Ativar Modo Escuro');
  }
}



// Função para salvar o modo no localStorage
function salvarModo(modoEscuro) {
  localStorage.setItem('modoEscuro', modoEscuro);
}

// Função para alternar entre os modos e salvar a escolha
function toggleModoEscuro() {
  const body = document.body;

  // Toggle da classe modo-escuro no body
  body.classList.toggle('modo-escuro');

  // Verifica se a classe modo-escuro está presente
  const modoEscuroAtivo = body.classList.contains('modo-escuro');

  iconeModo.classList.add('transicao-imagem');

  setTimeout(() => {
  // Atualiza o ícone e o rótulo do botão
  const iconeModo = document.getElementById('iconeModo');
  const modoEscuroBtn = document.getElementById('modoEscuroBtn');
  if (modoEscuroAtivo) {
    iconeModo.src = 'sol.png';
    modoEscuroBtn.setAttribute('aria-label', 'Ativar Modo Claro');
  } else {
    iconeModo.src = 'lua.png';
    modoEscuroBtn.setAttribute('aria-label', 'Ativar Modo Escuro');
  }

  const imgPrincipal = document.getElementById('img_principal');
  if (modoEscuroAtivo) {
    imgPrincipal.src = 'dark_green.png';
  } else {
    imgPrincipal.src = 'classic_white.png';
  }

  // Salva a escolha do usuário no localStorage
  salvarModo(!modoEscuroAtivo);
  setTimeout(() => {
    imgPrincipal.classList.remove('transicao-imagem');
}, 500);},0);}

// Aplica o modo salvo ao carregar a página
window.addEventListener('load', () => {
  aplicarModoSalvo();
});
