article = "George Boole Jnr ( 2 November 1815 – 8 December 1864) was a largely self-taught English mathematician, philosopher, and logician, most of whose short career was spent as the first professor of mathematics at Queen's College, Cork in Ireland. He worked in the fields of differential equations and algebraic logic, and is best known as the author of The Laws of Thought (1854) which contains Boolean algebra. Boolean logic is credited with laying the foundations for the Information Age alongside the work of Claude Shannon."

print(f"This article contains {(len(article))} symbols")

article_list_sentences = list(article.split("."))
sentences_counter = 0

for sentences in article_list_sentences:
    sentences_counter += 1
print(f"The article contains {sentences_counter} sentences")

article_list_words = list(article.split(" "))
word_counter = 0

for words in article_list_words:
    word_counter += 1

print(f"The article contains {word_counter} words")

unique_word_count = set(article_list_words)

print(f"The article contains {(len(unique_word_count))} unique words")