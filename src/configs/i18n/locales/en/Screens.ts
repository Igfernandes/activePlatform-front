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
  galleries: {
    description:
      "Discover the best moments with Matrilhas and their unforgettable experiences through our photo gallery.",
    title: "Photo Gallery",
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
    not_found:
      "Form unavailable. Please contact the central office at the number",
    not_stock:
      "No slots available for this activity. Visit the event page to see other activities available for registration",
    successful: {
      form_received:
        "Form unavailable. Please contact the central office at the number",
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
  home: {
    contact: {
      address_title: "Our Address",
      address: "São José do Imbassai, Maricá - RJ",
      phone_title: "Contact us",
      phone: "(21) 97129-2030",
      email_title: "Send us an email",
      email: "contato@agmturismomarica.com.br",
    },
    menu: {
      logo: "AGM logotype",
      about_us: "About Us",
      partners: "Our Partners",
    },
    status: {
      tours: "+100 Tours",
      guides: "+40 Guides",
      modalities: "+6 Modalities",
      travelers: "+1000 Travelers",
    },
    about: {
      title: "A little about us",
      subtitle: "Maricá Tourist Guides Association",
      description_1:
        "The Maricá Tourist Guides Association (AGM) is a non-profit entity that brings together qualified professionals committed to promoting responsible, sustainable, and high-quality tourism in Maricá and the region.",
      description_2:
        "Founded with the aim of valuing and strengthening the tour guide profession, AGM acts as a reference point for visitors, agencies, operators, and partners in the tourism trade, always prioritizing excellence in service, safety, and the preservation of natural, cultural, and historical heritage.",
    },
    events: {
      title: "Schedule and services",
      subtitle: "Our attractions and activities",
      not_available: {
        title: "No events available",
        text: "At the moment there are no events available, but soon we will have news. Stay tuned!",
      },
    },
    gallery: {
      title: "AGM & YOU",
      subtitle: "Our memories",
      description:
        "Each photo here holds a piece of our history. For AGM, it is a great joy to share unique moments with our clients and friends who participate in our tourist activities. Every smile and every experience we share reinforces our purpose: to transform tours into unforgettable memories.",
    },
    support_network: {
      title: "Support network",
      subtitle: "Institutions that strengthen our work",
    },
    faq: {
      title: "Questions & Answers",
      description: "Find the answers in our FAQ",
      questions: [
        {
          question: "What are the Association’s functions?",
          answer:
            "AGM acts as a driving force for local tourism, promoting sustainable and high-quality tourism. We offer training, market updates, and networking opportunities for tour guides. We also work in partnership with local authorities to regulate and strengthen the profession.",
        },
        {
          question: "When was the Association founded?",
          answer: "AGM was founded on July 13, 2021.",
        },
        {
          question: "Who is the president of AGM?",
          answer:
            "Currently, the president is Alberto Matrilhas and the vice-president is Thaís Bellotti.",
        },
        {
          question: "Where is AGM’s headquarters?",
          answer:
            "Our headquarters, also called the Central de Passeios, is located at Rua Abreu Sodré, 43 - Centro, Maricá - RJ, 24913-775.",
        },
        {
          question: "What are the service days and hours?",
          answer:
            "We are open every day of the week, Monday to Sunday, from 9 a.m. to 5 p.m.",
        },
        {
          question: "Why become a member of AGM?",
          answer:
            "By becoming a member, you join a community that values the history, culture, and tourist attractions of the region. In addition to expanding knowledge and opportunities, you contribute to providing tourists with authentic and safe experiences, further strengthening tourism in Maricá.",
        },
        {
          question: "Who can become a member?",
          answer:
            "Both individuals and legal entities can join, including tour guides, conductors, monitors, tourism professionals and companies, hotels, gastronomy establishments, printing companies, collaborators, and supporters.",
        },
        {
          question: "What is AGM’s contribution to tourism in Maricá?",
          answer:
            "AGM actively participates in local events and initiatives, such as Caravana Celebrar Maricá, Expo Valley, Expo Maricá, Vem Viver Maricá, Vem Viver Espraiado, Recantando, Curta Itaocaia, Espraiado de Portas Abertas, Conheça Maricá, Maricá Games, FLIN, Hydrogen Congress, Career Fair, BRICS+, as well as technical visits and training sessions. Our commitment is the continuous strengthening of tourism in Maricá through partnerships and actions that value professionals and raise the quality of the sector.",
        },
      ],
    },
    newsletter: {
      title: "Travel with us",
      subtitle: "Be another traveler connected with us",
      description: "Sign up to receive news and updates",
      form: {
        name: "Name",
        phone: "Phone",
        button: "Subscribe",
      },
    },
    testimonials: [
      {
        title: "Traveler’s comment",
        text: "I loved joining the tour in Maricá with AGM in the jeeps! It was a wonderful experience, full of beautiful landscapes and unforgettable moments.",
        author: "Igor Fernandes",
        info: "Resident of Maricá - RJ",
      },
      {
        title: "Traveler’s comment",
        text: "It was amazing to live this experience with AGM! The activities were very well organized, with fun and special moments from start to finish. I can’t wait to join again!",
        author: "Joyce Pedro",
        info: "Resident of Ouro Preto - MG",
      },
      {
        title: "Traveler’s comment",
        text: "Congratulations to AGM! Taking part in the activities was wonderful, everything was well planned and full of unique moments. I highly recommend it!",
        author: "Jofre Martins",
        info: "Resident of São Gonçalo - RJ",
      },
      {
        title: "Traveler’s comment",
        text: "An unforgettable experience with AGM! Every detail of the activities was carefully planned, providing fun, learning, and lots of positive energy.",
        author: "Henrique José",
        info: "Resident of Maricá - RJ",
      },
    ],
  },
};
