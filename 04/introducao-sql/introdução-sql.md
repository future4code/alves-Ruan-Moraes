### EXERCÍCIO 1)
a) o comando VARCHAR(n) delimita a quantidade de caracteres que esta coluna pode receber aonde n é a quantidade
Date é exclusivo para datas em formato americano
b) O comando show tables mostra as tabelas da minha database e o comando show databases mostra todas as data bases que tenho acesso
c) ele me retorna um erro dizendo que minha database-actor nao existe


### EXERCÍCIO 2)
b) o erro nos retorna dizendo que a primary key ja existe, nos impossibilitando de criar outro id, por serem unicos
c) esta faltando os dados base(nome das colunas)
d) faltava os campos de name, tanto em dados base quanto nos valores
e) faltava envolver a dataa por aspas
f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


### EXERCÍCIO 3)
a)SELECT id, name from Actor WHERE gender = "female";
b)SELECT salary from Actor WHERE name = "Tony Ramos";
c) retorna nada, pois nao existe nenhum genero com invalid
e)o erro ocorre pois estava escrito noma e nao name


### EXERCÍCIO 4)
a)where significa se, logo: SE name tiver alguma stirn com A ou J E o salario for maior de 300...
b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
c)
SELECT * FROM Actor
WHERE (name LIKE "j%" OR name LIKE "J%");
d)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "a%" OR name LIKE "G%" OR name LIKE "g%") AND salary > 300000;


### EXERCÍCIO 5)
a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
b)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "1963-08-23", 
  7
);
c)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
d)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
e)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
  "2007-10-05", 
  9
);


### EXERCÍCIO 6)
a)
SELECT id, title, rating from Movie WHERE id = 003;
b)
SELECT title from Movie WHERE title = "Tropa de Elite";
c)
SELECT id, title, synopsis from Movie WHERE rating > 7;
### EXERCÍCIO 7)

a)
SELECT * FROM Movie
WHERE (title LIKE "vida%" );
b)
SELECT * FROM Movie
WHERE (title NOT LIKE "A%");