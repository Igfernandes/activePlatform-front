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
};
