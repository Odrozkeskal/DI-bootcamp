import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
    
    def __repr__(self):
        return f"{self.value} of {self.suit}"
class Deck():
    
    def __init__(self):
        self.cards = []
        self.random_deck()
        
    def random_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        card_values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in card_values]
        return f"{self.cards}"
    
    def shuffle(self):
        random.shuffle(self.cards)
    
    def deal(self):
        if len(self.cards) == 0:
            return None  # No cards left in the deck
        return self.cards.pop()
    
deck1 = Deck()
print(deck1.random_deck())

deck1.shuffle()
print("Shuffled deck:", deck1.cards)

print("Dealt card:", deck1.deal())

print("Remaining deck:", deck1.cards)
