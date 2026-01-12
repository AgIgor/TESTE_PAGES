<?php

$arquivo = "leads.txt";

if (isset($_GET['download'])) {

    if ($_GET['download'] === 'txt') {
        header("Content-Type: text/plain");
        header("Content-Disposition: attachment; filename=leads.txt");
        readfile($arquivo);
        exit;
    }

    if ($_GET['download'] === 'csv') {
        header("Content-Type: text/csv");
        header("Content-Disposition: attachment; filename=leads.csv");

        $linhas = file($arquivo, FILE_IGNORE_NEW_LINES);
        echo "Data,Nome,Email,Telefone\n";

        foreach ($linhas as $linha) {
            $dados = explode(" | ", $linha);
            echo implode(",", $dados) . "\n";
        }
        exit;
    }
}

$dados = file_exists($arquivo) ? file($arquivo) : [];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Leads Capturados</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen p-6">

  <div class="max-w-5xl mx-auto bg-white p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Leads Capturados</h1>

    <div class="flex gap-4 mb-4">
      <a href="?download=txt" class="bg-blue-600 text-white px-4 py-2 rounded">
        Download TXT
      </a>
      <a href="?download=csv" class="bg-green-600 text-white px-4 py-2 rounded">
        Download CSV
      </a>
    </div>

    <table class="w-full border">
      <thead class="bg-gray-200">
        <tr>
          <th class="border p-2">Data</th>
          <th class="border p-2">Nome</th>
          <th class="border p-2">Email</th>
          <th class="border p-2">Telefone</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($dados as $linha): 
          $colunas = explode(" | ", $linha);
        ?>
        <tr>
          <?php foreach ($colunas as $col): ?>
            <td class="border p-2"><?= htmlspecialchars($col) ?></td>
          <?php endforeach; ?>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

</body>
</html>
