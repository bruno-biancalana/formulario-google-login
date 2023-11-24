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
  