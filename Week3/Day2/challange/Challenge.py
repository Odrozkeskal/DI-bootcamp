class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = pageSize
        self.num_pages = self.calculate_num_pages()

    def calculate_num_pages(self):
        if not self.items:
            return 0
        return (len(self.items) + self.pageSize - 1) // self.pageSize

    def get_page(self, page_num):
        if page_num < 1 or page_num > self.num_pages:
            raise ValueError(f"Error. Must be between 1 and {self.num_pages}")

        start_index = (page_num - 1) * self.pageSize
        end_index = min(start_index + self.pageSize, len(self.items))
        return self.items[start_index:end_index]

    def show(self):
        return f"Pagination(items={self.items}, pageSize={self.pageSize})"

if __name__ == "__main__":
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    print(f"Number of pages: {p.num_pages}")

    page1 = p.get_page(1)
    print(f"Page 1: {page1}")

    page2 = p.get_page(2)
    print(f"Page 2: {page2}")

    page3 = p.get_page(3)
    print(f"Page 3: {page3}")


    try:
        page4 = p.get_page(4)
    except ValueError as e:
        print(e)