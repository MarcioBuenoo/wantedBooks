DROP TABLE if exists dbLivros, dbUsuario, dbLivrosLidos, dbLivrosaLer;

CREATE TABLE dbLivros (
    ISBN INT PRIMARY KEY NOT NULL,
    nomeLivro VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    dataPublicacao DATE NOT NULL )

CREATE TABLE dbUsuario (
    id_user INT PRIMARY KEY NOT NULL,
    nomeUser VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR NOT NULL )

