var APP = APP || {};
	APP.Carregamento = APP.Carregamento || {};

APP.Carregamento.Postagens = {
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

				that.Verificar_Tipo_E_Situacao(data, postagem);

				$(postagem).appendTo('#publicacoes');

			}
		});

	},
	Verificar_Tipo_E_Situacao: function(data, postagem){
		var tipo = data.tipo,
			situacao_da_publicacao = data.situacao.status,
			variacao_de_tipos_de_publicacao = ["foto", "video", "texto", "audio"],
			variacao_de_situacao_da_publicacao = ["pendente", "marcada", "publicada"];
				

		// verificação do tipo de postagem

		if(tipo == variacao_de_tipos_de_publicacao[0]){ // tipo foto

			// verificação da situacao da postagem ["pendente", "marcada", "publicada"];
			if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[0]){

				that.Pendentes.Montar_Postagem.Tipo_Foto(data, i, e, postagem);

			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[1]){

				that.Marcadas.Montar_Postagem.Tipo_Foto(data, i, e, postagem);							
			
			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[2]){

				that.Publicadas.Montar_Postagem.Tipo_Foto(data, i, e, postagem);							
			
			}
			
		}else if(tipo == variacao_de_tipos_de_publicacao[1]){ // tipo video

			// verificação da situacao da postagem ["pendente", "marcada", "publicada"];
			if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[0]){

				that.Pendentes.Montar_Postagem.Tipo_Video(data, i, e, postagem);

			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[1]){

				that.Marcadas.Montar_Postagem.Tipo_Video(data, i, e, postagem);							
			
			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[2]){

				that.Publicadas.Montar_Postagem.Tipo_Video(data, i, e, postagem);							
			
			}
			
		}else if(tipo == variacao_de_tipos_de_publicacao[2]){ // tipo texto

			// verificação da situacao da postagem ["pendente", "marcada", "publicada"];
			if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[0]){

				that.Pendentes.Montar_Postagem.Tipo_Texto(data, i, e, postagem);

			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[1]){

				that.Marcadas.Montar_Postagem.Tipo_Texto(data, i, e, postagem);							
			
			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[2]){

				that.Publicadas.Montar_Postagem.Tipo_Texto(data, i, e, postagem);							
			
			}
			
		}else if(tipo == variacao_de_tipos_de_publicacao[3]){ // tipo audio

			// verificação da situacao da postagem ["pendente", "marcada", "publicada"];
			if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[0]){

				that.Pendentes.Montar_Postagem.Tipo_Audio(data, i, e, postagem);

			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[1]){

				that.Marcadas.Montar_Postagem.Tipo_Audio(data, i, e, postagem);							
			
			}else if(situacao_da_publicacao == variacao_de_situacao_da_publicacao[2]){

				that.Publicadas.Montar_Postagem.Tipo_Audio(data, i, e, postagem);							
			
			}
		}
	}
}