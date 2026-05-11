<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

// Pasta onde os arquivos serão salvos (criar se não existir)
$uploadDir = __DIR__ . '/img/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}
+
// Determina a URL base dinamicamente
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scriptPath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
$baseUrl = $scheme . '://' . $host . $scriptPath;

if (!empty($_FILES['photo'])) {
    $photo_name = $_FILES['photo']['name'];
    $tmp_name = $_FILES['photo']['tmp_name'];

    $ext = pathinfo($photo_name, PATHINFO_EXTENSION);
    $safeName = preg_replace('/[^A-Za-z0-9\-_\.]/', '-', pathinfo($photo_name, PATHINFO_FILENAME));
    $random_name = rand(1000, 1000000) . '-' . $safeName . '.' . $ext;
+
    $target = $uploadDir . $random_name;
+
    if (move_uploaded_file($tmp_name, $target)) {
        $url = $baseUrl . '/img/' . rawurlencode($random_name);
+        echo json_encode(['success' => true, 'url' => $url, 'file' => $random_name]);
    } else {
+        echo json_encode(['success' => false, 'mensagem' => 'Erro ao mover arquivo']);
    }
} else {
+    echo json_encode(['success' => false, 'mensagem' => 'Nenhum arquivo enviado']);
}
+
?>