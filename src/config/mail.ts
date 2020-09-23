interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'seuemail@corporativo.com',
      name: 'SEU USER PADRAO PARA ENVIO DE EMAIL',
    },
  },
} as IMailConfig;
