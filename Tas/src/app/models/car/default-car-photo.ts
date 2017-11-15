export class DefaultCarPhoto {

  id: number;
  photoUrl: string;
  photoS3Id: string;
  resizedPhotoUrl: string;
  resizedPhotoS3Id: string;

  constructor(id: number, photoUrl: string, photoS3Id: string, resizedPhotoUrl: string, resizedPhotoS3Id: string) {
    this.id = id;
    this.photoUrl = photoUrl;
    this.photoS3Id = photoS3Id;
    this.resizedPhotoUrl = resizedPhotoUrl;
    this.resizedPhotoS3Id = resizedPhotoS3Id;
  }


}
