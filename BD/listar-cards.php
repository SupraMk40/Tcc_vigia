<?php
include_once(__DIR__ . '/conexao.php');

try {
    $query = $pdo->query('SELECT COUNT(*) as total FROM alertas');
    $res = $query->fetch();
    $total = intval($res['total'] ?? 0);

    echo json_encode(['success' => true, 'total_usuarios' => $total]);
} catch (Exception $e) {
+    echo json_encode(['success' => false, 'mensagem' => 'Erro ao contar registros', 'erro' => $e->getMessage()]);
}


?>
