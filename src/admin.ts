import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';
import AdminJS, { AdminJSOptions } from 'adminjs';

import Admin from './db/admin';
import app, { connectionPr } from './app';
import { SECRET, COMPANY_NAME } from './env';
import locale from './locale_ru'

AdminJS.registerAdapter(AdminJSMongoose)

const adminInit = async () => {
  const connection = await connectionPr;

  const options: AdminJSOptions = {
    databases: [connection],
    branding: {
      companyName: COMPANY_NAME,
      // logo: '/static/logo.svg',
      // favicon: '/static/favicon.png',
      // softwareBrothers: false
    },
    rootPath: '/admin',
    // locale //uncomment for Russian locale
  }

  const adminJs = new AdminJS(options)
  const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email: string, password: string) => {
      const admin = await Admin.signin(email, password);
      return admin
    },
    cookiePassword: SECRET
  })
  app.use(adminJs.options.rootPath, router)
}

export default adminInit;