import { AuthProvider } from '@arcana/auth';

let auth: AuthProvider | null;

const newAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_dev_c2fb7be163754e57d384e24257ea2c8d2a5dd31a"
    );
  }
  return auth;
};

export { newAuthProvider };