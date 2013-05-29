module.exports = function( grunt ) {

	grunt.initConfig({

		uglify : {
			options : {
				mangle : false
			},

			my_target : {
				files : {
					'visao/default/js/libs/App.js' : [ 'visao/default/assets/_js/libs/App.js' ],
					'visao/default/js/libs/jquery_1_9_1.js' : [ 'visao/default/assets/_js/libs/jquery_1_9_1.js' ],
					'visao/default/js/AppFiles/App.Carregamento.js' : [ 'visao/default/assets/_js/AppFiles/App.Carregamento.js' ],
					'visao/default/js/AppFiles/App.Carregamento.Dados_Associado.js' : [ 'visao/default/assets/_js/AppFiles/App.Carregamento.Dados_Associado.js' ],
					'visao/default/js/AppFiles/App.Carregamento.Postagens.js' : [ 'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.js' ],
					'visao/default/js/AppFiles/App.Carregamento.Postagens.Pendentes.js' : [ 'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.Pendentes.js' ],
					'visao/default/js/AppFiles/App.Carregamento.Postagens.Marcadas.js' : [ 'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.Marcadas.js' ],
					'visao/default/js/AppFiles/App.Filtros.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.js' ],
					'visao/default/js/AppFiles/App.Filtros.Pendentes.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Pendentes.js' ],
					'visao/default/js/AppFiles/App.Filtros.Marcadas.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Marcadas.js' ],
					'visao/default/js/AppFiles/App.Filtros.Publicadas.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Publicadas.js' ],
					'visao/default/js/AppFiles/App.Filtros.Tipo_De_Conteudo.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.js' ],
					'visao/default/js/AppFiles/App.Filtros.Tipo_De_Conteudo.Audio.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Audio.js' ],
					'visao/default/js/AppFiles/App.Filtros.Tipo_De_Conteudo.Imagem.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Imagem.js' ],
					'visao/default/js/AppFiles/App.Filtros.Tipo_De_Conteudo.Video.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Video.js' ],
					'visao/default/js/AppFiles/App.Filtros.Tipo_De_Conteudo.Texto.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Texto.js' ],
					'visao/default/js/AppFiles/App.Filtros.Departamento.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Departamento.js' ],
					'visao/default/js/AppFiles/App.Filtros.Associado.js' : [ 'visao/default/assets/_js/AppFiles/App.Filtros.Associado.js' ],
					'visao/default/js/AppFiles/App.Resposta_De_Postagem.js' : [ 'visao/default/assets/_js/AppFiles/App.Resposta_De_Postagem.js' ]
				}
			}
	    }, // uglify


	    sass : {
      		dist : {
        		files : {
					'visao/default/css/estilos/estilo.padrao.css' : 'visao/default/assets/_sass/estilo.padrao.sass',
				}
			}
		}, // sass


		watch : {
      		dist : {
        		files : [
          			'visao/default/assets/_js/**/*',
          			'visao/default/assets/_sass/**/*'
        		],

				tasks : [ 'uglify', 'sass' ]
      		}
    	} // watch
	});


	// Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );


	// Tarefas que serão executadas
	grunt.registerTask( 'default', [ 'uglify', 'sass' ] );


	// Tarefa para Watch
	grunt.registerTask( 'w', [ 'watch' ] );
};