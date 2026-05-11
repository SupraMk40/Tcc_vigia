<?php
include_once(__DIR__ . '/conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

try {
  $stmt = $pdo->prepare("UPDATE alertas SET titulo = :titulo, descricao = :descricao, categoria = :categoria, urgencia = :urgencia, localizacao = :localizacao WHERE id = :id");
  $stmt->bindValue(':titulo', $postjson['titulo'] ?? '');
  $stmt->bindValue(':descricao', $postjson['descricao'] ?? '');
  $stmt->bindValue(':categoria', $postjson['categoria'] ?? 'ALERTA');
  $stmt->bindValue(':urgencia', $postjson['urgencia'] ?? 'média');
  $stmt->bindValue(':localizacao', $postjson['localizacao'] ?? '');
  $stmt->bindValue(':id', intval($postjson['id'] ?? 0), PDO::PARAM_INT);
  $stmt->execute();
+
  echo json_encode(['success' => true, 'mensagem' => 'Atualizado com sucesso']);
} catch (Exception $e) {
+    echo json_encode(['success' => false, 'mensagem' => 'Erro ao atualizar', 'erro' => $e->getMessage()]);
}



?>

