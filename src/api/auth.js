let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          '576686748367-9g9j2kt85it5m2evh66e9h591ql016lb.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialized = true;
    });
  });
};
