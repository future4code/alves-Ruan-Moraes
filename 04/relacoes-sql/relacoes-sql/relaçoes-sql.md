//
### Exercicio 01)
A) Chave estrangeira é uma especie de avisar o workbench que vira uma primary key da tabela que ficara linkada com outra.
B) INSERT INTO Rating values
("03","Comentario Avaliativo 02",6,"004");
C)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-ruan-moraes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.140 sec
D)Error Code: 1054. Unknown column 'rating' in 'where clause'	0.156 sec

### Exercicio 02)
A)A tabela de moviecast tem apenas 2 id's, aonde a tabela tem como função ser uma especie de ponte entre a tabela de movie e actor, linkando seus id's
B)INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES (
"010",
"Neymar Marquito Junior",
6,
"2000-02-02",
"male"
);

C)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-ruan-moraes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.141 sec
O erro diz que nao é possivel achar ou que a foreing key nao é compativel com o banco de dados e a table selecionada.

D)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-ruan-moraes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.140 sec
Não é possivel pois esta linkada/fazendo referencia a table de Atores

### Exercicio 03)
-- Exercício 3

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a) Explique, com suas palavras, a query acima. O que é o operador ON?
-- O operador ON serve como condição para retorno da tabela

-- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;

### Exercicio 04)
-- a)
SELECIONE  Filmes . id , name, rate, comment FROM Movies
LEFT  JOIN Classificação em Filmes . id  =  Avaliação . filme_id ;

-- 4.b);
SELECIONE  M. _ id  como filmes_id, m . nome , mc . ator_id  FROM Filmes m
LEFT JOIN MovieCast mc LIGADO  mc . filmes_id  =  m . identificação ;

-- 4.c);
SELECT  AVG ( r . taxa ), m . id , m . nome  DE Filmes m
LEFT JOIN Classificação r ON  m . id  =  r . movie_id  GROUP BY ( m . id );

///