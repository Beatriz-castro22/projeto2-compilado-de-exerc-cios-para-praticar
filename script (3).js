//1.faça um programa que mostra a mensagem "Olá mundo" na tela.
alert("olá mundo")

//2.faça um programa que pede um número e então mostra a mensagem "O númerp informado foi [número]".
let numero = prompt("digite um numero")
alert("o numero informado foi " + numero)

//3.faça um programa que pede dois números e imprima a soma.
let numero1 = prompt("digite um numero")
let numero2 = prompt("digite outro numero")
let somar = parseInt(numero1) + parseInt(numero2)

//4.faça um programa que pede as 4 notas bimestrais e mostra a média.
let nota1 = prompt("digite a nota 1")
let nota2 = prompt("digite a nota 2")
let nota3 = prompt("digite a nota 3")
let nota4 = prompt("digite a nota 4")
let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4))
alert("a media é " + media / 4)

//5.faça um programa que converte metros para centímetros.
let metros = prompt("digite o valor em metros")
let centimetros = metros * 100
alert("o valor em centimetros é " + centimetros)

//6.faça um programa que parte o raio de um círculo e mostra o seu perímetro e área.
let raio = prompt("digite o valor do raio")
let perimetro = 2 * 3.14 * raio
let área = 3.14 * raio ** 2
alert("o perimetro é " + perimetro)
alert("a area é " + área)

//7.faça um programa que calculates a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let lado = prompt("digite o valor do lado")
let area = lado ** 2
let dobro = area * 2
alert("o dobro da area é " + dobro)

//8.faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referito mês.
let valor = prompt("digite o valor por hora")
let horas = prompt("digite o numero de horas trabalhadas")
let salario = valor * horas
alert("o salario é " + salario)

//9.faça um programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
let fahrenheit = prompt("digite a temperatura em fahrenheit")
let celsius = 5 * ((fahrenheit - 32) / 9)
alert("a temperatura em celsius é " + celsius)

//10.faça um programa que parte a temperatura em graus Celsius e a transforme em graus Fahrenheit.
let celsius1 = prompt("digite a temperatura em celsius")
let fahrenheit1 = celsius1 * 1.8 + 32
alert("a temperatura em fahrenheit é " + fahrenheit1)

//11.faça um programa que peça 2 números inteiros e um número real.calcule e mostre:
//a) o produto do dobro do primeiro com metade do segundo.
//b) a soma do triplo do primeiro com o terceiro.
//c) o terceiro elevado ao cubo.
let numeroo1 = prompt("digite um numero inteiro")
let numeroo2 = prompt("digite outro numero inteiro")
let numeroo3 = prompt("digite um numero real")
let produto = (2 * parseInt(numeroo1) + parseInt(numeroo2) / 2)
let soma = (3 * parseInt(numeroo1) + parseInt(numeroo3))
let cubo = parseInt(numeroo3) ** 3
alert("o produto do dobro do primeiro com metade do segundo é " + produto)
alert("a soma do triplo do primeiro com o terceiro é " + soma)
alert("o terceiro elevado ao cubo é " + cubo)

//12.Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcula seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = prompt("digite a altura")
let peso = (72.7 * altura) - 58
alert("o peso ideal é " + peso)

//13.Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7
let homem = prompt("digite a altura")
let mulher = prompt("digite a altura")
let homem1 = (72.7 * homem) - 58
let mulher1 = (62.1 * mulher) - 44.7
alert("o peso ideal para homens é " + homem1)
alert("o peso ideal para mulheres é " + mulher1)

//14.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele trouxer um peso de peixes maior que o previsto pelo regulamento de pesca do estado de São Paulo (50 quilos) deverá pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na multa variável o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens apropriadas.
let peso1 = prompt("digite o peso")
let excesso = peso1 - 50
let multa = excesso * 4
alert("o excesso é " + excesso)
alert("a multa é " + multa)

/*15.Faça um Programa que pergunta quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no mês específico, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salário bruto.
quanto pagou ao INSS.
quando pagou para o sindicato.
o salário líquido. Calcule os descontos e o salário líquido, conforme tabela abaixo:
Salário Bruto : R$
INSS (8%) : R$
Sindicato (5%) : R$ = Salário Líquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.*/
let valor1 = prompt("digite o valor por hora")
let horas1 = prompt("digite o numero de horas trabalhadas")
let salario1 = valor1 * horas1
let inss = salario1 * 0.08
let sindicato = salario1 * 0.05
let salario_liquido = salario1 - inss - sindicato
alert("o salario bruto é " + salario1)
alert("o valor pago ao inss é " + inss)
alert("o valor pago ao sindicato é " + sindicato)
alert("o salario liquido é " + salario_liquido)