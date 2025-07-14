export const Screens = {
  login: {
    title: "Welcome!",
    text: "Log in with your registered email account",
    remember_me: "Remember me",
    forgot_password: "I forgot my password",
  },
  "forgot-password": {
    title: "Enter your registered email",
    text: "If you have an account on the platform, we will send a link to the registered email so you can recover your account.",
  },
  "alter-password": {
    title: "New password",
    text: "Create a new password to access the platform.",
    submit: "Create new password",
  },
  successful: {
    need_go_back_login: "Now, go back to login to access the platform.",
  },
  create_user: {
    title: "First access",
    text: "To access the platform, let us know how you'd like to be called and create a password.",
  },
  services: {
    confirmation: {
      title: "Attendance Confirmation",
      text: "By clicking the button below, you will be confirming your attendance at the event",
    },
  },
  forms: {
    successful: {
      form_received: "AGM has successfully received your form!",
      form_message:
        "Your response is very important to help us understand and improve continuously.",
    },
  },
  dashboard: {
    clients: {
      category: {
        text_create_category:
          "To create a category, click add or edit a category below:",
        text_organized_items: "To reorder the category, hold and drag.",
        text_select_category: "Select the new category for the chosen base",
        add_clients_text: "Select the clients you want to add below",
      },
      client: {
        text_select_information:
          "Select which information groups will be shared",
        text_insert_email:
          "Enter the email of the user who will receive the data",
        text_select_category: "Select the category the client will belong to:",
        text_fill_information:
          "Fill in the information below to create a new client:",
        title_already_exclude: "Do you want to delete this client?",
        text_already_exclude:
          "By continuing, all data of the selected clients will be deleted, and they will no longer have access until they are registered again.",
      },
    },
    finances: {
      about_name_and_service:
        "If no name is given to the charge, it will inherit the service's name",
      about_period:
        "Set above the number of months for the billing interval. Ex: 1 (Monthly), 3 (Quarterly), etc.",
      about_privacy_and_services:
        "By choosing a service, the privacy will be set by it*",
      text_already_exclude:
        "By continuing, all charge data will be deleted, and it will no longer be accessible until it is registered again.",
      title_already_exclude: "Do you want to delete this charge?",
    },
    dispatchers: {
      select_shape_send: "Select one or more sending methods:",
      ask_about_send_files_images: "Will files like PDFs or documents be sent?",
      text_already_exclude:
        "By continuing, the dispatch will be deleted and its scheduled events canceled.",
      title_already_exclude: "Do you want to delete this dispatch?",
    },
    forms: {
      text_already_exclude:
        "By continuing, the data linked to this record will be deleted from the system.",
      title_already_exclude: "Do you want to delete this record?",
      fills: {
        text_already_exclude:
          "By continuing, the data linked to this record will be deleted from the system.",
        title_already_exclude: "Do you want to delete this record?",
      },
    },
    services: {
      settings_privacy: "Configure the service's privacy:",
      has_limit_vacancies: "Will there be a vacancy limit?",
      inform_limit_vacancies: "Enter the maximum number of vacancies",
      has_limit_reservation: "Will it be possible to have reservation spots?",
      inform_limit_reservation: "Enter the maximum reservation limit",
      service_image: "Add an image to the service:",
      text_alert_about_alerts_inscribes:
        "Write detailed warnings for subscribers",
      inscribes_alert: "Warnings for subscribers",
      awaiting_inscribe:
        "Please wait while the client is being enrolled and the confirmation is being sent",
    },
    users: {
      create_user_groups: "Create user groups",
      invite_users: "Invite users",
      users_groups: "User Groups",
      user_group: "User Group",
      group_desative: "Deactivate group",

      group: {
        text_insert_name: "Enter a name for the user group:",
        text_select_permissions:
          "Select the permissions that will be active for this group:",
        title_already_active: "Do you want to activate this user group?",
        text_already_active:
          "By continuing, all users in this group will regain access and their permissions.",
        title_already_desative: "Do you want to deactivate this user group?",
        text_already_desative:
          "By continuing, all users in this group will lose access as their permissions will be blocked.",
        text_already_exclude:
          "By continuing, all users in this group will lose access as their permissions will be blocked.",
        title_already_exclude: "Do you want to delete this user group?",
      },
      user: {
        text_select_group: "Select the groups the user will belong to:",
        text_fill_information:
          "Fill in the information below to invite a new user:",
        text_awaiting_after_delete_desative:
          "By continuing, all users will lose access as their permissions will be blocked.",
        title_already_active: "Do you want to activate this user?",
        text_already_active:
          "By continuing, the user will regain access and their permissions.",
        text_already_desative:
          "By continuing, all data of the selected user will be deleted, and they will no longer have access until restored.",
        title_already_desative: "Do you want to deactivate this client?",
        text_already_exclude:
          "By continuing, all data of the selected user will be disabled, and they will no longer have access until reactivated.",
        title_already_exclude: "Do you want to delete this client?",
      },
      invites: {
        text_already_resend:
          "By continuing, the previously sent invitation with the token and other details will be invalidated.",
        title_already_resend:
          "Do you want to resend the invitation to the user?",
        text_already_exclude:
          "By continuing, the invitation will be invalidated and the attached user data will be removed from the system.",
        title_already_exclude: "Do you want to delete this invitation?",
        success_title_resend: "Invitation resent",
        success_text_resend: "Your invitation has been successfully resent!",
        success_title_delete: "Invitation deleted",
        success_text_delete: "Your invitation has been successfully deleted!",
      },
    },
    apis: {
      text_fill_information: "Fill in the integration information:",
    },
  },
};
