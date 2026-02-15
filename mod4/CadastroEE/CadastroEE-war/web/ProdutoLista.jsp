<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="cadastroee.model.Produto"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Produtos</title>

    <!-- Bootstrap CSS (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet">

    <!-- Bootstrap JS (CDN) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">
    </script>
</head>

<body class="container mt-4">

<h1 class="mb-4 fw-bold">Listagem de Produtos</h1>

<a href="produto?acao=formIncluir" 
   class="btn btn-primary m-2">
   Novo Produto
</a>

<%
    List<Produto> lista = (List<Produto>) request.getAttribute("lista");
%>

<table class="table table-striped">
    <thead class="table-dark">
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço de Venda</th>
            <th>Opções</th>
        </tr>
    </thead>
    <tbody>

<%
    if (lista != null) {
        for (Produto p : lista) {
%>
        <tr>
            <td><%= p.getCodigo() %></td>
            <td><%= p.getNome() %></td>
            <td><%= p.getQuantidade() %></td>
            <td><%= p.getPrecoVenda() %></td>
            <td>
                <a href="produto?acao=formAlterar&codigo=<%= p.getCodigo() %>"
                   class="btn btn-primary btn-sm">
                   Alterar
                </a>

                <a href="produto?acao=excluir&codigo=<%= p.getCodigo() %>"
                   class="btn btn-danger btn-sm">
                   Excluir
                </a>
            </td>
        </tr>
<%
        }
    }
%>

    </tbody>
</table>

</body>
</html>