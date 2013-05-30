module.exports = function( grunt ) {

grunt.initConfig({
    uglify : {
		options : {
			mangle : false
		},
		my_target : {
			files : {
				'visao/default/js/script.pacote.js':[
														'visao/default/assets/_js/libs/jquery_1_9_1.js',
														'visao/default/assets/_js/libs/App.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.Dados_Associado.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.Publicadas.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.Pendentes.js',
														'visao/default/assets/_js/AppFiles/App.Carregamento.Postagens.Marcadas.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Pendentes.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Marcadas.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Publicadas.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Audio.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Imagem.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Video.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Tipo_De_Conteudo.Texto.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Departamento.js',
														'visao/default/assets/_js/AppFiles/App.Filtros.Associado.js',
														'visao/default/assets/_js/AppFiles/App.Resposta_De_Postagem.js'
													]
			}
        }
	}, // uglify

	htmlmin: {
    	dist: {
      		options: {
        		removeComments: true,
        		collapseWhitespace: true
      		},
      		files: {
					'visao/default/index.html': 'visao/default/assets/_html/index.html',
					'visao/default/controle.html': 'visao/default/assets/_html/controle.html'
      		}
    	}
  	},

    watch : {
		dist : {
			files : [
				'visao/default/assets/_js/**/*',
				'visao/default/assets/_html/**/*'
			],
			tasks : [ 'uglify', 'htmlmin']
		}
    } // watch
});


// Plugins do Grunt
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks( 'grunt-contrib-watch' );


// Tarefas que serão executadas
grunt.registerTask( 'default', ['uglify', 'htmlmin']);

// Tarefa para Watch
grunt.registerTask( 'w', [ 'watch' ] );

};


