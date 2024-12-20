export default function validationCard(number: string) {
  // Remover espaços em branco e hífens do número do cartão
  number = number.replace(/\s+/g, '').replace(/-/g, '');

  // Verificar se o número do cartão contém apenas dígitos
  if (!/^\d+$/.test(number)) return false;

  // Verificar se o número do cartão tem entre 13 e 19 dígitos (conforme padrão)
  if (number.length < 13 || number.length > 19) return false;

  // Algoritmo de Luhn
  let soma = 0;
  for (let i = 0; i < number.length; i++) {
    let digito = parseInt(number.charAt(i));

    // Multiplicar por 2 os dígitos em posições pares (começando do fim)
    if ((number.length - i) % 2 === 0) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }

    soma += digito;
  }

  // O número é válido se a soma dos dígitos for um múltiplo de 10
  return soma % 10 === 0;
}
