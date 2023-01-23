/*--------- ORDEM DE PRECEDÊNCIA---------/*

()              -> agrupamento
++  --          -> incremento
!               -> negação
**              -> exponenciação
*   /   %       -> multiplicação, divisão e resto da divisão
+   -           -> adição e subtração
<   <=  >  >=   -> menor que, menor ou igual a, maior que, maior ou igual a
==  !=          -> igualdade e desigualdade
=== !==         -> estrita igualdade e estrita desigualdade
&&              -> E (conjunção) 
||              -> OU (disjunção)
=               -> atribuição
+=              -> (N = N + 4) == (N += 4)
-=
*=
/=

/*--------- EXEMPLOS---------*/

var valorA = 5 ** 2; //5 elevado a 2
var valorB = 5 % 2; //resto da divisão
