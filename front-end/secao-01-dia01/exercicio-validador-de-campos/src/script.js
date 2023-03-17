import './style.css';
import validator from 'validator';

const campoDePrenchimento = document.querySelector('#email-cpf');
const selectEmailCpf = document.querySelector('#select-email-cpf');
const buttonValidar = document.querySelector('#button-email-cpf');
const placeholder = document.querySelector('#placeholder');

const validadorEmail = () => {
  if (selectEmailCpf.value === 'email') {
    return placeholder.innerHTML = `A validação retornou ${validator.isEmail(campoDePrenchimento.value)}`;
  } else {
    return placeholder.innerHTML = `A validação retornou ${false}`;
  }
};

// const validadorCpf = () =>{
//   if (selectEmailCpf.value === 'cpf') {
//     if (campoDePrenchimento.value.length === 14) {
//       return `A validação retornou ${true}`;
//     } else {
//       `A validação retornou ${false}`;
//     }
//   }
// };

const limpaIpunt = () => {
  campoDePrenchimento.value = '';
};

window.onload = () => {
  buttonValidar.addEventListener('click', validadorEmail);
  // buttonValidar.addEventListener('click', validadorCpf);
  buttonValidar.addEventListener('click', limpaIpunt);
};