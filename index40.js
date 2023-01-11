function makeAlbum(artist, title, tracks) {
    const album = {
      artist: artist,
      title: title
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(makeAlbum("Michael Jackson", "Thriller"));
  console.log(makeAlbum("The Beatles", "Abbey Road", 17));
  console.log(makeAlbum("Pink Floyd", "The Dark Side of the Moon", 8));

  
