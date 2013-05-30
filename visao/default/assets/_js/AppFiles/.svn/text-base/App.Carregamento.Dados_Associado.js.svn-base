var APP = APP || {};

APP.Carregamento.Dados_Associado = {
	_tela: null,
	setUp: function() {
		var that = this;
		
		$.ajax({
				url: "", 
				data : {
			
				},
				dataType : "json",
				type: "POST",
				success : function(data, textStatus, XMLHttpRequest){

					var nomeColaborador = data.nome,
						sobrenomeColaborador = data.sobrenome,
						editorias_do_associado = data.categoria,

						nome = $('#opcoes_usuario .nomeColaborador');

					nome.text(nomeColaborador + " " + sobrenomeColaborador);
				}
		});
	}
}