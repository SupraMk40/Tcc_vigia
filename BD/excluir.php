<?php
include_once(__DIR__ . '/conexao.php');

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

try {
    $stmt = $pdo->prepare('DELETE FROM alertas WHERE id = :id');
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $ok = $stmt->execute();
+
    echo json_encode(['success' => $ok]);
} catch (Exception $e) {
+    echo json_encode(['success' => false, 'mensagem' => 'Erro ao excluir', 'erro' => $e->getMessage()]);
}


 ?>

 