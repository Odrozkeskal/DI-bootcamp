class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __repr__(self):
        return f"Currency('{self.currency}', {self.amount})"
    
    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __add__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot add different currencies")
        new_amount = self.amount + other.amount
        return Currency(self.currency, new_amount)
    
    def __sub__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot subtract different currencies")
        new_amount = self.amount - other.amount
        return Currency(self.currency, new_amount)
    
    def __eq__(self, other):
        return self.currency == other.currency and self.amount == other.amount
    
    def __ne__(self, other):
        return not self.__eq__(other)
    
    def __lt__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot compare different currencies")
        return self.amount < other.amount
    
    def __le__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot compare different currencies")
        return self.amount <= other.amount
    
    def __gt__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot compare different currencies")
        return self.amount > other.amount
    
    def __ge__(self, other):
        if self.currency != other.currency:
            raise ValueError("Cannot compare different currencies")
        return self.amount >= other.amount

if __name__ == "__main__":

    c1 = Currency('USD', 50)
    c2 = Currency('USD', 25)
    c3 = Currency('EUR', 50)
    
    try:
        c_sum = c1 + c2
        print(c_sum)
     
        c_sum = c1 + c3
    except ValueError as e:
        print(f"Error: {e}")
    
    try:
        print(c1 > c2)
   
        print(c1 > c3)
    except ValueError as e:
        print(f"Error: {e}")