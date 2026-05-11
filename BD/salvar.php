<?php 
echo $result;
require_once(__DIR__ . '/conexao.php');

$tabela = 'alertas';
$postjson = json_decode(file_get_contents('php://input'), true);

$titulo = isset($postjson['titulo']) ? $postjson['titulo'] : '';
$descricao = isset($postjson['descricao']) ? $postjson['descricao'] : '';
$categoria = isset($postjson['categoria']) ? $postjson['categoria'] : 'ALERTA';
$urgencia = isset($postjson['urgencia']) ? $postjson['urgencia'] : 'média';
$localizacao = isset($postjson['localizacao']) ? $postjson['localizacao'] : '';

try {
	$res = $pdo->prepare("INSERT INTO $tabela (titulo, descricao, categoria, urgencia, localizacao, criado_em) VALUES (:titulo, :descricao, :categoria, :urgencia, :localizacao, NOW())");
	$res->bindValue(':titulo', $titulo);
	$res->bindValue(':descricao', $descricao);
	$res->bindValue(':categoria', $categoria);
	$res->bindValue(':urgencia', $urgencia);
	$res->bindValue(':localizacao', $localizacao);
	$res->execute();

	echo json_encode(['sucesso' => true, 'mensagem' => 'Salvo com sucesso', 'id' => $pdo->lastInsertId()]);
} catch (Exception $e) {
	echo json_encode(['sucesso' => false, 'mensagem' => 'Erro ao salvar', 'erro' => $e->getMessage()]);
}

?>