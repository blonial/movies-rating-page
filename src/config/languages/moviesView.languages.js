const data = {
  pl: {
    movieDetails: {
      fetchingError: 'Błąd podczas pobierania danych filmu.',
      overview: 'Opis',
      country: 'Kraje produkcji',
    },
    rating: {
      confirmButton: 'Zatwierdź',
      neverSeenThisMovie: 'Nie widziałem tego filmu',
      ratingError:
        'Wystąpił problem podczas oceniania filmu! Spróbuj podnownie później.',
    },
    header: {
      hello: 'Cześć',
      reset: 'Zacznij od nowa',
    },
    confirmationModal: {
      title: 'Potwierdź oceny',
      body: 'Czy chcesz potwierdzić wszystkie wystawione oceny filmów?',
      save: 'Potwierdź',
      close: 'Anuluj',
      confirmingError:
        'Wystąpił problem podczas zapisywania ocen! Spróbuj ponownie później.',
    },
    abortRatingModal: {
      title: 'Porzuć ocenianie',
      body: 'Czy chcesz porzucić aktualny postęp w ocenianiu filmów?',
      save: 'Tak',
      close: 'Nie',
      abortError:
        'Wystąpił problem podczas porzucania ocen! Spróbuj ponownie później.',
    },
  },
  en: {
    movieDetails: {
      overview: 'Overview',
      fetchingError: 'Error during getting movie data.',
      country: 'Production countries',
    },
    rating: {
      confirmButton: 'Confirm',
      neverSeenThisMovie: 'Never seen this movie',
      ratingError: 'Error during rating movie! Try again later.',
    },
    header: {
      hello: 'Hi',
      reset: 'Start over',
    },
    confirmationModal: {
      title: 'Confirm rating',
      body: 'Do you really want to confirm all movies ratings?',
      save: 'Confirm',
      close: 'Cancel',
      confirmingError: 'Error during saving ratings! Try again later.',
    },
    abortRatingModal: {
      title: 'Abort rating',
      body: 'Do you really want to abort ratings?',
      save: 'Yes',
      close: 'No',
      abortError: 'Error during abort ratings! Try again later.',
    },
  },
};

export default data;
