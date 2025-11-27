export const Api = {
  exports: {
    invalid: {
      in_ids:
        "Os dados selecionados estão corrompidos ou o sistema está com problemas para processá-los",
      type: "O tipo da exportação é obrigatório, mas não foi enviado corretamente",
      entity:
        "O tipo de dado a ser exportado está incorreto ou com problemas em seus registros.",
    },
    success: {
      post: "A exportação foi concluída com sucesso",
    },
    service_problem:
      "Ao tentar criar ou retornar o arquivo, ocorreu um problema. Verifique se o arquivo já foi criado no histórico de arquivos, há dados disponíveis ou tente novamente.",
  },
  mailer: {
    invalid: {
      email:
        "O sistema incluiu o cliente no evento, mas não conseguiu notificar o cliente por não conter o seu e-mail em seu cadastro.",
    },
  },
  unauthorized:
    "O usuário foi desconectado ou não contém permissão para continuar a ação",
  default: {
    not_auth:
      "O usuário foi desconectado ou não contém permissão para continuar a ação",
    internal_error:
      "Ocorreu um erro severo na aplicação. Entre em contato com o suporte.",
    error: "Estamos analisando o problema. Tente novamente mais tarde.",
  },
  invalid: {
    email: "O e-mail encontra-se inexiste ou inválido",
    recaptcha:
      "A página está com recursos desatualizados. Recarregue e tente novamente.",
    csrf: "A página está com recursos desatualizados ou inexistentes. Recarregue e tente novamente.",
  },
  auth: {
    success: {
      post: "Aguarde. Você logo será redirecionado!",
    },
    invalid: {
      password: "A senha encontra-se com o formato inválido ou inexistente",
      rememberMe:
        "A função 'lembrar-me' está com problemas. Recarrega e tente novamente.",
      recaptcha:
        "A página está com recursos desatualizados. Recarregue e tente novamente.",
      credentials: "As credenciais informadas estão inválidas",
    },
  },
  remember: {
    success: {
      post: "Aguarde. Você logo será redirecionado!",
    },
    invalid: {
      token:
        "Não foi possível conectar-se automaticamente. Faça o login manualmente.",
    },
  },
  subscribe: {
    success: {
      post: "Agora você sempre estará conectado conosco!",
    },
  },
  clients: {
    categories: {
      success: {
        post: "As categorias foram atualizadas com sucesso!",
        patch: "A categoria do(s) cliente(s) foi alterada com sucesso",
      },
      invalid: {
        id: "A categoria informado não existe ou está inválido",
        client_id: "O cliente informado não existe ou está inválido",
        name: "O nome da categoria informada está inválido",
        name_contains: "O nome da categoria informada está inválido",
        description: "A descrição da categoria informada está inválido",
        created_at: "A data de criação da categoria está inválida",
        updated_at: "A data de atualização da categoria está inválida",
        categories: "As categories informadas estão ausentes ou inválidas",
        linked_category:
          "Desvincule as categorias aos clientes antes de excluir-las",
      },
    },
    subscribes: {
      success: {
        post: "A AGM agradece a sua inscrição e manterá você informado sobre todas as novidades",
      },
      invalid: {
        name: "É obrigatório preencher o seu nome",
        phone: "É obrigatório preencher o seu telefone",
      },
    },
    dispatchers: {
      invalid: {
        client_id:
          "O cliente informado encontra-se inválido para o envio de mensagens",
        status: "O status do envio encontra-se inválido",
        dispatcher: "O envio encontra-se inválido",
        message_id: "O conteúdo do envio encontra-se inválido",
      },
    },
    events: {
      success: {
        post: "O(s) cliente(s) foi(ram) inscrito(s) com sucesso!",
        inscribe: "O usuário foi inscrito com sucesso!",
      },
      isConfirm: {
        success: "Confirmado com sucesso!",
      },
      invalid: {
        already_inscribe:
          "O seu cpf já está vinculado a um preenchimento deste formulário. Uso outro e tente novamente",
        status: "O evento está inativado e não poderá receber novas inscrições",
      },
    },
    fields: {
      success: {
        post: "O campo foi criado com sucesso!",
      },
      invalid: {
        name_max_length_100:
          "O campo contém nome com o limite acima do máximo de 100 caracteres.",
        component:
          "O tipo de campo informado encontra-se inválido ou indisponível para essa operação.",
        type_max_length_50:
          "O campo contém type com o limite acima do máximo de 50 caracteres.",
        scope: "O campo criado não pode ser atribuído a esse grupo",
        is_required:
          "O campo de 'É obrigatório', foi preenchido incorretamente",
        is_sensitive: "O campo de 'É sensível', foi preenchido incorretamente",
        group_id: "O grupo informado encontra-se inválido ou desativado",
        client_id: "O cliente informado encontra-se inexistente no sistema",
        id: "O campo encontra-se com o identificador ausente. Recarregue e tente novamente.",
      },
    },
    success: {
      imports: "Os clientes foram importados com sucesso",
      post: "O cliente foi criado com sucesso!",
      put: "O cliente foi atualizado com sucesso!",
      delete: "O cliente foi excluído com sucesso!",
      patch: "A categoria do(s) cliente(s) foi atualizada(os) com sucesso!",
    },
    invalid: {
      id: "O cliente não pode ser encontrado",
      data: "O sistema encontrou um problema. Tente novamente mais tarde",
      path: "O sistema encontrou um problema. Tente novamente mais tarde",
      in_ids: "Os clientes informados encontram-se com alguma irregularidade",
      client: "O cliente informado encontra-se inexistente ou inválido",
      clients: "Os clientes informados encontram-se inexistentes ou inválidos",
      category:
        "A categoria do cliente informada encontra-se vazia ou inválida",
      name: "O nome informado do cliente encontra-se inválido",
      name_max_length_100:
        "O cliente contém nome com o limite acima do máximo de 100 caracteres.",
      avatar: "O avatar do cliente contém uma url inválida",
      phone:
        "O telefone informado do cliente encontra-se utilizado ou inválido",
      phone_max_length_35:
        "O cliente contém telefone com o limite acima do máximo de 35 caracteres.",
      birthdate:
        "A data de nascimento informada do cliente encontra-se inválido",
      email: "O e-mail informado do cliente encontra-se inválido",
      email_max_length_255:
        "O cliente contém e-mail com o limite acima do máximo de 255 caracteres.",
      created_at: "A data de criação informada do cliente encontra-se inválido",
      updated_at:
        "A data de atualização informada do cliente encontra-se inválido",
      not_found_category: "A categoria escondida está inválida ou indisponível",
    },
  },
  files: {
    invalid: {
      files:
        "Algum arquivo foi mal inserido ou cancelado e por isso não pode ser finalizado.",
    },
  },
  forms: {
    invalid: {
      fields:
        "Os campos encontram-se sem alteração ou mal formulados e impossível de sofrer alteração",
    },
  },
  custom_forms: {
    fills: {
      success: {
        delete: "O registro foi excluído com sucesso!",
        post: "O formulário preenchido foi excluído com sucesso!",
      },
    },
    success: {
      post: "O formulário foi criado com sucesso!",
      put: "O formulário foi atualizado com sucesso!",
      delete: "O formulário foi excluído com sucesso!",
    },
    invalid: {
      id: "A formulário informado não existe ou está inválido",
      in_ids:
        "Os formulários informados encontram-se com alguma irregularidade",
      name: "O nome do formulário informado está inválido",
      name_contains: "O nome do formulário informado está inválido",
      components: "Os campos do formulário encontram-se inválidos",
      slug: "O atalho de rota do formulário encontra-se inválido",
      slug_contains: "O atalho de rota do formulário encontra-se inválido",
      type: "O tipo do formulário está inválido",
      description: "A descrição do formulário informada está inválido",
      description_contains: "A descrição do formulário está inválido",
      status: "O status do envio encontra-se inválido",
      created_at: "A data de criação do formulário está inválido",
      updated_at: "A data de atualização do formulário está inválida",
      not_found: "O formulário não foi encontrada",
      client: "Operação inválida. O registro não contém um cliente vinculado.",
      color_mark:
        "A cor escolhida não atende o padrão hexadecimal permitido pelo sistema",
      thanks_message:
        "As informações inseridas no campo de mensagem de agradecimento encontram-se inválidas",
    },
    services: {
      success: {
        inscribe: "O cliente foi inscrito no evento com sucesso!",
      },
    },
  },
  dispatchers: {
    success: {
      post: "O envio foi criado com sucesso!",
      put: "O envio foi atualizado com sucesso!",
      delete: "O envio foi excluído com sucesso!",
    },
    invalid: {
      id: "O envio informado não existe ou está inválido",
      in_ids: "Os envios informados encontram-se com alguma irregularidade",
      title: "O título do envio informado está inválido ou inexistente",
      status: "O status do envio está inválido ou vazio",
      period: "O período do envio só poderá ser 'Diário','Semanal' ou 'Mensal'",
      content: "O conteúdo do envio está vazio ou inválido",
      platforms: "A plataforma escolhida para os envios está inválida",
      service_id: "O serviço está inválido ou não existe",
      charge_id: "A cobrança está inválida ou não existe",
      scheduled_day: "O dia de envio do agendamento está inválida",
      started_at: "A data de início dos envios está inválida",
      not_found_content: "Não foi possível encontrar o conteúdo do envio",
      not_found_clients:
        "Não foi possível encontrar os clientes para realizar os envios.",
      not_found: "O envio não foi encontrado",
    },
  },
  fields: {
    success: {
      post: "O campo foi criado com sucesso!",
      delete: "O campo foi excluído com sucesso!",
    },
    invalid: {
      name: "O nome do campo informado está inválido",
      name_max_length_100:
        "O campo contém nome com o limite acima do máximo de 100 caracteres.",
      component:
        "O tipo de campo informado encontra-se inválido ou indisponível para essa operação.",
      type: "O tipo do formulário está inválido",
      type_max_length_50:
        "O campo contém type com o limite acima do máximo de 50 caracteres.",
      scope: "O campo criado não pode ser atribuído a esse grupo",
      is_required: "O campo de 'É obrigatório', foi preenchido incorretamente",
      is_sensitive: "O campo de 'É sensível', foi preenchido incorretamente",
      group_id: "O grupo informado encontra-se inválido ou desativado",
      relation_id: "O cliente relacionado não existe ou está inválido",
      value: "O valor do campo é inválido",
      not_found: "O campo informado não existe ou foi nesse momento excluído",
      not_found_group: "O grupo informado do campo não é válido ou registrado",
    },
  },
  charges: {
    clients: {
      success: {
        post: "A cobrança foi atribuída aos clientes com sucesso!",
      },
    },
    extracts: {
      not_found: "O extrato não foi encontrado",
    },
    checkout: {
      success: {
        post: "Aguarde para finalizar a sua compra!",
      },
      invalid: {
        name: "O nome inserido informado está inválido",
        name_max_length_100:
          "O nome contém o limite acima do máximo de 100 caracteres.",
        phone: "O telefone informado do cliente encontra-se inválido",
        phone_max_length_35:
          "O telefone com o limite acima do máximo de 35 caracteres.",
        amounts: "A quantidade selecionada está inválida",
        email: "O e-mail encontra-se inexiste ou inválido",
        email_max_length_255:
          "O cliente contém e-mail com o limite acima do máximo de 255 caracteres.",
        birthdate: "A data de nascimento informada encontra-se inválido",
        product: "O produto informado encontra-se inválido ou inexistente",
      },
    },
    operations_failures: {
      success: {
        post: "A operação financeira foi solucionada com sucesso",
      },
      not_found: "A operação não foi encontrada",
      invalid: {
        operation_failed: "A operação não pode ser encontrada ou resolvida",
        not_found: "A operação não foi encontrada",
      },
    },
    success: {
      post: "A cobrança foi criada com sucesso!",
      delete: "A cobrança foi excluído com sucesso!",
      put: "A cobrança foi atualizado com sucesso!",
    },
    again_submit:
      "O formulário contem informações desatualizadas. Envie novamente,.",
    invalid: {
      id: "A cobrança informado não existe ou está inválido",
      in_ids: "As cobranças informadas encontram-se com alguma irregularidade",
      title: "O título da cobrança informada está inválido ou inexistente",
      description: "A descrição da cobrança informada está inválido",
      status: "O status da cobrança encontra-se inválido",
      charge_id: "A cobrança está inválida ou não existe",
      service_id: "O serviço está inválido ou não existe",
      payment_id: "O pagamento não existe ou está inválido",
      price: "O preço da cobrança é inválido",
      privacy: "A privacidade só poderá ser 'Publica' e 'Privado'",
      type: "O tipo da cobrança está inválido",
      amount: "A quantidade da cobrança está inválido",
      period: "O período da cobrança está inválido",
      promotional_price: "O preço promocional da cobrança é inválido",
      reference: "A cobrança está inválida ou não existe",
      clients: "Os clientes informados encontram-se inexistentes ou inválidos",
      not_available:
        "A cobrança selecionada não existe ou encontra-se indisponível",
      created_at: "A data de criação da cobrança está inválida",
      updated_at: "A data de atualização da cobrança está inválida",
      not_found: "A cobrança não foi encontrada",
      not_found_client: "O cliente escolhido não foi encontrado",
      name_or_service:
        "A cobrança precisa que seja preenchido um nome ou escolhido um serviço",
      recaptcha:
        "A página está com recursos desatualizados. Recarregue e tente novamente.",
    },
  },
  integrations: {
    success: {
      post: "A integração foi atualiza com sucesso!",
    },
    invalid: {
      not_found: "A integração não foi encontrada",
      not_found_bank: "Não há banco válido configurado no sistema",
    },
  },
  invites: {
    success: {
      post: "O convite foi enviado com sucesso!",
      resend: "O convite foi reenviado com sucesso!",
      delete: "O convite foi excluído com sucesso!",
    },
    invalid: {
      name: "O nome informado está inválido",
      name_max_length_100:
        "O convite contém nome com o limite acima do máximo de 100 caracteres.",
      email: "O e-mail encontra-se inexiste ou inválido",
      already_exists_email: "O e-mail informado encontra-se já utilizado",
      already_exists_phone: "O telefone informado encontra-se já utilizado",
      invalid_group: "O grupo informado está inválido ou ausente",
      email_max_length_255:
        "O e-mail está com o limite acima do máximo de 255 caracteres.",
      phone: "O telefone informado encontra-se inválido",
      not_found: "O convite não foi encontrado",
    },
  },
  notifications: {
    invalid: {
      phone: "O telefone informado do cliente encontra-se inválido",
      phone_max_length_35:
        "O telefone está com o limite acima do máximo de 35 caracteres.",
      type: "O tipo da notificação está inválido",
      data: "O ocorreu um problema na hora de processar a sua inscrição",
    },
  },
  schedules: {
    success: {
      post: "O agendamento foi realizado com sucesso!",
      put: "O agendamento foi atualizado com sucesso!",
      delete: "O agendamento foi excluído com sucesso!",
    },
    invalid: {
      title: "O título do agendamento informado está inválido ou inexistente",
      color:
        "A cor informada está com o formato inválido ou encontra-se inexistente",
      describe: "A descrição encontra-se vazio ou inválida",
      date: "A data encontra-se inválida ou vazia",
      end_date: "A data de termino encontra-se inválida ou vazia",
      linked: "Os usuários vinculados não foram informados",
      not_found: "O agendamento não foi encontrado",
    },
  },
  services: {
    success: {
      post: "O serviço foi criado com sucesso!",
      put: "O serviço foi atualizado com sucesso!",
      delete: "O serviço foi excluído com sucesso!",
      inscribe: "O cliente foi inscrito com sucesso!",
      unsubscribe: "A inscrição do cliente foi excluída com sucesso!",
    },
    invalid: {
      already_inscribe: "O cliente selecionado já está inscrito.",
      name: "O nome do serviço informado está inválido",
      type: "O tipo do serviço está inválido",
      description: "A descrição do serviço informado está inválido",
      privacy: "A privacidade só poderá ser 'Publica' e 'Privado'",
      stock: "O valor referente a quantidade disponíveis está inválido",
      reservations: "O valor referente as reservas está inválido",
      address: "O endereço informado está com o formato inválido",
      photo: "A imagem do serviço fornecida está inválida",
      photo_max_size_1024:
        "A imagem do serviço ultrapassa o tamanho permitido 1 mega",
      photo_mime_type:
        "A imagem do serviço contém uma extensão diferente de .png,.jpeg,.jpg",
      realized_at: "A data de realização está com formato inválido",
      expired_at: "A data de expiração está com o formato inválido",
      not_found: "O serviço não foi encontrado",
    },
  },
  events: {
    success: {
      post: "O evento foi criado com sucesso!",
      put: "O evento foi atualizado com sucesso!",
      delete: "O evento foi excluído com sucesso!",
      inscribe: "O cliente foi inscrito com sucesso!",
      unsubscribe: "A inscrição do cliente foi excluída com sucesso!",
    },
    invalid: {
      already_inscribe: "O cliente selecionado já está inscrito.",
      name: "O nome do evento informado está inválido",
      type: "O tipo do evento está inválido",
      description: "A descrição do evento informado está inválido",
      privacy: "A privacidade só poderá ser 'Publica' e 'Privado'",
      stock: "O valor referente a quantidade disponíveis está inválido",
      reservations: "O valor referente as reservas está inválido",
      address: "O endereço informado está com o formato inválido",
      photo: "A imagem do evento fornecida está inválida",
      photo_max_size_1024:
        "A imagem do evento ultrapassa o tamanho permitido 1 mega",
      photo_mime_type:
        "A imagem do evento contém uma extensão diferente de .png,.jpeg,.jpg",
      realized_at: "A data de realização está com formato inválido",
      expired_at: "A data de expiração está com o formato inválido",
      not_found: "O evento não foi encontrado",
    },
  },
  users: {
    groups: {
      success: {
        post: "O grupo foi criado com sucesso!",
        put: "O grupo foi atualizado com sucesso!",
        status: "O status da grupo foi alterado com sucesso!",
        delete: "O grupo foi excluído com sucesso!",
        patch_password: "Senha alterada com sucesso!",
        patch_status: "Status alterado com sucesso!",
      },
      invalid: {
        name: "O nome do grupo informado está inválido",
        name_max_length_100:
          "O grupo contém nome com o limite acima do máximo de 100 caracteres.",
        name_unique: "O nome do grupo já está sendo utilizado",
        description: "A descrição do grupo informado está inválido",
        permissions: "As permissões fornecidas encontram-se inválidas",
        not_found: "O grupo não foi encontrado",
        not_found_permission:
          "Algumas das permissões fornecidas estão inválidas",
      },
    },
    success: {
      post: "O seu cadastro foi criado com sucesso!",
      put: "O cadastro atualizado com sucesso!",
      delete: "O usuário foi excluído com sucesso!",
      recover_password: "Abra o e-mail e siga as instruções",
      alter_password: "A sua senha foi alterada com sucesso",
      patch_status: "Status alterado com sucesso!",
    },
    invalid: {
      name: "O nome do grupo informado está inválido",
      name_max_length_100:
        "O grupo contém nome com o limite acima do máximo de 100 caracteres.",
      name_unique: "O nome do grupo já está sendo utilizado",
      cpf: "O cpf encontra-se vazio ou com formato inválido",
      birthdate:
        "A data de nascimento informada do usuário encontra-se inválido",
      keyword: "A palavra chave do usuário encontra-se vazia ou inválida",
      password: "A senha encontra-se com o formato inválido ou inexistente",
      operation: "O token está inválido ou expirado",
      already_exists_cpf: "O CPF fornecido encontra-se em uso",
      not_found_invite: "O link acessado de convite está expirado ou inválido",
      incorrect_password_formatted:
        "A senha fornecida está com inválida ou encontra-se fora dos padrões permitidos",
      not_found_permission: "Algumas das permissões fornecidas estão inválidas",
      already_exists_phone: "O telefone informado encontra-se já utilizado",
      already_exists_email: "O e-mail informado encontra-se já utilizado",
      email_max_length_255:
        "O e-mail está com o limite acima do máximo de 255 caracteres.",
      phone_max_length_35:
        "O telefone com o limite acima do máximo de 35 caracteres.",
      not_found: "O usuário não foi encontrado",
      not_found_token: "O token é inválido ou é inexistente",
    },
  },
};
