echo $result;
<?php
include_once(__DIR__ . '/conexao.php');

try {
    $query = $pdo->prepare("SELECT * FROM alertas ORDER BY criado_em DESC");
    $query->execute();
    $res = $query->fetchAll();

    $dados = [];
    foreach ($res as $row) {
        $dados[] = [
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'descricao' => $row['descricao'],
            'categoria' => $row['categoria'],
            'urgencia' => $row['urgencia'],
            'localizacao' => $row['localizacao'],
            'criado_em' => $row['criado_em'] ?? null,
        ];
    }
+
    if (count($dados) > 0) {
        echo json_encode(['success' => true, 'result' => $dados], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(['success' => false, 'result' => []]);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'mensagem' => 'Erro ao buscar', 'erro' => $e->getMessage()]);
}

?>