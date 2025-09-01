export const Screens = {
  login: {
    title: "¡Bienvenido!",
    text: "Ingrese con su cuenta de correo electrónico registrada",
    remember_me: "Recuérdame",
    forgot_password: "Olvidé mi contraseña",
  },
  "forgot-password": {
    title: "Ingrese su correo electrónico registrado",
    text: "Si está registrado en la plataforma, enviaremos un enlace al correo electrónico registrado para que pueda recuperar la cuenta.",
  },
  "alter-password": {
    title: "Nueva contraseña",
    text: "Cree una nueva contraseña para acceder a la plataforma.",
    submit: "Crear nueva contraseña",
  },
  successful: {
    need_go_back_login:
      "Ahora, vaya al inicio de sesión para acceder a la plataforma.",
  },
  create_user: {
    title: "Primer acceso",
    text: "Para acceder a la plataforma, indica cómo te gustaría ser llamado y crea una contraseña.",
  },
  services: {
    confirmation: {
      title: "Confirmación de Asistencia",
      text: "Al hacer clic en el botón de abajo, estarás confirmando tu asistencia al evento",
    },
  },
  forms: {
    successful: {
      form_received: "¡AGM ha recibido su formulario con éxito!",
      form_message:
        "Su respuesta es muy importante para ayudarnos a entender y mejorar continuamente.",
    },
  },
  dashboard: {
    clients: {
      category: {
        text_create_category:
          "Para crear una categoría, haga clic en agregar o edite una categoría abajo:",
        text_organized_items: "Para ordenar la categoría, mantenga y arrastre.",
        text_select_category:
          "Seleccione la nueva categoría para la base elegida",
        add_clients_text: "Seleccione abajo los clientes que desea agregar",
      },
      client: {
        text_select_information:
          "Seleccione qué grupos de información serán compartidos",
        text_insert_email:
          "Ingrese el correo electrónico del usuario que recibirá los datos",
        text_select_category:
          "Seleccione la categoría a la que pertenecerá el cliente:",
        text_fill_information:
          "Complete los datos abajo para crear un nuevo cliente:",
        title_already_exclude: "¿Desea eliminar este cliente?",
        text_already_exclude:
          "Al continuar, todos los datos de los clientes seleccionados serán eliminados, y no podrán acceder hasta que sean registrados nuevamente.",
      },
    },
    finances: {
      about_name_and_service:
        "Si no se asigna un nombre al cobro, heredará el nombre del servicio",
      about_period:
        "Defina arriba la cantidad de meses referente al intervalo de cada cobro. Ej: 1 (Mensual), 3 (Trimestral), etc.",
      about_privacy_and_services:
        "Al elegir un servicio, la privacidad será definida por él*",
      text_already_exclude:
        "Al continuar, todos los datos del cobro serán eliminados, y no podrá ser accedido hasta que sea registrado nuevamente.",
      title_already_exclude: "¿Desea eliminar este cobro?",
    },
    dispatchers: {
      select_shape_send: "Seleccione una o más formas de envío:",
      ask_about_send_files_images:
        "¿Se enviarán archivos como PDFs o documentos?",
      text_already_exclude:
        "Al continuar, el envío será eliminado y sus agendas canceladas.",
      title_already_exclude: "¿Desea eliminar este envío?",
    },
    forms: {
      text_already_exclude:
        "Al continuar, los datos vinculados a este registro serán eliminados del sistema.",
      title_already_exclude: "¿Desea eliminar este registro?",
      fills: {
        text_already_exclude:
          "Al continuar, los datos vinculados a este registro serán eliminados del sistema.",
        title_already_exclude: "¿Desea eliminar este registro?",
      },
    },
    services: {
      settings_privacy: "Configure la privacidad del servicio:",
      has_limit_vacancies: "¿Habrá un límite de vacantes?",
      inform_limit_vacancies: "Informe el límite máximo de vacantes",
      has_limit_reservation: "¿Será posible adherirse a vacantes de reserva?",
      inform_limit_reservation: "Informe el límite máximo de reserva",
      service_image: "Agregue una imagen al servicio:",
      text_alert_about_alerts_inscribes:
        "Escriba detalles y avisos para los inscritos",
      inscribes_alert: "Avisos para los inscritos",
      awaiting_inscribe:
        "Espere mientras se inscribe al cliente y se envía la confirmación",
    },
    users: {
      create_user_groups: "Crear grupos de usuarios",
      invite_users: "Invitar usuarios",
      users_groups: "Grupos de usuarios",
      user_group: "Grupo de usuario",
      group_desative: "Desactivar grupo",

      group: {
        text_insert_name: "Ingrese un nombre para el grupo de usuarios:",
        text_select_permissions:
          "Seleccione los permisos que estarán activos para este grupo:",
        title_already_active: "¿Desea activar este grupo de usuarios?",
        text_already_active:
          "Al continuar, todos los usuarios de este grupo reactivarán el acceso y sus permisos.",
        title_already_desative: "¿Desea desactivar este grupo de usuarios?",
        text_already_desative:
          "Al continuar, todos los usuarios de este grupo perderán el acceso, ya que sus permisos serán bloqueados.",
        text_already_exclude:
          "Al continuar, todos los usuarios de este grupo perderán el acceso, ya que sus permisos serán bloqueados.",
        title_already_exclude: "¿Desea eliminar este grupo de usuarios?",
      },
      user: {
        text_select_group:
          "Seleccione los grupos a los que pertenecerá el usuario:",
        text_fill_information:
          "Complete la información abajo para invitar a un nuevo usuario:",
        text_awaiting_after_delete_desative:
          "Al continuar, todos los usuarios perderán el acceso, ya que sus permisos serán bloqueados.",
        title_already_active: "¿Desea activar este usuario?",
        text_already_active:
          "Al continuar, el usuario reactivará el acceso y sus permisos.",
        text_already_desative:
          "Al continuar, todos los datos del usuario seleccionado serán eliminados, y no podrá acceder hasta que sean restaurados.",
        title_already_desative: "¿Desea desactivar este cliente?",
        text_already_exclude:
          "Al continuar, todos los datos del usuario seleccionado serán deshabilitados, y no podrá acceder hasta que sea activo nuevamente.",
        title_already_exclude: "¿Desea eliminar este cliente?",
      },
      invites: {
        text_already_resend:
          "Al continuar, la invitación enviada anteriormente con el token y demás información será invalidada.",
        title_already_resend: "¿Desea reenviar la invitación al usuario?",
        text_already_exclude:
          "Al continuar, la invitación será invalidada y los datos del usuario adjuntos desaparecerán del sistema.",
        title_already_exclude: "¿Desea eliminar esta invitación?",
        success_title_resend: "Invitación reenviada",
        success_text_resend: "¡Su invitación ha sido reenviada con éxito!",
        success_title_delete: "Invitación eliminada",
        success_text_delete: "¡Su invitación ha sido eliminada con éxito!",
      },
    },
    apis: {
      text_fill_information: "Complete la información de la integración:",
    },
  },
  home: {
    contact: {
      address_title: "Nuestra Dirección",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Contáctanos",
      phone: "(21) 97129-2030",
      email_title: "Envíanos un correo",
      email: "contato@agmturismomarica.com.br",
    },
    menu: {
      logo: "logotipo AGM",
      about_us: "Sobre Nosotros",
      partners: "Nuestros Socios",
    },
    status: {
      tours: "+100 Paseos",
      guides: "+40 Guías",
      modalities: "+6 Modalidades",
      travelers: "+1000 Viajeros",
    },
    about: {
      title: "Un poco sobre nosotros",
      subtitle: "Asociación de Guías de Turismo de Maricá",
      description_1:
        "La Asociación de Guías de Turismo de Maricá (AGM) es una entidad sin fines de lucro que reúne a profesionales calificados y comprometidos en promover un turismo responsable, sostenible y de calidad en Maricá y la región.",
      description_2:
        "Fundada con el objetivo de valorar y fortalecer la profesión de guía de turismo, la AGM actúa como punto de referencia para visitantes, agencias, operadores y socios del sector turístico, siempre priorizando la excelencia en el servicio, la seguridad y la preservación del patrimonio natural, cultural e histórico.",
    },
    events: {
      title: "Cronograma y servicios",
      subtitle: "Nuestras atracciones y actividades",
      not_available: {
        title: "No hay eventos disponibles",
        text: "En este momento no hay eventos disponibles, pero pronto tendremos novedades. ¡Mantente atento!",
      },
    },
    gallery: {
      title: "AGM & TÚ",
      subtitle: "Nuestros recuerdos",
      description:
        "Cada foto aquí guarda un pedacito de nuestra historia. Para la AGM, es una gran alegría compartir momentos únicos con nuestros clientes y amigos que participan en nuestras actividades turísticas. Cada sonrisa y cada experiencia vivida juntos refuerzan nuestro propósito: transformar paseos en recuerdos inolvidables.",
    },
    support_network: {
      title: "Red de apoyo",
      subtitle: "Instituciones que fortalecen nuestro trabajo",
    },
    faq: {
      title: "Preguntas & Respuestas",
      description: "Encuentra las respuestas en nuestro FAQ",
      questions: [
        {
          question: "¿Cuáles son las funciones de la Asociación?",
          answer:
            "La AGM actúa como un motor del turismo local, promoviendo un turismo sostenible y de calidad. Ofrecemos capacitaciones, actualizaciones de mercado y oportunidades de networking para guías de turismo. También trabajamos en colaboración con autoridades locales para regular y valorizar la profesión.",
        },
        {
          question: "¿Cuándo se fundó la Asociación?",
          answer: "La AGM fue fundada el 13 de julio de 2021.",
        },
        {
          question: "¿Quién está en la presidencia de la AGM?",
          answer:
            "Actualmente, el presidente es Alberto Matrilhas y la vicepresidenta es Thaís Bellotti.",
        },
        {
          question: "¿Dónde se encuentra la sede de la AGM?",
          answer:
            "Nuestra sede, también llamada Central de Paseos, está ubicada en Rua Abreu Sodré, 43 - Centro, Maricá - RJ, 24913-775.",
        },
        {
          question: "¿Cuáles son los días y horarios de atención?",
          answer:
            "Atendemos todos los días de la semana, de lunes a domingo, de 9h a 17h.",
        },
        {
          question: "¿Por qué asociarse a la AGM?",
          answer:
            "Al convertirse en asociado, usted integra una comunidad que valora la historia, la cultura y los atractivos turísticos de la región. Además de ampliar conocimientos y oportunidades, contribuye a ofrecer a los turistas experiencias auténticas y seguras, fortaleciendo aún más el turismo en Maricá.",
        },
        {
          question: "¿Quién puede asociarse?",
          answer:
            "Pueden asociarse tanto personas físicas como jurídicas, incluyendo: guías de turismo, conductores, monitores, profesionales y empresas del sector turístico, establecimientos de hotelería y gastronomía, imprentas, colaboradores y cooperadores.",
        },
        {
          question: "¿Cuál es la contribución de la AGM al turismo en Maricá?",
          answer:
            "La AGM participa activamente en eventos e iniciativas locales, como Caravana Celebrar Maricá, Expo Valley, Expo Maricá, Vem Viver Maricá, Vem Viver Espraiado, Recantando, Curta Itaocaia, Espraiado de Portas Abertas, Conheça Maricá, Maricá Games, FLIN, Congreso de Hidrógeno, Feria de Profesiones, BRICS+, además de visitas técnicas y capacitaciones. Nuestro compromiso es el fortalecimiento continuo del turismo en Maricá mediante alianzas y acciones que valoran a los profesionales y elevan la calidad del sector.",
        },
      ],
    },
    newsletter: {
      title: "Viaja con nosotros",
      subtitle: "Sé un viajero más conectado con nosotros",
      description: "Regístrate para recibir noticias y novedades",
      form: {
        name: "Nombre",
        phone: "Teléfono",
        button: "Suscribirse",
      },
    },
    testimonials: [
      {
        title: "Comentario del viajero",
        text: "Me encantó participar en el paseo por Maricá con la AGM en los jeeps. ¡Fue una experiencia maravillosa, llena de bellos paisajes y momentos inolvidables!",
        author: "Igor Fernandes",
        info: "Residente de Maricá - RJ",
      },
      {
        title: "Comentario del viajero",
        text: "¡Fue increíble vivir esta experiencia con la AGM! Las actividades estuvieron muy bien organizadas, con momentos divertidos y especiales de principio a fin. ¡Ya quiero participar de nuevo!",
        author: "Joyce Pedro",
        info: "Residente de Ouro Preto - MG",
      },
      {
        title: "Comentario del viajero",
        text: "¡Felicitaciones a la AGM! Participar en las actividades fue maravilloso, todo muy bien planeado y lleno de momentos únicos. ¡Lo recomiendo a todos!",
        author: "Jofre Martins",
        info: "Residente de São Gonçalo - RJ",
      },
      {
        title: "Comentario del viajero",
        text: "¡Una experiencia inolvidable con la AGM! Cada detalle de las actividades fue pensado con cariño, proporcionando diversión, aprendizaje y mucha energía positiva.",
        author: "Henrique José",
        info: "Residente de Maricá - RJ",
      },
    ],
  },
};
