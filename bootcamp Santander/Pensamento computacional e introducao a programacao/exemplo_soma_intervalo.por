programa
{
	/*funcao inicio()//minha reolucao
	{
		inteiro x, y, valor = 0
		escreva("Digite valor inicial do intervalo ")
		leia(x)
		escreva("Digite o valor final do intervalo ")
		leia(y)
		enquanto(x<=y){
			valor = valor + x
			x++
		}
		escreva("Valor da soma do intervalor de "+x+" e "+y+": "+valor)
	}*/

	funcao inicio(){//resolucao da DIO
		inteiro x, y
		escreva("Digite os valores do intervalo ")
		leia(x)
		leia(y)
		escreva(soma_intervalo(x,y))
	}
	funcao inteiro soma_intervalo(inteiro x, inteiro y){
	inteiro total, resultado_parcial
	total = y/2	
	resultado_parcial = y+x
	inteiro resultado = total * resultado_parcial
	retorne resultado
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 398; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */