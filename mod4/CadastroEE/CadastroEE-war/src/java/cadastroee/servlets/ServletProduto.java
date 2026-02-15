package cadastroee.servlets;

import cadastroee.controle.ProdutoFacadeLocal;
import jakarta.ejb.EJB;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ServletProduto", urlPatterns = {"/produtos"})
public class ServletProduto extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @EJB
    private ProdutoFacadeLocal facade;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Lista de Produtos</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Produtos cadastrados</h1>");
            out.println("<ul>");

            facade.findAll().forEach(p -> {
                out.println("<li>");
                out.println("Código: " + p.getCodigo() + " | ");
                out.println("Nome: " + p.getNome() + " | ");
                out.println("Quantidade: " + p.getQuantidade() + " | ");
                out.println("Preço: " + p.getPrecoVenda());
                out.println("</li>");
            });

            out.println("</ul>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Servlet de listagem de produtos";
    }
}