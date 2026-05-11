<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$diretorio = __DIR__ . '/img/';
$imagens = [];

if (!is_dir($diretorio)) {
    echo json_encode(["error" => "Diretório não encontrado"]);
    exit;
}

$arquivos = scandir($diretorio);

// Determina a URL base dinamicamente (assume que o script está acessível via HTTP)
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptPath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
$baseUrl = $scheme . '://' . $host . $scriptPath;

foreach ($arquivos as $arquivo) {
    $caminhoCompleto = $diretorio . $arquivo;

    if (is_file($caminhoCompleto) && preg_match('/\.(jpg|jpeg|png|gif|webp)$/i', $arquivo)) {
        $urlCompleta = $baseUrl . '/img/' . rawurlencode($arquivo);
        $imagens[] = $urlCompleta;
    }
}
+
echo json_encode($imagens, JSON_UNESCAPED_UNICODE);
echo json_encode($imagens, JSON_UNESCAPED_UNICODE);
