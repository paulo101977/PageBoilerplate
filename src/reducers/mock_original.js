// ++++ IMPORTANDO IMAGENS ++++++++++++++++++++++++++++++++++++++++

let urlImg01 = '../assets/images/galinha-pintadinha-mais-playkids.png'
let urlImg02 = '../assets/images/oi-revistas.png'
let urlImg03 = '../assets/images/oi-audiolivros.png'
let urlImg04 = '../assets/images/mais-mulher.png'
let urlImg05 = '../assets/images/educa-mais.png'
let urlImg06 = '../assets/images/pikachu-mais-cartoon.png'
let urlImg07 = '../assets/images/seguranca-multidispositivo.png'
let urlImg08 = '../assets/images/oi-cloud.png'

let AtHeroImg = '../assets/images/img-hero.png'
let AtBannerImg = '../assets/images/celulares-oi-mais-controle.png'
let AtFooterImg = '../assets/images/oi-logo-purple-degrade-1.svg'

const JSONTarget = {}

const JSONFooter = {
	LogoImg: AtFooterImg
	,ListaLinks : [
	{
		titulo:     "Combo", linkTitulo: "http://www.oi.com.br/combo/",
		subtitulo1: "Planos", linkSubtitulo1: "http://www.oi.com.br/minha-oi/combo/",
		subtitulo2: "Atendimento", linkSubtitulo2: "http://www.oi.com.br/minha-oi/combo/",
		subtitulo3: "Serviços Adicionais", linkSubtitulo3: "http://www.oi.com.br/minha-oi/combo/",
		iconType:   "combo"

	},
	{
		titulo:     "TV HD", linkTitulo: "http://www.oi.com.br/tv-hd/",
		subtitulo1: "Planos", linkSubtitulo1: "http://www.oi.com.br/minha-oi/tv-hd/",
		subtitulo2: "Atendimento", linkSubtitulo2: "http://www.oi.com.br/minha-oi/tv-hd/",
		subtitulo3: "Serviços Adicionais", linkSubtitulo3: "http://www.oi.com.br/minha-oi/tv-hd/",
		iconType:   "product-tv-HD"

	},
	{
		titulo:     "Celular", linkTitulo: "http://www.oi.com.br/celular/celular/",
		subtitulo1: "Planos", linkSubtitulo1: "http://www.oi.com.br/minha-oi/celular/",
		subtitulo2: "Atendimento", linkSubtitulo2: "http://www.oi.com.br/minha-oi/celular/",
		subtitulo3: "Serviços Adicionais", linkSubtitulo3: "http://www.oi.com.br/minha-oi/celular/",
		iconType:   "celular"

	},
	{
		titulo:     "Internet", linkTitulo: "http://www.oi.com.br/internet/internet/",
		subtitulo1: "Planos", linkSubtitulo1: "http://www.oi.com.br/minha-oi/internet/",
		subtitulo2: "Atendimento", linkSubtitulo2: "http://www.oi.com.br/minha-oi/internet/",
		subtitulo3: "Serviços Adicionais", linkSubtitulo3: "http://www.oi.com.br/minha-oi/internet/",
		iconType:   "internet"

	},
	{
		titulo:     "Fixo", linkTitulo: "http://www.oi.com.br/fixo/",
		subtitulo1: "Planos", linkSubtitulo1: "http://www.oi.com.br/minha-oi/fixo/",
		subtitulo2: "Atendimento", linkSubtitulo2: "http://www.oi.com.br/minha-oi/fixo/",
		subtitulo3: "Serviços Adicionais", linkSubtitulo3: "http://www.oi.com.br/minha-oi/fixo/",
		iconType:   "product-fixo"
	}
	]
	,ListaSocial : [
	{url: "https://www.facebook.com/OiOficial/", icon: "facebook"},
	{url: "http://www.twitter.com/digaoi/", icon: "twitter"},
	{url: "https://plus.google.com/115847270243364627101", icon: "google-plus"},
	{url: "https://www.youtube.com/user/oi/", icon: "youtube"},
	]
	,FooterBotton : {
	texto1:`Você`, url1:`http://www.oi.com.br/`
	,texto2:`Empresas`, url2:`http://www.oi.com.br/oi/oi-pra-empresas/`
	,texto3:`Investidores`, url3:`http://ri.oi.com.br/oi2012/web/default_pt.asp?idioma=0&conta=28`
	,texto4:`Sobre a Oi`, url4:`http://www.oi.com.br/oi/sobre-a-oi/`
	,texto5:`Lojas da Oi`, url5:`http://www.oi.com.br/oi/oi-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/`
	,texto6:`OITO`, url6:`http://www.oito.net.br/`
  	,texto7:`Outras Operadoras`, url7:`http://www.oi.com.br/outras-operadoras/`
  }
}

JSONTarget['JSONFooter'] = JSONFooter;

// JSOMN do CARDs de Pré, Controle e Pós da Oi horizontis.
const JSONCardsH1 = [{
	CardType: "Horizontal"
	, urlImg: urlImg02
	, titulo: 'Oi Revistas'
	, texto: 'Baixe e leia revistas quando e onde quiser.'
	, envie: 'Ou envie REVISTAS pra 5051'
	, Price: {
		BigValue: '3'
		, Cents: '99'
		, Period: 'semana'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Centenas de revistas'
		, 'Leia no tablet, celular e PC'
		, 'Aplicativo pra iOS e Android'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg01
	, titulo: 'Playkids'
	, texto: 'Os maiores sucessos dos desenhos animados pro seu filho.'
	, envie: 'Ou envie REVISTAS pra 5051'
	, Price: {
		BigValue: '4'
		, Cents: '99'
		, Period: 'semana'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Mais de 1.000 episódios'
		, 'Estimule a imaginação'
		, 'Livros digitais das historinhas'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg03
	, titulo: 'Oi Audiolivros'
	, texto: 'Ouça seus livros preferidos em qualquer lugar.'
	, envie: 'Ou envie REVISTAS pra 5051'
	, Price: {
		BigValue: '3'
		, Cents: '99'
		, Period: 'semana'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Audiolivros na palma da mão'
		, 'Ouça mesmo sem internet'
		, 'Aplicativo pra iOS e Android'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg04
	, titulo: 'Mais Mulher'
	, texto: 'O universo feminino em um só lugar'
	, envie: 'Ou envie REVISTAS pra 5051'
	, Price: {
		BigValue: '4'
		, Cents: '99'
		, Period: 'semana'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Informações sobre vida saudável'
		, 'Dicas de moda e beleza'
		, 'Comportamento e lifestyle'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}]

JSONTarget['JSONCardsH1'] = JSONCardsH1;

// JSOMN dos CARDs de Pré, Controle e Pós da Oi verticais.
let JSONCardsVertical1 = [
	{
		CardType: "Vertical"
		, icon: "seguranca"
		, titulo: 'Oi Segurança'
		, texto: 'Proteja-se contra vírus e invasões'
		, envie: 'Ou envie 1 pra 5990'
		, Price: {
			BigValue: '3'
			, Cents: '99'
			, Period: 'semana'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Monitore o acesso dos seus filhos'
			, 'Proteção contra ameaças digitais'
			, 'Guarde seus arquivos na nuvem'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "aprender"
		, titulo: 'Para aprender'
		, texto: 'O serviço de educação da Oi.'
		, envie: 'Ou envie SIM pra 120'
		, Price: {
			BigValue: '3'
			, Cents: '99'
			, Period: 'semana'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Cursos profissionalizantes'
			, 'Empreendedorismo'
			, 'Idiomas'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "descontos"
		, titulo: 'Clube de descontos'
		, texto: 'Cupons de desconto em lojas, restaurantes e viagens.'
		, envie: 'Ou envie 1 pra 5990'
		, Price: {
			BigValue: '3'
			, Cents: '99'
			, Period: 'semana'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Clube de descontos'
			, 'Cupons de desconto em lojas'
			, 'restaurantes e viagens.'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "recompensa"
		, titulo: 'Oi Recompensa'
		, texto: 'Acumule pontos a cada recarga e troque por recompensas.'
		, envie: 'Ou envie SIM pra 120'
		, Price: {
			BigValue: '2'
			, Cents: '99'
			, Period: 'semana'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Oi Recompensa'
			, 'Acumule ponto'
			, 'Troque por recompensas'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}
]

JSONTarget['JSONCardsVertical1'] = JSONCardsVertical1;

// JSOMN dos CARDs "Todos os clientes Oi" horizontais.
const JSONCardsH2 = [{
	CardType: "Horizontal"
	, urlImg: urlImg05
	, titulo: 'Educa +'
	, texto: 'Reforço escolar do Fundamental ao pré-vestibular. Simulados e professores para tirar dúvidas.'
	, envie: ''
	, Price: {
		BigValue: '12'
		, Cents: '90'
		, Period: 'mês'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Simulados pro Enem e vestibular'
		, 'Professores online'
		, 'Proteção para dispositivos móveis'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg06
	, titulo: 'Cartoon'
	, texto: 'Os desenhos do Cartoon Network disponíveis na internet quando e onde quiser.'
	, envie: ''
	, Price: {
		BigValue: '4'
		, Cents: '99'
		, Period: 'semana'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Assista onde e quando quiser'
		, 'Monte sua própria programação'
		, 'Acesso ilimitado ao conteúdo'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg07
	, titulo: 'Segurança Multidispositivo'
	, texto: 'Proteção completa contra vírus e programas indesejados e spans.'
	, envie: ''
	, Price: {
		BigValue: '19'
		, Cents: '90'
		, Period: 'Mês'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Defesa contra spams'
		, 'Segurança pra computadores'
		, 'Proteção pra dispositivos móveis'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}, {
	CardType: "Horizontal"
	, urlImg: urlImg08
	, titulo: 'Oi Cloud'
	, texto: 'Seus arquivos sempre com você. Seus arquivos ficam atualizados e acessíveis de qualquer dispositivo.'
	, envie: ''
	, Price: {
		BigValue: '9'
		, Cents: '90'
		, Period: 'Mês'
	}
	,ButtonText:'Contrate agora'
	,ButtonUrl:'Contrate agora'
	, lista: [
		'Seus documentos na nuvem'
		, 'Baixe arquivos com segurança'
		, 'Acesso remoto a qualquer hora'
	]
	, TextLink: 'Conheça o serviço'
	, Url: 'http://www.oi.com.br/minha-oi/celular/'
	, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
}]

JSONTarget['JSONCardsH2'] = JSONCardsH2;

// JSOMN dos CARDs de "Todos os clientes Oi" verticais.
let JSONCardsVertical2 = [
	{
		CardType: "Vertical"
		, icon: "suporte"
		, titulo: 'Suporte Multidispositivo'
		, texto: 'Técnicos especializados disponíveis 24h/dia'
		, envie: ''
		, Price: {
			BigValue: '14'
			, Cents: '90'
			, Period: 'Mês'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Configure seus aparelhos'
			, 'Assistência pra computador e TV'
			, 'Tire suas dúvidas técnicas'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "aprender"
		, titulo: 'Inglês'
		, texto: 'A melhor opção para quem quer dominar o idioma.'
		, envie: ''
		, Price: {
			BigValue: '29'
			, Cents: '90'
			, Period: 'Mês'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Aulas online 24h/dia'
			, 'Do nível iniciante ao fluente'
			, 'Professores nativos'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "conexao"
		, titulo: 'Conexão Saúde'
		, texto: 'Tire suas dúvidas sobre saúde numa fonte segura.'
		, envie: ''
		, Price: {
			BigValue: '7'
			, Cents: '99'
			, Period: 'Mês'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Conteúdo profissional sobre saúde'
			, 'Até 55% de desconto em remédios'
			, '+ de 9 mil farmácias cadastradas'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}, {
		CardType: "Vertical"
		, icon: "protecao"
		, titulo: 'Proteção da família'
		, texto: 'Controle o acesso à internet dos seus filhos.'
		, envie: ''
		, Price: {
			BigValue: '11'
			, Cents: '90'
			, Period: 'Mês'
		}
		,ButtonText:'Contrate agora'
		,ButtonUrl:'Contrate agora'
		, lista: [
			'Bloqueio de sites inapropriados'
			, 'Gerencie o tempo de internet'
			, 'Receba alertas se um site inadequado for acessado'
		]
		, TextLink: 'Conheça o serviço'
		, Url: 'http://www.oi.com.br/minha-oi/celular/'
		, Nota: 'Válido para clientes Pré, Controle ou Póis da Oi | Pra cancelar, envie SAIR para 30151'
	}]


JSONTarget['JSONCardsVertical2'] = JSONCardsVertical2;


const JSONBanner = {
	AtSecImg: AtBannerImg
	, subtitulo:"Oi mais controle intermediário"
	, titulo:"Migre seu Pré da Oi pro Controle e tenha ainda mais benefícios"
	,lista : [
	  'Troque minutos e internet quando quiser',
	  'Minutos pra qualquer operadora',
	  'Pague no cartão ou no boleto digital'
	]
	,oferta:"3 GB + 500 minutos"
	,priceValue:"49"
	,priceCents:"90"
	,pricePeriod:"Mês"
	,complement:"Apenas"
	,symbol:"R$"
	,but1:"Assine já"
	,but2:"Conheça outros planos"
	,but3:"Conheça outros planos"
	}

JSONTarget['JSONBanner'] = JSONBanner

JSONTarget['TabTitle1'] = "pré, controle e pós da oi"
JSONTarget['TabTitle2'] = "Todos os clientes oi"

export default JSONTarget;
export {JSONTarget}
