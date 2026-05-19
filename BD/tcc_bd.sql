CREATE DATABASE IF NOT EXISTS tcc_bd;

USE tcc_bd;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
usuariosusuarios
INSERT IGNORE INTO usuarios (id, nome, email, senha, ativo)
VALUES (
  1,
  'Demo User',
  'user@example.com',
  '$2y$10$wGq2xZp9Y8bOeU8WQv1wQe0h4xjFz0gQx6kzG9fBqz3kGx0q2pXbK',
  1
);


CREATE TABLE IF NOT EXISTS alertas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    urgencia VARCHAR(50) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_alertas_categoria (categoria),
    INDEX idx_alertas_urgencia (urgencia),
    INDEX idx_alertas_localizacao (localizacao)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


