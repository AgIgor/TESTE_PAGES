<?php

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');

if ($nome && $email && $telefone) {

    $linha = date("Y-m-d H:i:s") . " | $nome | $email | $telefone" . PHP_EOL;

    file_put_contents("leads.txt", $linha, FILE_APPEND);

    header("Location: obrigado.html");
    exit;
}

echo "Dados inválidos.";
