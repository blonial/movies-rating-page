const data = {
  pl: {
    button: 'Przejdź do widoku filmów',
    selectLanguage: {
      title: 'Wybierz język',
      language: {
        pl: 'Polski',
        en: 'Angielski',
      },
    },
    selectTheme: {
      title: 'Wybierz motyw',
      theme: {
        dark: 'Ciemny',
        white: 'Jasny',
      },
    },
    enterNick: {
      enterNick: 'Podaj nick:',
      confirmationMode: 'Tryb potwierdzania',
      submitButton: 'Zaczynajmy!',
      fetchingError:
        'Wystąpił błąd podczas tworzenia sesji! Spróbuj ponownie później.',
      nickEmpty: 'Podaj nick.',
      nickLengthMin: 'Nick musi być dłuższy niż 4 znaki.',
      nickLengthMax: 'Nick musi być krótszy niż 64 znaki.',
    },
    userInfo: {
      controllsDescription:
        'Film możesz ocenić w skali od 1 do 6, gdzie 1 oznacza ocenę najniższą, a 6 - najwyższą. <br />' +
        'Do oceny możesz użyć gwiazdek umieszczonych na dole interfejsu lub klawiszy od 1 do 6. <br />' +
        'Jeśli nie oglądałeś danego filmu, możesz kliknąć przycisk "Nie widziałem tego filmu" lub nacisnąć klawisz "Spacja".',
      progressSavingDescription:
        'Twój postęp w ocenianiu jest zapisywany w danych przeglądarki. <br />' +
        'Możesz przerwać ocenianie w dowolnym momencie i wrócić do niego póżniej.',
      userNickAvailabilityDescription:
        'Wybrany nick będzie użyty tylko i wyłącznie w celach identyfikacyjnych. <br /> ' +
        'Wybranie ponownie tego samego nicku nie umożliwi zmiany ocen.',
      confirmationModeDescription:
        'Jeśli włączysz "Tryb potwierdzenia", obok wystawionej przez Ciebie oceny pojawi się przycisk "Zapisz ocenę". <br />' +
        'Za każdym razem będziesz musiał potwierdzić wybór swojej oceny poprzez kliknęcie tego przycisku lub naciśnięcie klawisza "Enter". <br />' +
        'Jeśli pozostawisz tę opcję wyłączoną, po wystawieniu oceny natychmiast zostaniesz przeniesiony do kolejnego filmu bez konieczności zapisywania wyboru.',
    },
  },
  en: {
    button: 'Go to movies view',
    selectLanguage: {
      title: 'Select language',
      language: {
        pl: 'Polish',
        en: 'English',
      },
    },
    selectTheme: {
      title: 'Select theme',
      theme: {
        dark: 'Dark',
        white: 'White',
      },
    },
    enterNick: {
      enterNick: 'Enter nick:',
      confirmationMode: 'Confirmation mode',
      submitButton: 'Let&rsquo;s start!',
      fetchingError: 'Error during creating user session! Try again later!.',
      nickEmpty: 'Enter nick.',
      nickLengthMin: 'Nick lenght must be longer than 4 characters.',
      nickLengthMax: 'Nick lenght must be lower than 64 characters.',
    },
    userInfo: {
      controllsDescription:
        'You can rate your movie on a scale of 1 to 6, with 1 being the lowest and 6 the highest. <br />' +
        'You can use the stars at the bottom of the interface or the keys 1 to 6 for rating. <br />' +
        'If you haven&rsquo;t watched the movie in question, you can click the button "Never seen this movie" or press the "SPACE" key.',
      progressSavingDescription:
        'Your rating progress is saved in your browser data. <br />' +
        'You can stop rating at any time and come back to it later.',
      userNickAvailabilityDescription:
        'The chosen nickname will be used only for identification purposes. <br />' +
        'Selecting the same nickname again will not change the ratings.',
      confirmationModeDescription:
        'If you enable "Confirmation Mode", a "Save Rating" button will appear next to your rating. <br />' +
        'You will have to confirm your rating selection each time by clicking this button or pressing the "Enter" key. <br />' +
        'If you leave this option disabled, you will be immediately moved to the next movie after rating, without having to save your selection.',
    },
  },
};

export default data;
