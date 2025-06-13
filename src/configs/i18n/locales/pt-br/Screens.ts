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
      text_already_exclude:
        "Ao continuar, os dados vinculados a esse registro serão excluído do sistema.",
      title_already_exclude: "Você deseja excluir este registro?",
    },
    services: {
      settings_privacy: "Configure a privacidade do serviço:",
      has_limit_vacancies: "Haverá um limite de vagas?",
      inform_limit_vacancies: "Informe o limite máximo de vagas",
      has_limit_reservation: "Será possível aderir a vagas de reserva?",
      inform_limit_reservation: "Informe o limite máximo de reserva",
      service_image: "Adicione uma imagem ao serviço:",
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
      text_fill_information:
        "Preencha as informações da integração:",
    },
  },
};
