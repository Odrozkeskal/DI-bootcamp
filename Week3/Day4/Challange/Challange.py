class Text:
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        words = self.text.split()
        frequency = words.count(word)
        return frequency
    
    def most_common_word(self):
        words = self.text.split()
        word_freq = {}
        for word in words:
            if word in word_freq:
                word_freq[word] += 1
            else:
                word_freq[word] = 1
        most_common = max(word_freq, key=word_freq.get)
        return most_common
    
    def unique_words(self):
        words = self.text.split()
        unique_words = set(words)
        return list(unique_words)

    @classmethod
    def from_file(cls, filename):
        with open(filename, mode='r', encoding='utf-8') as file:
            text = file.read()
        return cls(text)
    




text_string = "A good book would sometimes cost as much as a good house."
text_analysis = Text(text_string)


print(f"Repeats of 'good': {text_analysis.word_frequency('good')}")


print(f"Most common word: {text_analysis.most_common_word()}")

print(f"Unique words: {text_analysis.unique_words()}")

text_obj = Text.from_file('the_stranger.txt')

print(text_obj.word_frequency("Mother"))

print(text_obj.most_common_word())

print(text_obj.unique_words())