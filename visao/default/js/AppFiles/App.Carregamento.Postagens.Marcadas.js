var APP=APP||{};APP.Carregamento=APP.Carregamento||{},APP.Carregamento.Postagens=APP.Carregamento.Postagens||{},APP.Carregamento.Postagens.Marcadas={_tela:null,setUp:function(){console.log("6")},Montar_postagem:{setUp:function(){console.log("6.1")},Tipo_Foto:function(data,i,e,postagem){var id=data.id,tipo=data.tipo,hora_da_publicacao=data.informacoes.hora[0],data_da_publicacao=data.informacoes.hora[1],localizacao=data.localizacao,midia=data.midia,legenda=data.legenda,situacao_anonimo=data.autor.anonimo,nome_do_autor=data.autor.nome,sobrenome_do_autor=data.autor.sobrenome,imagem_do_autor=data.autor.imagem,postagem=(data.situacao.status,data.plataforma,data.categoria,"");$(data).each(function(){postagem+='<article id="'+id+'" class="publicacao tipo'+tipo+' situacao_pendente">',postagem+='<header class="informacoes_contribuidor">',postagem+='<h3 class="nao_me_indentifique'+situacao_anonimo+'"></h3>',postagem+='<figure><img src="'+imagem_do_autor+'" alt="" class="imagem"></figure>',postagem+='<div class="dados_postagem">',postagem+='<h4 class="nome">'+nome_do_autor+" "+sobrenome_do_autor+"</h4>",postagem+='<strong class="data">'+data_da_publicacao+"</strong> às",postagem+='<strong class="horario">'+hora_da_publicacao+"</strong>",postagem+='<strong class="localizacao">Próximo à <span class="lugar">'+localizacao+"</span></strong>",postagem+="</div><!-- dados_postagem -->",postagem+="</header>",postagem+='<section class="conteudo_publicacao">',postagem+="<figure>",postagem+='<img src="'+midia+'" alt="" class="midia"/>',postagem+='<figcapiton class="legenda">'+legenda+"</figcapiton>",postagem+="</figure>",postagem+='<div class="informacoes_situacao">',postagem+='<div class="configuracoes">',postagem+='<div class="publicar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Publicar</span>',postagem+="</div><!-- publicar -->",postagem+='<div class="desmarcar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Desmarcar</span>',postagem+="</div><!-- desmarcar -->",postagem+="</div><!-- configuracoes -->",postagem+='<div class="associados_interessados">',postagem+="<h4>Marcado por:</h4>",postagem+="</div><!-- associados_interessados -->",postagem+="</div><!-- informacoes_situacao -->",postagem+="</section><!-- conteudo_publicacao -->",postagem+="</article><!-- publicacao -->"})},Tipo_Video:function(data,i,e,postagem){var id=data.id,tipo=data.tipo,hora_da_publicacao=data.informacoes.hora[0],data_da_publicacao=data.informacoes.hora[1],localizacao=data.localizacao,midia_ogg=data.midia[0],midia_mp4=data.midia[1],legenda=data.legenda,situacao_anonimo=data.autor.anonimo,nome_do_autor=data.autor.nome,sobrenome_do_autor=data.autor.sobrenome,imagem_do_autor=data.autor.imagem,postagem=(data.situacao.status,data.plataforma,data.categoria,"");$(data).each(function(){postagem+='<article id="'+id+'" class="publicacao tipo'+tipo+' situacao_pendente">',postagem+='<header class="informacoes_contribuidor">',postagem+='<h3 class="nao_me_indentifique'+situacao_anonimo+'"></h3>',postagem+='<figure><img src="'+imagem_do_autor+'" alt="" class="imagem"></figure>',postagem+='<div class="dados_postagem">',postagem+='<h4 class="nome">'+nome_do_autor+" "+sobrenome_do_autor+"</h4>",postagem+='<strong class="data">'+data_da_publicacao+"</strong> às",postagem+='<strong class="horario">'+hora_da_publicacao+"</strong>",postagem+='<strong class="localizacao">Próximo à <span class="lugar">'+localizacao+"</span></strong>",postagem+="</div><!-- dados_postagem -->",postagem+="</header>",postagem+='<section class="conteudo_publicacao">',postagem+='<video width="320" height="240" controls>',postagem+='<source src="'+midia_mp4+'" type="video/mp4" class="midia_mp4">',postagem+='<source src="'+midia_ogg+'" type="video/ogg" class="midia_ogg">',postagem+="</video>",postagem+='<p class="legenda">'+legenda+"</p>",postagem+='<div class="informacoes_situacao">',postagem+='<div class="configuracoes">',postagem+='<div class="publicar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Publicar</span>',postagem+="</div><!-- publicar -->",postagem+='<div class="desmarcar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Desmarcar</span>',postagem+="</div><!-- desmarcar -->",postagem+="</div><!-- configuracoes -->",postagem+='<div class="associados_interessados">',postagem+="<h4>Marcado por:</h4>",postagem+="</div><!-- associados_interessados -->",postagem+="</div><!-- informacoes_situacao -->",postagem+="</section><!-- conteudo_publicacao -->",postagem+="</article><!-- publicacao -->"})},Tipo_Texto:function(data,i,e,postagem){var id=data.id,tipo=data.tipo,hora_da_publicacao=data.informacoes.hora[0],data_da_publicacao=data.informacoes.hora[1],localizacao=data.localizacao,legenda=data.legenda,situacao_anonimo=data.autor.anonimo,nome_do_autor=data.autor.nome,sobrenome_do_autor=data.autor.sobrenome,imagem_do_autor=data.autor.imagem,postagem=(data.situacao.status,data.plataforma,data.categoria,"");$(data).each(function(){postagem+='<article id="'+id+'" class="publicacao tipo'+tipo+' situacao_pendente">',postagem+='<header class="informacoes_contribuidor">',postagem+='<h3 class="nao_me_indentifique'+situacao_anonimo+'"></h3>',postagem+='<figure><img src="'+imagem_do_autor+'" alt="" class="imagem"></figure>',postagem+='<div class="dados_postagem">',postagem+='<h4 class="nome">'+nome_do_autor+" "+sobrenome_do_autor+"</h4>",postagem+='<strong class="data">'+data_da_publicacao+"</strong> às",postagem+='<strong class="horario">'+hora_da_publicacao+"</strong>",postagem+='<strong class="localizacao">Próximo à <span class="lugar">'+localizacao+"</span></strong>",postagem+="</div><!-- dados_postagem -->",postagem+="</header>",postagem+='<section class="conteudo_publicacao">',postagem+='<p class="legenda">'+legenda+"</p>",postagem+='<div class="informacoes_situacao">',postagem+='<div class="configuracoes">',postagem+='<div class="publicar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Publicar</span>',postagem+="</div><!-- publicar -->",postagem+='<div class="desmarcar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Desmarcar</span>',postagem+="</div><!-- desmarcar -->",postagem+="</div><!-- configuracoes -->",postagem+='<div class="associados_interessados">',postagem+="<h4>Marcado por:</h4>",postagem+="</div><!-- associados_interessados -->",postagem+="</div><!-- informacoes_situacao -->",postagem+="</section><!-- conteudo_publicacao -->",postagem+="</article><!-- publicacao -->"})},Tipo_Audio:function(data,i,e,postagem){var id=data.id,tipo=data.tipo,hora_da_publicacao=data.informacoes.hora[0],data_da_publicacao=data.informacoes.hora[1],localizacao=data.localizacao,midia_ogg=data.midia[0],midia_mp3=data.midia[1],legenda=data.legenda,situacao_anonimo=data.autor.anonimo,nome_do_autor=data.autor.nome,sobrenome_do_autor=data.autor.sobrenome,imagem_do_autor=data.autor.imagem,postagem=(data.situacao.status,data.plataforma,data.categoria,"");$(data).each(function(){postagem+='<article id="'+id+'" class="publicacao tipo'+tipo+' situacao_pendente">',postagem+='<header class="informacoes_contribuidor">',postagem+='<h3 class="nao_me_indentifique'+situacao_anonimo+'"></h3>',postagem+='<figure><img src="'+imagem_do_autor+'" alt="" class="imagem"></figure>',postagem+='<div class="dados_postagem">',postagem+='<h4 class="nome">'+nome_do_autor+" "+sobrenome_do_autor+"</h4>",postagem+='<strong class="data">'+data_da_publicacao+"</strong> às",postagem+='<strong class="horario">'+hora_da_publicacao+"</strong>",postagem+='<strong class="localizacao">Próximo à <span class="lugar">'+localizacao+"</span></strong>",postagem+="</div><!-- dados_postagem -->",postagem+="</header>",postagem+='<section class="conteudo_publicacao">',postagem+="<audio controls>",postagem+='<source src="'+midia_ogg+'" type="audio/ogg" class="midia_ogg">',postagem+='<source src="'+midia_mp3+'" type="audio/mpeg" class="midia_mp3">',postagem+="</audio>",postagem+='<p class="legenda">'+legenda+"</p>",postagem+='<div class="informacoes_situacao">',postagem+='<div class="configuracoes">',postagem+='<div class="publicar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Publicar</span>',postagem+="</div><!-- publicar -->",postagem+='<div class="desmarcar botao">',postagem+='<span class="ico"></span>',postagem+='<span class="label">Desmarcar</span>',postagem+="</div><!-- desmarcar -->",postagem+="</div><!-- configuracoes -->",postagem+='<div class="associados_interessados">',postagem+="<h4>Marcado por:</h4>",postagem+="</div><!-- associados_interessados -->",postagem+="</div><!-- informacoes_situacao -->",postagem+="</section><!-- conteudo_publicacao -->",postagem+="</article><!-- publicacao -->"})}}};