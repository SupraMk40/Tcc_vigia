<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

include_once(C:\xampp\htdocs\TCC_BD . '/conexao.php');

// Este endpoint suporta GET (buscar usuário por id) e POST (atualizar nome)
// GET: /perfil.php?id=1
// POST: enviar JSON { id: 1, nome: "Novo Nome" }

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if ($id <= 0) {
        echo json_encode(['success' => false, 'mensagem' => 'ID inválido']);
        exit;
    }

    try {
        $stmt = $pdo->prepare('SELECT id, nome, email FROM usuarios WHERE id = :id LIMIT 1');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $row = $stmt->fetch();
        if ($row) {
            echo json_encode(['success' => true, 'user' => $row], JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode(['success' => false, 'mensagem' => 'Usuário não encontrado']);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'mensagem' => 'Erro na consulta', 'erro' => $e->getMessage()]);
    }
    exit;
}

if ($method === 'POST') {
    $postjson = json_decode(file_get_contents('php://input'), true);
    $id = isset($postjson['id']) ? intval($postjson['id']) : 0;
    $nome = isset($postjson['nome']) ? trim($postjson['nome']) : '';

    if ($id <= 0 || $nome === '') {
        echo json_encode(['success' => false, 'mensagem' => 'ID e nome obrigatórios']);
        exit;
    }

    try {
        $stmt = $pdo->prepare('UPDATE usuarios SET nome = :nome WHERE id = :id');
        $stmt->bindValue(':nome', $nome);
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $ok = $stmt->execute();
        echo json_encode(['success' => $ok]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'mensagem' => 'Erro ao atualizar', 'erro' => $e->getMessage()]);
    }
    exit;
}

echo json_encode(['success' => false, 'mensagem' => 'Método não suportado']);
