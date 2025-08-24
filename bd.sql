/* CRIAÇÃO DE TABELA */

DROP TABLE if exists dbLivros, dbUsuario, dbLivrosLidos, dbLivrosaLer;

CREATE TABLE dbLivros (
    ISBN INT PRIMARY KEY NOT NULL,
    nomeLivro VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    dataPublicacao DATE NOT NULL
);

CREATE TABLE dbUsuario (
    id_user INT PRIMARY KEY NOT NULL,
    nomeUser VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR NOT NULL
);

CREATE TABLE dbLivrosLidos {
    ISBN INT FOREIGN KEY NOT NULL,
    id_user VARCHAR(255) FOREIGN KEY NOT NULL,
    nota INT NOT NULL,
    dataLido DATE NOT NULL,
};

CREATE TABLE dbLivrosLidos (
    id_livrolido INT PRIMARY KEY,
    nota INT NOT NULL,
    dataLido DATE NOT NULL,
	-- CHAVES ESTRANGEIRAS
	FOREIGN KEY (isbn) REFERENCES dbLivros(isbn),
    FOREIGN KEY (id_user) REFERENCES dbUsuario(id_user)
);