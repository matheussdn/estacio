<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="cadastroee.model.Produto"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dados do Produto</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet">

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
    </script>
</head>

<body class="container mt-4">

<h1 class="mb-4 fw-bold">Dados do Produto</h1>

<%
    Produto produto = (Produto) request.getAttribute("produto");
    boolean alterando = (produto != null);
%>

<form action="produto" method="post" class="form">

    <input type="hidden" name="acao" 
           value="<%= alterando ? "alterar" : "incluir" %>">

    <% if (alterando) { %>
        <input type="hidden" name="codigo" 
               value="<%= produto.getCodigo() %>">
    <% } %>

    <div class="mb-3">
        <label class="form-label">Nome</label>
        <input type="text" name="nome"
               class="form-control"
               value="<%= alterando ? produto.getNome() : "" %>">
    </div>

    <div class="mb-3">
        <label class="form-label">Quantidade</label>
        <input type="number" name="quantidade"
               class="form-control"
               value="<%= alterando ? produto.getQuantidade() : "" %>">
    </div>

    <div class="mb-3">
        <label class="form-label">Preço de Venda</label>
        <input type="number" step="0.01" name="precoVenda"
               class="form-control"
               value="<%= alterando ? produto.getPrecoVenda() : "" %>">
    </div>

    <button type="submit" class="btn btn-primary">
        <%= alterando ? "Alterar" : "Incluir" %>
    </button>

    <a href="produto?acao=listar" class="btn btn-secondary">
        Voltar
    </a>

</form>

</body>
</html>