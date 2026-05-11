<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
header('Content-Type: application/json; charset=utf-8');  


date_default_timezone_set('America/Sao_Paulo');


$usuario = 'root';
$senha = '';
$host = 'localhost';
$banco = 'tcc_bd';

// Se preciso, ajuste acima para o nome do banco de dados usado no XAMPP (por ex. 'tcc_bd' ou outro).

try {
	$pdo = new PDO("mysql:host=$host;dbname=$banco;charset=utf8mb4", $usuario, $senha, [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	]);
	
} catch (Exception $e) {
	// Retorna JSON de erro para facilitar debug por clientes JS
	echo json_encode(['success' => false, 'mensagem' => 'Erro ao conectar com o banco', 'erro' => $e->getMessage()]);
	exit;
}


?>