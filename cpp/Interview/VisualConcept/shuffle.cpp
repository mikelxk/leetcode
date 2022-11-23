int rand();
const int NUM_CARDS = 52;
void shuffle_a_given_deck_of_cards(int *deck)
{
    /* get memory for the decks */
    int *tempdeck = new int[2 * NUM_CARDS];
    int *randdeck = tempdeck + NUM_CARDS * sizeof(int);
    // initialize the random deck
    int i, j;
    for (i = 0; i < NUM_CARDS; i++)
        randdeck[i] = rand() % 52;
    // use the random deck to create tempdeck
    for (j = 0; j < NUM_CARDS; j++) {
        int place = 0;
        for (i = 0; i < NUM_CARDS; i++) {
            if (randdeck[i] >= 0) {
                place = i;
            }
        }
        randdeck[place] = -1;
        tempdeck[j] = deck[place];
    }
    /* copy the temp deck back into deck */
    for (i = 0; i < NUM_CARDS; i++)
        deck[i] = tempdeck[i];
    /* delete at the end */
    delete tempdeck;
}