### Exercício 01)
A)O comando ALTER TABLE Ator DROP COLUMN salário; iria alterar a tabela de salario dos autores para uma coluna "dropando"/mostrando seus salarios
B)O comando ALTER TABLE Ator CHANGE sexo sexo VARCHAR(6); alterar o valor de gênero para sexo e colocar uma capacidade máxima de caracteres de 6
C)O comando ALTER TABLE Ator CHANGE gênero gênero VARCHAR(255); muda o valor gender para o maximo de caracteres para 255
D)ALTER TABLE Ator CHANGE sexo sexo VARCHAR(100);

### Exercício 02)
A) ATUALIZAR Ator
SET nome = "Moacyr Franco",
	data_nascimento = "1970-07-19"
WHERE id = "003";

B) SELECIONE UPPER (nome)
do ator;

SELECT INFERIOR (nome)
do ator;

C) ATUALIZAR Ator
SET nome = "Moacyr Franco",
	data_nascimento = "1970-07-19",
    sexo = "masculino",
    salário = 23263
WHERE id = "005";
D) ATUALIZAR Ator
SET nome = "Moacyr Franco",
	data_nascimento = "1970-07-19",
    sexo = "masculino",
    testeTabela = "",
    salário = 23263
WHERE id = "005"; o erro que retorna é de que o campo na lista chamado "teste table" é desconhecido

### Exercício 03)

A)EXCLUIR DO ATOR WHERE nome = "Fernanda Montenegro"
B) EXCLUIR DO ATOR ONDE sexo = "masculino" e salário > 1.000.000


### Exercício 04)
A) SELECIONAR MAX (salário)
DO Ator;
B)SELECIONAR MIN (salário)
DO Ator
WHERE sexo = "feminino";
C)SELECIONAR CONTAGEM(*)
DO Ator
WHERE sexo = "feminino";
D) SELECT SUM (salário) FROM Ator

### Exercício 05)
A)O resultado se tem porque se agrupar por gênero e a partir deste agrupamento ele faz a contagem/soma dos gêneros que contem os mesmos gêneros
B)SELECT * FROM Ator ORDER BY nome,id ASC
C)SELECIONAR * DO ATOR ORDEM POR salário DESC;
D) SELECIONAR * DO Ator
ORDEM POR salário DESC
LIMITE 3
E)SELECT SUM(salário), sexo
DO Ator
Agrupar por gênero;

### Exercício 06)
A)ALTER TABLE Filme ADD play_limit_date DATE;
B) ALTER TABLE Classificação de classificação do filme CHANGE FLOAT;
C) ALTER TABLE Classificação de classificação do filme CHANGE FLOAT;
ATUALIZAÇÃO DO CONJUNTO DE FILMES playing_limit_date = "2021-01-01"
WHERE id = "001";
D) EXCLUIR DO Filme WHERE id = "001"
