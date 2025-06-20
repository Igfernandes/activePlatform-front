export const Api = {
  mailer: {
    invalid: {
      email:
        "El sistema no pudo notificar al cliente porque su correo electrónico no está registrado.",
    },
  },
  unauthorized:
    "El usuario ha sido desconectado o no tiene permiso para continuar con la acción",
  default: {
    not_auth:
      "El usuario ha sido desconectado o no tiene permiso para continuar con la acción",
    internal_error:
      "Ocurrió un error grave en la aplicación. Contacte con soporte.",
    error: "Estamos analizando el problema. Inténtelo de nuevo más tarde.",
  },
  invalid: {
    email: "El correo electrónico no existe o es inválido",
    recaptcha:
      "La página tiene recursos desactualizados. Recargue e inténtelo de nuevo.",
    csrf: "La página tiene recursos desactualizados o inexistentes. Recargue e inténtelo de nuevo.",
  },
  auth: {
    success: {
      post: "Espere. ¡Pronto será redirigido!",
    },
    invalid: {
      password: "La contraseña tiene un formato inválido o no existe",
      rememberMe:
        "La función 'recordarme' tiene problemas. Recargue e inténtelo de nuevo.",
      recaptcha:
        "La página tiene recursos desactualizados. Recargue e inténtelo de nuevo.",
      credentials: "Las credenciales proporcionadas son inválidas",
    },
  },
  remember: {
    success: {
      post: "Espere. ¡Pronto será redirigido!",
    },
    invalid: {
      token: "No se pudo conectar automáticamente. Inicie sesión manualmente.",
    },
  },
  subscribe: {
    success: {
      post: "¡Ahora estarás siempre conectado con nosotros!",
    },
  },
  clients: {
    categories: {
      success: {
        post: "¡Las categorías se actualizaron con éxito!",
      },
      invalid: {
        id: "La categoría proporcionada no existe o es inválida",
        client_id: "El cliente proporcionado no existe o es inválido",
        name: "El nombre de la categoría proporcionada es inválido",
        name_contains: "El nombre de la categoría proporcionada es inválido",
        description: "La descripción de la categoría proporcionada es inválida",
        created_at: "La fecha de creación de la categoría es inválida",
        updated_at: "La fecha de actualización de la categoría es inválida",
        categories:
          "Las categorías proporcionadas están ausentes o son inválidas",
        linked_category:
          "Desvincule las categorías de los clientes antes de eliminarlas",
      },
    },
    dispatchers: {
      invalid: {
        client_id:
          "El cliente proporcionado es inválido para el envío de mensajes",
        status: "El estado del envío es inválido",
        dispatcher: "El envío es inválido",
        message_id: "El contenido del envío es inválido",
      },
    },
    services: {
      success: {
        post: "¡El/los cliente(s) fue/ron inscrito(s) con éxito!",
      },
      isConfirm: {
        success: "¡Confirmado con éxito!",
      },
    },
    fields: {
      success: {
        post: "¡El campo fue creado con éxito!",
      },
      invalid: {
        name_max_length_100:
          "El campo contiene un nombre que supera el máximo de 100 caracteres.",
        component:
          "El tipo de campo informado es inválido o no está disponible para esta operación.",
        type_max_length_50:
          "El campo contiene un tipo que supera el máximo de 50 caracteres.",
        scope: "El campo creado no puede ser asignado a este grupo",
        is_required: "El campo 'Es obligatorio' fue llenado incorrectamente",
        is_sensitive: "El campo 'Es sensible' fue llenado incorrectamente",
        group_id: "El grupo informado es inválido o está desactivado",
        client_id: "El cliente informado no existe en el sistema",
        id: "El campo tiene un identificador ausente. Recargue e inténtelo de nuevo.",
      },
    },
    success: {
      post: "¡El cliente fue creado con éxito!",
      put: "¡El cliente fue actualizado con éxito!",
      delete: "¡El cliente fue eliminado con éxito!",
      patch:
        "¡La categoría del/los cliente(s) fue/ron actualizada(s) con éxito!",
    },
    invalid: {
      id: "No se puede encontrar al cliente",
      data: "El sistema encontró un problema. Inténtelo de nuevo más tarde",
      path: "El sistema encontró un problema. Inténtelo de nuevo más tarde",
      in_ids: "Los clientes informados tienen alguna irregularidad",
      client: "El cliente informado no existe o es inválido",
      clients: "Los clientes informados no existen o son inválidos",
      category: "La categoría del cliente informada es inválida",
      name: "El nombre informado del cliente es inválido",
      name_max_length_100:
        "El cliente tiene un nombre que supera el máximo de 100 caracteres.",
      avatar: "El avatar del cliente contiene una URL inválida",
      phone: "El teléfono informado del cliente es inválido",
      phone_max_length_35:
        "El cliente tiene un teléfono que supera el máximo de 35 caracteres.",
      birthdate: "La fecha de nacimiento informada del cliente es inválida",
      email: "El correo electrónico informado del cliente es inválido",
      email_max_length_255:
        "El cliente tiene un correo que supera el máximo de 255 caracteres.",
      created_at: "La fecha de creación informada del cliente es inválida",
      updated_at: "La fecha de actualización informada del cliente es inválida",
      not_found_category:
        "La categoría oculta es inválida o no está disponible",
    },
  },
  custom_forms: {
    fills: {
      success: {
        delete: "¡El registro fue eliminado con éxito!",
        post: "¡El formulario completado fue eliminado con éxito!",
      },
    },
    services: {
      success: {
        inscribe: "¡El cliente se inscribió en el evento con éxito!",
      },
    },
    success: {
      post: "¡El formulario fue creado con éxito!",
      put: "¡El formulario fue actualizado con éxito!",
      delete: "¡El formulario fue eliminado con éxito!",
    },
    invalid: {
      id: "El formulario informado no existe o es inválido",
      in_ids: "Los formularios informados tienen alguna irregularidad",
      name: "El nombre del formulario informado es inválido",
      name_contains: "El nombre del formulario informado es inválido",
      components: "Los campos del formulario son inválidos",
      slug: "El alias de ruta del formulario es inválido",
      slug_contains: "El alias de ruta del formulario es inválido",
      type: "El tipo de formulario es inválido",
      description: "La descripción del formulario es inválida",
      description_contains: "La descripción del formulario es inválida",
      status: "El estado del envío es inválido",
      created_at: "La fecha de creación del formulario es inválida",
      updated_at: "La fecha de actualización del formulario es inválida",
      not_found: "El formulario no fue encontrado",
      client:
        "Operación inválida. El registro no contiene un cliente vinculado.",
    },
  },
  dispatchers: {
    success: {
      post: "¡El envío fue creado con éxito!",
      put: "¡El envío fue actualizado con éxito!",
      delete: "¡El envío fue eliminado con éxito!",
    },
    invalid: {
      id: "El envío informado no existe o es inválido",
      in_ids: "Los envíos informados tienen alguna irregularidad",
      title: "El título del envío informado es inválido o inexistente",
      status: "El estado del envío es inválido o está vacío",
      period:
        "El período de envío solo puede ser 'Diario', 'Semanal' o 'Mensual'",
      content: "El contenido del envío está vacío o es inválido",
      platforms: "La plataforma seleccionada para los envíos es inválida",
      service_id: "El servicio es inválido o no existe",
      charge_id: "El cargo es inválido o no existe",
      scheduled_day: "El día programado para el envío es inválido",
      started_at: "La fecha de inicio de los envíos es inválida",
      not_found_content: "No se pudo encontrar el contenido del envío",
      not_found_clients:
        "No se pudieron encontrar los clientes para realizar los envíos.",
      not_found: "El envío no fue encontrado",
    },
  },
  fields: {
    success: {
      post: "¡El campo fue creado con éxito!",
      delete: "¡El campo fue eliminado con éxito!",
    },
    invalid: {
      name: "El nombre del campo informado es inválido",
      name_max_length_100:
        "El campo contiene un nombre que supera el máximo de 100 caracteres.",
      component:
        "El tipo de campo informado es inválido o no está disponible para esta operación.",
      type: "El tipo del formulario es inválido",
      type_max_length_50:
        "El campo contiene un tipo que supera el máximo de 50 caracteres.",
      scope: "El campo creado no puede ser asignado a este grupo",
      is_required: "El campo 'Es obligatorio' fue llenado incorrectamente",
      is_sensitive: "El campo 'Es sensible' fue llenado incorrectamente",
      group_id: "El grupo informado es inválido o está desactivado",
      relation_id: "El cliente relacionado no existe o es inválido",
      value: "El valor del campo es inválido",
      not_found: "El campo informado no existe o fue eliminado",
      not_found_group: "El grupo informado del campo no es válido o registrado",
    },
  },
  charges: {
    clients: {
      success: {
        post: "¡El cobro fue asignado a los clientes con éxito!",
      },
    },
    extracts: {
      not_found: "El extracto no fue encontrado",
    },
    checkout: {
      success: {
        post: "¡Espere para finalizar su compra!",
      },
      invalid: {
        name: "El nombre ingresado es inválido",
        name_max_length_100: "El nombre supera el máximo de 100 caracteres.",
        phone: "El teléfono informado del cliente es inválido",
        phone_max_length_35: "El teléfono supera el máximo de 35 caracteres.",
        amounts: "La cantidad seleccionada es inválida",
        email: "El correo electrónico no existe o es inválido",
        email_max_length_255:
          "El correo electrónico supera el máximo de 255 caracteres.",
        cpf: "El CPF informado es inválido",
        billing_address: "La dirección de facturación es inválida",
        installments: "El número de cuotas es inválido",
        payment_method_id: "El método de pago informado es inválido",
        card: "El número de tarjeta es inválido",
        card_name: "El nombre en la tarjeta es inválido",
        card_number: "El número de la tarjeta es inválido",
        card_expiration: "La fecha de expiración de la tarjeta es inválida",
        card_cvv: "El código de seguridad de la tarjeta es inválido",
        cnh: "El número de la CNH es inválido",
        renavam: "El número de RENAVAM es inválido",
      },
    },
  },
  integrations: {
    success: {
      post: {
        es: "¡La integración se ha actualizado con éxito!",
        en: "Integration was successfully updated!",
      },
    },
    invalid: {
      not_found: {
        es: "La integración no fue encontrada",
        en: "Integration not found",
      },
    },
  },
  invites: {
    success: {
      post: {
        es: "¡La invitación se ha enviado con éxito!",
        en: "Invite sent successfully!",
      },
      resend: {
        es: "¡La invitación se ha reenviado con éxito!",
        en: "Invite resent successfully!",
      },
      delete: {
        es: "¡La invitación se ha eliminado con éxito!",
        en: "Invite deleted successfully!",
      },
    },
    invalid: {
      name: {
        es: "El nombre proporcionado es inválido",
        en: "The provided name is invalid",
      },
      name_max_length_100: {
        es: "El invitado contiene un nombre que supera el máximo de 100 caracteres.",
        en: "Invite name exceeds the maximum length of 100 characters.",
      },
      email: {
        es: "El correo electrónico es inexistente o inválido",
        en: "Email is nonexistent or invalid",
      },
      already_exists_email: {
        es: "El correo electrónico ya está en uso",
        en: "Email already in use",
      },
      already_exists_phone: {
        es: "El teléfono ya está en uso",
        en: "Phone number already in use",
      },
      invalid_group: {
        es: "El grupo proporcionado es inválido o está ausente",
        en: "Provided group is invalid or missing",
      },
      email_max_length_255: {
        es: "El correo electrónico supera el límite máximo de 255 caracteres.",
        en: "Email exceeds the maximum length of 255 characters.",
      },
      phone: {
        es: "El teléfono proporcionado es inválido",
        en: "Provided phone number is invalid",
      },
      not_found: {
        es: "La invitación no fue encontrada",
        en: "Invite not found",
      },
    },
  },
  notifications: {
    invalid: {
      phone: {
        es: "El teléfono del cliente es inválido",
        en: "Client phone number is invalid",
      },
      phone_max_length_35: {
        es: "El teléfono supera el límite máximo de 35 caracteres.",
        en: "Phone number exceeds the maximum length of 35 characters.",
      },
      type: {
        es: "El tipo de notificación es inválido",
        en: "Notification type is invalid",
      },
      data: {
        es: "Hubo un problema al procesar tu suscripción",
        en: "There was an issue processing your subscription",
      },
    },
  },
  schedules: {
    success: {
      post: {
        es: "¡El horario se ha creado con éxito!",
        en: "Schedule created successfully!",
      },
      put: {
        es: "¡El horario se ha actualizado con éxito!",
        en: "Schedule updated successfully!",
      },
      delete: {
        es: "¡El horario se ha eliminado con éxito!",
        en: "Schedule deleted successfully!",
      },
    },
    invalid: {
      title: {
        es: "El título del horario es inválido o inexistente",
        en: "Schedule title is invalid or missing",
      },
      color: {
        es: "El color proporcionado es inválido o inexistente",
        en: "Provided color is invalid or missing",
      },
      describe: {
        es: "La descripción está vacía o es inválida",
        en: "Description is empty or invalid",
      },
      date: {
        es: "La fecha es inválida o está vacía",
        en: "Date is invalid or empty",
      },
      end_date: {
        es: "La fecha de finalización es inválida o está vacía",
        en: "End date is invalid or empty",
      },
      linked: {
        es: "No se informaron los usuarios vinculados",
        en: "Linked users were not provided",
      },
      not_found: {
        es: "El horario no fue encontrado",
        en: "Schedule not found",
      },
    },
  },
  services: {
    success: {
      post: {
        es: "¡El servicio se ha creado con éxito!",
        en: "Service created successfully!",
      },
      put: {
        es: "¡El servicio se ha actualizado con éxito!",
        en: "Service updated successfully!",
      },
      delete: {
        es: "¡El servicio se ha eliminado con éxito!",
        en: "Service deleted successfully!",
      },
      inscribe: {
        es: "¡El cliente ha sido inscrito con éxito!",
        en: "Client successfully enrolled!",
      },
    },
    invalid: {
      name: {
        es: "El nombre del servicio es inválido",
        en: "Service name is invalid",
      },
      type: {
        es: "El tipo de servicio es inválido",
        en: "Service type is invalid",
      },
      description: {
        es: "La descripción del servicio es inválida",
        en: "Service description is invalid",
      },
      privacy: {
        es: "La privacidad solo puede ser 'Pública' o 'Privado'",
        en: "Privacy can only be 'Public' or 'Private'",
      },
      stock: {
        es: "La cantidad disponible es inválida",
        en: "Available stock value is invalid",
      },
      reservations: {
        es: "El valor de reservas es inválido",
        en: "Reservations value is invalid",
      },
      address: {
        es: "El formato de la dirección es inválido",
        en: "Address format is invalid",
      },
      photo: {
        es: "La imagen del servicio es inválida",
        en: "Service image is invalid",
      },
      photo_max_size_1024: {
        es: "La imagen del servicio supera 1 MB",
        en: "Service image exceeds 1 MB",
      },
      photo_mime_type: {
        es: "La imagen debe tener extensión .png, .jpeg o .jpg",
        en: "Service image must be .png, .jpeg, or .jpg",
      },
      realized_at: {
        es: "La fecha de realización tiene formato inválido",
        en: "Realized date format is invalid",
      },
      expired_at: {
        es: "La fecha de expiración tiene formato inválido",
        en: "Expiration date format is invalid",
      },
      not_found: {
        es: "El servicio no fue encontrado",
        en: "Service not found",
      },
    },
  },
  users: {
    groups: {
      success: {
        post: {
          es: "¡El grupo se ha creado con éxito!",
          en: "Group created successfully!",
        },
        put: {
          es: "¡El grupo se ha actualizado con éxito!",
          en: "Group updated successfully!",
        },
        status: {
          es: "¡El estado del grupo se ha cambiado con éxito!",
          en: "Group status changed successfully!",
        },
        delete: {
          es: "¡El grupo se ha eliminado con éxito!",
          en: "Group deleted successfully!",
        },
        patch_password: {
          es: "¡Contraseña cambiada con éxito!",
          en: "Password changed successfully!",
        },
        patch_status: {
          es: "¡Estado cambiado con éxito!",
          en: "Status changed successfully!",
        },
      },
      invalid: {
        name: {
          es: "El nombre del grupo es inválido",
          en: "Group name is invalid",
        },
        name_max_length_100: {
          es: "El nombre del grupo supera los 100 caracteres.",
          en: "Group name exceeds 100 characters.",
        },
        name_unique: {
          es: "El nombre del grupo ya está en uso",
          en: "Group name is already in use",
        },
        description: {
          es: "La descripción del grupo es inválida",
          en: "Group description is invalid",
        },
        permissions: {
          es: "Los permisos proporcionados son inválidos",
          en: "Provided permissions are invalid",
        },
        not_found: {
          es: "El grupo no fue encontrado",
          en: "Group not found",
        },
        not_found_permission: {
          es: "Algunos permisos proporcionados son inválidos",
          en: "Some provided permissions are invalid",
        },
      },
    },
    success: {
      post: {
        es: "¡Tu cuenta se ha creado con éxito!",
        en: "Your account was successfully created!",
      },
      put: {
        es: "¡Tu cuenta se ha actualizado con éxito!",
        en: "Account updated successfully!",
      },
      delete: {
        es: "¡El usuario se ha eliminado con éxito!",
        en: "User deleted successfully!",
      },
      recover_password: {
        es: "Revisa tu correo y sigue las instrucciones",
        en: "Check your email and follow the instructions",
      },
      alter_password: {
        es: "¡Tu contraseña se ha cambiado con éxito!",
        en: "Your password was changed successfully!",
      },
      patch_status: {
        es: "¡Estado cambiado con éxito!",
        en: "Status changed successfully!",
      },
    },
    invalid: {
      name: {
        es: "El nombre del grupo es inválido",
        en: "Group name is invalid",
      },
      name_max_length_100: {
        es: "El nombre del grupo supera los 100 caracteres.",
        en: "Group name exceeds 100 characters.",
      },
      name_unique: {
        es: "El nombre del grupo ya está en uso",
        en: "Group name is already in use",
      },
      cpf: {
        es: "El CPF está vacío o tiene formato inválido",
        en: "CPF is empty or has invalid format",
      },
      birthdate: {
        es: "La fecha de nacimiento proporcionada es inválida",
        en: "User birthdate is invalid",
      },
      keyword: {
        es: "La palabra clave está vacía o es inválida",
        en: "User keyword is empty or invalid",
      },
      password: {
        es: "La contraseña es inválida o está vacía",
        en: "Password is invalid or missing",
      },
      operation: {
        es: "El token es inválido o ha expirado",
        en: "Token is invalid or expired",
      },
      already_exists_cpf: {
        es: "El CPF proporcionado ya está en uso",
        en: "CPF already in use",
      },
      not_found_invite: {
        es: "El enlace de invitación ha expirado o es inválido",
        en: "Invite link is expired or invalid",
      },
      incorrect_password_formatted: {
        es: "La contraseña proporcionada es inválida o no cumple los requisitos",
        en: "Provided password is invalid or does not meet requirements",
      },
      not_found_permission: {
        es: "Algunos permisos proporcionados son inválidos",
        en: "Some provided permissions are invalid",
      },
      already_exists_phone: {
        es: "El teléfono ya está en uso",
        en: "Phone number already in use",
      },
      already_exists_email: {
        es: "El correo electrónico ya está en uso",
        en: "Email already in use",
      },
      email_max_length_255: {
        es: "El correo electrónico supera el límite máximo de 255 caracteres.",
        en: "Email exceeds the maximum length of 255 characters.",
      },
      phone_max_length_35: {
        es: "El teléfono supera el límite máximo de 35 caracteres.",
        en: "Phone number exceeds the maximum length of 35 characters.",
      },
      not_found: {
        es: "El usuario no fue encontrado",
        en: "User not found",
      },
      not_found_token: {
        es: "El token es inválido o inexistente",
        en: "Token is invalid or nonexistent",
      },
    },
  },
};
