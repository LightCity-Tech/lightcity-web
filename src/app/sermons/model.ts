interface ISeries {
    dateUploaded: string;
    _id: string;
    title: string;
    yearTaught: string;
    thumbnail: any;
    tracks: Tracks[];
  }
  
  interface Tracks {
    fileId: string;
    title: string;
    url: string;
    yearTaught: string;
    thumbnail: any;
    _id: string;
  }