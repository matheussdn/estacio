package cadastroee.servlets;

import cadastroee.controle.ProdutoFacadeLocal;
import cadastroee.model.Produto;
import jakarta.ejb.EJB;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ServletProdutoFC", urlPatterns = {"/produto"})
public class ServletProdutoFC extends HttpServlet {

    @EJB
    private ProdutoFacadeLocal facade;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String acao = request.getParameter("acao");
        String destino;

        if (acao == null || acao.equals("listar")) {

            request.setAttribute("lista", facade.findAll());
            destino = "ProdutoLista.jsp";

        } else if (acao.equals("formIncluir")) {

            destino = "ProdutoDados.jsp";

        } else if (acao.equals("formAlterar")) {

            Integer codigo = Integer.valueOf(request.getParameter("codigo"));
            Produto p = facade.find(codigo);

            request.setAttribute("produto", p);
            destino = "ProdutoDados.jsp";

        } else if (acao.equals("incluir")) {

            Produto p = new Produto();
            p.setNome(request.getParameter("nome"));
            p.setQuantidade(Integer.parseInt(request.getParameter("quantidade")));
            p.setPrecoVenda(Float.parseFloat(request.getParameter("precoVenda"))); 

            facade.create(p);

            request.setAttribute("lista", facade.findAll());
            destino = "ProdutoLista.jsp";

        } else if (acao.equals("alterar")) {

            Integer codigo = Integer.valueOf(request.getParameter("codigo"));
            Produto p = facade.find(codigo);

            p.setNome(request.getParameter("nome"));
            p.setQuantidade(Integer.parseInt(request.getParameter("quantidade")));
            p.setPrecoVenda(Float.parseFloat(request.getParameter("precoVenda"))); 
            facade.edit(p);

            request.setAttribute("lista", facade.findAll());
            destino = "ProdutoLista.jsp";

        } else if (acao.equals("excluir")) {

            Integer codigo = Integer.valueOf(request.getParameter("codigo"));
            Produto p = facade.find(codigo);

            facade.remove(p);

            request.setAttribute("lista", facade.findAll());
            destino = "ProdutoLista.jsp";

        } else {

            request.setAttribute("lista", facade.findAll());
            destino = "ProdutoLista.jsp";
        }

        RequestDispatcher rd = request.getRequestDispatcher(destino);
        rd.forward(request, response);
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
}
