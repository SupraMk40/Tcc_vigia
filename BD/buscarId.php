<?php
include_once(__DIR__ . '/conexao.php');

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

try {
    $stmt = $pdo->prepare('SELECT * FROM alertas WHERE id = :id LIMIT 1');
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $row = $stmt->fetch();

    if ($row) {
        echo json_encode(array_merge(['success' => true], $row), JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(['success' => false, 'result' => null]);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'mensagem' => 'Erro na consulta', 'erro' => $e->getMessage()]);
}
+

 ?>