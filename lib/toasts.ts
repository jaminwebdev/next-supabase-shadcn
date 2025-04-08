import { toast } from 'sonner';

export const toasts = {
  authError: (errorMessage: string | null) =>
    toast('Error', {
      description: errorMessage,
    }),
  verify: () =>
    toast('Welcome! 🎉', {
      description: 'Please verify your email to log in 🙏',
    }),
  verified: () =>
    toast("You're verified!👋", {
      description: 'Please log in to continue',
      action: {
        label: 'dismiss',
        onClick: () => {},
      },
    }),
  loggedIn: () =>
    toast('Logged in', {
      description: 'You have been successfully logged in',
    }),
  logoutError: () =>
    toast('Error logging out', {
      description: 'There was a problem logging out',
    }),
};
