// Carrega o pacote corechart da API
google.charts.load('current', {'packages' : ['corechart']});

// Configura uma chamada para executar quando a API for carregada
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var dados = new google.visualization.DataTable();
        
    dados.addColumn('string', 'Topping');
    dados.addColumn('number', 'Slices');
    dados.addRows([
        ['Alemão', 5.85],
        ['Francês', 1.66],
        ['Italiano', 0.316],
        ['Romanche', 0.079]        
      ]);

    //Opções do gráfico
    var opcoes = {'title': 'Idiomas falados na Suíça',
                  'width': 700,
                  'height': 600};

    //Inicializa e desenha o gráfico
    var grafico = 
      new google.visualization.PieChart(document.getElementById("grafico"));
    grafico.draw(dados, opcoes);
}
