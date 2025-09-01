export const Screens = {
  login: {
    title: "Seja bem-vindo!",
    text: "Entre com sua conta de e-mail cadastrada",
    remember_me: "Lembre de mim",
    forgot_password: "Esqueci a minha senha",
  },
  "forgot-password": {
    title: "Informe o seu e-mail cadastrado",
    text: "Se você tiver cadastro na plataforma, enviaremos um link para o e-mail cadastrado para que você possa recuperar a conta.",
  },
  "alter-password": {
    title: "Nova senha",
    text: "Crie uma nova senha para acessar a plataforma.",
    submit: "Criar nova senha",
  },
  successful: {
    need_go_back_login: "Agora, vá para o login para acessar a plataforma.",
  },
  create_user: {
    title: "Primeiro acesso",
    text: "Para acessar a plataforma, informe como gostaria de ser chamado e crie uma senha.",
  },
  services: {
    confirmation: {
      title: "Confirmação de Presença",
      text: "Ao clicar no botão abaixo, você estará confirmando a sua presença no evento",
      invalid_url:
        "A página encontra-se com recursos desatualizados ou inválidos. Copie o link completo e tente novamente, ou entre em contato com o central",
    },
    switch_event: "Escolha um evento",
    selected_form: "Selecione um formulário",
  },
  forms: {
    successful: {
      form_received: "A AGM recebeu seu Formulário com Sucesso!",
      form_message:
        " Sua resposta é super importante para podermos entender e melhorar cada vez mais.",
    },
  },
  logout: {
    text: "Você saiu com segurança. A AGM te espera na próxima! 🐾",
  },
  dashboard: {
    clients: {
      category: {
        text_create_category:
          "Para criar uma categoria, clique em adicionar ou edite uma categoria abaixo:",
        text_organized_items: "Para ordenar a categoria, segure e arraste.",
        text_select_category:
          "Selecione a nova categoria para a base escolhida",
        add_clients_text: "Selecione abaixo os clientes que deseja adicionar",
      },
      client: {
        text_select_information:
          "Selecione quais grupos de informações serão compartilhados",
        text_insert_email: "Insira o e-mail do usuário que receberá os dados",
        text_select_category:
          "Selecione a categoria à qual o cliente pertencerá:",
        text_fill_information:
          "Preencha os dados abaixo para criar um novo cliente:",
        title_already_exclude: "Você deseja excluir este cliente?",
        text_already_exclude:
          "Ao continuar, todos os dados dos clientes selecionados serão excluídos, e eles não poderão mais acessar até que sejam recadastrados.",
      },
    },
    finances: {
      about_name_and_service:
        "Caso não seja dado o nome a cobrança, ela irá herdar o nome do serviço",
      about_period:
        "Defina acima a quantidade de meses referente ao intervalo de cada cobrança. Ex: 1 (Mensal), 3 (Trimestral) e etc.",
      about_privacy_and_services:
        "Ao escolher um serviço, a privacidade será definida por ele*",
      text_already_exclude:
        "Ao continuar, todos os dados da cobrança serão excluídos, e ela não poderá mais ser acessado até que seja recadastrado.",
      title_already_exclude: "Você deseja excluir esta cobrança?",
    },
    dispatchers: {
      select_shape_send: "Selecione um ou mais formas de envio:",
      ask_about_send_files_images:
        "Será enviado arquivos como PDFs ou documentos?",
      text_already_exclude:
        "Ao continuar, o envio será excluído e seus agendamento cancelados.",
      title_already_exclude: "Você deseja excluir este envio?",
    },
    forms: {
      about_thanks_message:
        "Escreva aqui instruções ou informações para serem exibidas após o preenchimento dos formulários",
      text_already_exclude:
        "Ao continuar, os dados vinculados a esse registro serão excluído do sistema.",
      title_already_exclude: "Você deseja excluir este registro?",
      fills: {
        text_already_exclude:
          "Ao continuar, os dados vinculados a esse registro serão excluído do sistema.",
        title_already_exclude: "Você deseja excluir este registro?",
      },
    },
    services: {
      settings_privacy: "Configure a privacidade do serviço:",
      has_limit_vacancies: "Haverá um limite de vagas?",
      inform_limit_vacancies: "Informe o limite máximo de vagas",
      has_limit_reservation: "Será possível aderir a vagas de reserva?",
      inform_limit_reservation: "Informe o limite máximo de reserva",
      service_image: "Adicione uma imagem ao serviço:",
      text_alert_about_alerts_inscribes:
        "Escreva detalhes avisos para os inscritos",
      inscribes_alert: "Avisos para os inscritos",
      awaiting_inscribe:
        "Aguarde enquanto o cliente estará sendo inscrito e enviado a confirmação",
    },
    schedules: {
      required_users: "É obrigatório escolher um usuário",
    },
    users: {
      create_user_groups: "Criar grupos de usuários",
      invite_users: "Convidar usuários",
      users_groups: "Grupos de Usuários",
      user_group: "Grupo de Usuário",
      group_desative: "Desativar grupo",

      group: {
        text_insert_name: "Insira um nome para o grupo de usuários:",
        text_select_permissions:
          "Selecione as permissões que estarão ativas para este grupo:",
        title_already_active: "Você deseja ativar este grupo de usuários?",
        text_already_active:
          "Ao continuar, todos os usuários deste grupo reativarão o acesso e as suas permissões.",
        title_already_desative: "Você deseja desativar este grupo de usuários?",
        text_already_desative:
          "Ao continuar, todos os usuários deste grupo perderão o acesso, pois suas permissões serão bloqueadas.",
        text_already_exclude:
          "Ao continuar, todos os usuários deste grupo perderão o acesso, pois suas permissões serão bloqueadas.",
        title_already_exclude: "Você deseja excluir este grupo de usuários?",
      },
      user: {
        text_select_group: "Selecione os grupos ao qual o usuário pertencerá:",
        text_fill_information:
          "Preencha as informações abaixo para convidar um novo usuário:",
        text_awaiting_after_delete_desative:
          "Ao continuar, todos os usuários perderão o acesso, pois suas permissões serão bloqueadas.",
        title_already_active: "Você deseja ativar este usuários?",
        text_already_active:
          "Ao continuar, o usuário reativará o acesso e as suas permissões.",
        text_already_desative:
          "Ao continuar, todos os dados dos usuário selecionado será excluído, e eles não poderá mais acessar até que sejam restaurados.",
        title_already_desative: "Você deseja desativar este cliente?",
        text_already_exclude:
          "Ao continuar, todos os dados dos usuário selecionado serão desabilitados, e eles não poderá mais acessar até que seja ativo novamente.",
        title_already_exclude: "Você deseja excluir este cliente?",
      },
      invites: {
        text_already_resend:
          "Ao continuar, o convite enviado anteriormente com o token e as demais informações serão invalidadas.",
        title_already_resend: "Você deseja reenviar o convite ao usuário?",
        text_already_exclude:
          "Ao continuar, o convite será invalidado e os dados do usuário anexados sumiram do sistema.",
        title_already_exclude: "Você deseja excluir este convite?",
        success_title_resend: "Convite reenviado",
        success_text_resend: "Seu convite foi reenviado com sucesso!",
        success_title_delete: "Convite excluído",
        success_text_delete: "Seu convite foi excluído com sucesso!",
      },
    },
    apis: {
      text_fill_information: "Preencha as informações da integração:",
    },
  },
  home: {
    contact: {
      address_title: "Nosso Endereço",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Fale conosco",
      phone: "(21) 97129-2030",
      email_title: "Nos envie um e-mail",
      email: "contato@agmturismomarica.com.br",
    },
    menu: {
      logo: "logotype AGM",
      about_us: "Sobre Nós",
      partners: "Nossos Parceiros",
    },
    status: {
      tours: "+100 Passeios",
      guides: "+40 Guias",
      modalities: "+6 Modalidades",
      travelers: "+1000 Viajantes",
    },
    about: {
      title: "Um pouco sobre nós",
      subtitle: "Associação dos Guias de Turismo de Maricá",
      description_1:
        "A Associação de Guias de Turismo de Maricá (AGM) é uma entidade sem fins lucrativos que reúne profissionais qualificados e comprometidos em promover o turismo responsável, sustentável e de qualidade em Maricá e região.",
      description_2:
        "Fundada com o objetivo de valorizar e fortalecer a profissão de guia de turismo, a AGM atua como ponto de referência para visitantes, agências, operadoras e parceiros do trade turístico, sempre priorizando a excelência no atendimento, a segurança e a preservação do patrimônio natural, cultural e histórico.",
    },
    events: {
      title: "Cronograma e serviços",
      subtitle: "Nossas atrações e atividades",
      not_available: {
        title: "Não há eventos disponíveis",
        text: "No momento não há eventos disponíveis, mas em breve teremos novidades. Fique ligado!",
      },
    },
    gallery: {
      title: "AGM & VOCÊ",
      subtitle: "Nossas lembranças",
      description:
        "Cada foto aqui guarda um pedacinho da nossa história. Para a AGM, é uma alegria imensa compartilhar momentos únicos com nossos clientes e amigos que participam das atividades turísticas. Cada sorriso e cada experiência vivida juntos reforçam o nosso propósito: transformar passeios em memórias inesquecíveis",
    },
    support_network: {
      title: "Rede de apoio",
      subtitle: "Instituições que fortalecem nosso trabalho",
    },
    faq: {
      title: "Duvidas & Respostas",
      description: "Encontre as respostas no nosso FAQ",
      questions: [
        {
          question: "Quais são as funções da Associação?",
          answer:
            "A AGM atua como agente impulsionador do turismo local, promovendo um turismo sustentável e de qualidade. Oferecemos treinamentos, atualizações de mercado e oportunidades de networking para guias de turismo. Também trabalhamos em parceria com autoridades locais para regulamentar e valorizar a profissão.",
        },
        {
          question: "Quando a Associação foi fundada?",
          answer: "A AGM foi fundada em 13 de julho de 2021.",
        },
        {
          question: "Quem está na presidência da AGM?",
          answer:
            "Atualmente, o presidente é Alberto Matrilhas e a vice-presidente é Thaís Bellotti.",
        },
        {
          question: "Onde fica a sede da AGM?",
          answer:
            "Nossa sede, também chamada de Central de Passeios, está localizada na Rua Abreu Sodré, 43 - Centro, Maricá - RJ, 24913-775.",
        },
        {
          question: "Quais são os dias e horários de atendimento?",
          answer:
            "Funcionamos todos os dias da semana, de segunda a domingo, das 9h às 17h.",
        },
        {
          question: "Por que se associar à AGM?",
          answer:
            "Ao se tornar associado, você integra uma comunidade que valoriza a história, a cultura e os atrativos turísticos da região. Além de ampliar conhecimentos e oportunidades, contribui para oferecer aos turistas experiências autênticas e seguras, fortalecendo ainda mais o turismo em Maricá.",
        },
        {
          question: "Quem pode se associar?",
          answer:
            "Podem se associar tanto pessoas físicas quanto jurídicas, incluindo: guias de turismo, condutores, monitores, profissionais e empresas do trade turístico, estabelecimentos de hotelaria e gastronomia, gráficas, colaboradores e cooperadores.",
        },
        {
          question: "Qual é a contribuição da AGM para o turismo em Maricá?",
          answer:
            "A AGM participa ativamente de eventos e iniciativas locais, como Caravana Celebrar Maricá, Expo Valley, Expo Maricá, Vem Viver Maricá, Vem Viver Espraiado, Recantando, Curta Itaocaia, Espraiado de Portas Abertas, Conheça Maricá, Maricá Games, FLIN, Congresso de Hidrogênio, Feira das Profissões, BRICS+, além de visitas técnicas e capacitações. Nosso compromisso é o fortalecimento contínuo do turismo em Maricá, por meio de parcerias e ações que valorizam profissionais e elevam a qualidade do setor.",
        },
      ],
    },
    newsletter: {
      title: "Viaje conosco",
      subtitle: "Seja mais um viajante conectado conosco",
      description: "Inscreva-se para receber notícias e novidades",
      form: {
        name: "Nome",
        phone: "Telefone",
        button: "Inscrever-se",
      },
    },
    testimonials: [
      {
        title: "Comentário do viajante",
        text: "Adorei participar do passeio por Maricá com a AGM nos jeeps! Foi uma experiência maravilhosa, cheia de belas paisagens e momentos inesquecíveis.",
        author: "Igor Fernandes",
        info: "Morador de Maricá - RJ",
      },
      {
        title: "Comentário do viajante",
        text: "Foi incrível viver essa experiência com a AGM! As atividades foram muito bem organizadas, com momentos divertidos e especiais do início ao fim. Já quero participar novamente!",
        author: "Joyce Pedro",
        info: "Morador de Ouro Preto - MG",
      },
      {
        title: "Comentário do viajante",
        text: "A AGM está de parabéns! Participar das atividades foi maravilhoso, tudo muito bem planejado e cheio de momentos únicos. Recomendo a todos!",
        author: "Jofre Martins",
        info: "Morador de São Gonçalo - RJ",
      },
      {
        title: "Comentário do viajante",
        text: "Uma experiência inesquecível com a AGM! Cada detalhe das atividades foi pensado com carinho, proporcionando diversão, aprendizado e muita energia positiva.",
        author: "Henrique José",
        info: "Morador de Maricá - RJ",
      },
    ],
  },
};
