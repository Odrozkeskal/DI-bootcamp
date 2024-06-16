class Song:
    def __init__(self, lyrics:list) -> None:
        self.lyrics = lyrics
        
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


def sing_me_a_song(song: Song) -> str:
    print(song.lyrics[0])
    print(song.lyrics[1])
    print(song.lyrics[2])
    
if __name__ == "__main__":
    sing_me_a_song(stairway)