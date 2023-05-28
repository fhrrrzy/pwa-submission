const fetchWithAlert = async (url, options = null) => {
  const loadingScreen = document.createElement('div');
  loadingScreen.classList.add('loading-screen');

  const loadingText = document.createElement('p');
  loadingText.textContent = 'Loading...';
  loadingScreen.appendChild(loadingText);

  document.body.appendChild(loadingScreen);

  document.body.style.backdropFilter = 'blur(4px)'; // Apply backdrop blur effect to the body

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Success alert
    const successAlert = document.createElement('div');
    successAlert.classList.add('success-alert');
    successAlert.textContent = 'Success!';
    document.body.appendChild(successAlert);

    setTimeout(() => {
      successAlert.animate([{ right: '-100%' }, { right: '0.5%' }], {
        duration: 300,
        fill: 'forwards',
      });

      setTimeout(() => {
        successAlert.animate([{ right: '0.5%' }, { right: '-100%' }], {
          duration: 300,
          fill: 'forwards',
          delay: 2000,
        });

        setTimeout(() => {
          document.body.removeChild(successAlert);
        }, 3000);
      }, 0); // Immediate execution to show the alert immediately
    }, 0); // Immediate execution to append the alert immediately

    return response;
  } catch (error) {
    // const isNetworkError = !navigator.onLine;
    const errorMessage = error.message;

    const alert = document.createElement('div');
    alert.classList.add('error-alert');
    alert.textContent = errorMessage;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.animate([{ right: '-100%' }, { right: '0.5%' }], {
        duration: 300,
        fill: 'forwards',
      });

      setTimeout(() => {
        alert.animate([{ right: '0.5%' }, { right: '-100%' }], {
          duration: 300,
          fill: 'forwards',
          delay: 2000,
        });

        setTimeout(() => {
          document.body.removeChild(alert);
        }, 3000);
      }, 0); // Immediate execution to show the alert immediately
    }, 0); // Immediate execution to append the alert immediately

    throw error;
  } finally {
    setTimeout(() => {
      document.body.removeChild(loadingScreen);
      document.body.style.backdropFilter = ''; // Remove the backdrop blur effect from the body
    }, 0); // Immediate execution to remove the loading screen immediately
  }
};

export default fetchWithAlert;
