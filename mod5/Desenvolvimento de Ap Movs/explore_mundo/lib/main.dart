import 'package:flutter/material.dart';

void main() {
  runApp(const ExploreMundoApp());
}

class ExploreMundoApp extends StatelessWidget {
  const ExploreMundoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Explore Mundo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String pesquisa = '';

  final List<Map<String, String>> pacotes = [
    {
      'destino': 'Rio de Janeiro',
      'descricao': '5 dias com hospedagem e passeio turístico',
      'preco': 'R\$ 2.490',
    },
    {
      'destino': 'Gramado',
      'descricao': '4 dias com hospedagem e café da manhã',
      'preco': 'R\$ 1.990',
    },
    {
      'destino': 'Salvador',
      'descricao': '5 dias com hospedagem e city tour',
      'preco': 'R\$ 2.190',
    },
  ];

  void mostrarMensagem(String mensagem) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(mensagem)),
    );
  }

  Widget buildButtonColumn(
    Color color,
    IconData icon,
    String label,
    VoidCallback onTap,
  ) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.all(8),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: color),
            Container(
              margin: const EdgeInsets.only(top: 8),
              child: Text(
                label,
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w500,
                  color: color,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final color = Theme.of(context).colorScheme.primary;

    final pacotesFiltrados = pacotes.where((pacote) {
      final destino = pacote['destino']!.toLowerCase();
      return destino.contains(pesquisa.toLowerCase());
    }).toList();

    final titleSection = Container(
      padding: const EdgeInsets.all(32),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: const Text(
                    'Rio de Janeiro',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                ),
                Text(
                  'Rio de Janeiro, Brasil',
                  style: TextStyle(color: Colors.grey[600]),
                ),
              ],
            ),
          ),
          Icon(Icons.star, color: Colors.amber[700]),
          const Text('4.8'),
        ],
      ),
    );

    final buttonSection = Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        buildButtonColumn(
          color,
          Icons.call,
          'CONTATO',
          () => mostrarMensagem('Contato: (21) 99999-9999'),
        ),
        buildButtonColumn(
          color,
          Icons.near_me,
          'ROTA',
          () => mostrarMensagem('Rota selecionada para o Rio de Janeiro'),
        ),
        buildButtonColumn(
          color,
          Icons.share,
          'COMPARTILHAR',
          () => mostrarMensagem('Destino pronto para compartilhar'),
        ),
      ],
    );

    final textSection = Container(
      padding: const EdgeInsets.all(32),
      child: const Text(
        'Conheça o Rio de Janeiro, um dos destinos mais famosos do Brasil. A cidade reúne praias, paisagens, cultura, gastronomia e pontos turísticos conhecidos mundialmente, como o Cristo Redentor e o Pão de Açúcar. A Explore Mundo oferece opções de pacotes para tornar a viagem mais prática e confortável.',
        softWrap: true,
        textAlign: TextAlign.justify,
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text('Explore Mundo'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (valor) => mostrarMensagem(valor),
            itemBuilder: (context) => const [
              PopupMenuItem(
                value: 'Destinos selecionados',
                child: Text('Destinos'),
              ),
              PopupMenuItem(
                value: 'Pacotes de viagem selecionados',
                child: Text('Pacotes de viagem'),
              ),
              PopupMenuItem(
                value: 'Contato selecionado',
                child: Text('Contato'),
              ),
              PopupMenuItem(
                value: 'Sobre nós selecionado',
                child: Text('Sobre nós'),
              ),
            ],
          ),
        ],
      ),
      body: ListView(
        children: [
          InkWell(
            onTap: () => mostrarMensagem(
              'Destino em destaque: Rio de Janeiro',
            ),
            child: Stack(
              alignment: Alignment.bottomLeft,
              children: [
                Image.asset(
                  'images/rio.jpg',
                  width: double.infinity,
                  height: 240,
                  fit: BoxFit.cover,
                ),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  color: Colors.black54,
                  child: const Text(
                    'Descubra o Rio de Janeiro',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              onChanged: (valor) {
                setState(() {
                  pesquisa = valor;
                });
              },
              decoration: InputDecoration(
                labelText: 'Pesquisar destino',
                hintText: 'Ex.: Gramado',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),
          ),
          titleSection,
          buttonSection,
          textSection,
          const Padding(
            padding: EdgeInsets.fromLTRB(16, 8, 16, 8),
            child: Text(
              'Pacotes de viagem',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          if (pacotesFiltrados.isEmpty)
            const Padding(
              padding: EdgeInsets.all(24),
              child: Center(
                child: Text('Nenhum destino encontrado.'),
              ),
            ),
          ...pacotesFiltrados.map(
            (pacote) => Card(
              margin: const EdgeInsets.symmetric(
                horizontal: 16,
                vertical: 8,
              ),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      pacote['destino']!,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(pacote['descricao']!),
                    const SizedBox(height: 8),
                    Text(
                      pacote['preco']!,
                      style: TextStyle(
                        color: color,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 12),
                    ElevatedButton.icon(
                      onPressed: () => mostrarMensagem(
                        'Reserva iniciada para ${pacote['destino']}',
                      ),
                      icon: const Icon(Icons.flight_takeoff),
                      label: const Text('Reservar'),
                    ),
                  ],
                ),
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Sobre a Explore Mundo',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Agência de viagens dedicada a facilitar a pesquisa de destinos, pacotes e reservas em uma experiência simples e acessível.',
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}