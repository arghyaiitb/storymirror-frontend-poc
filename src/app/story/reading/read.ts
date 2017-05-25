/**
 * Created by argo on 23/05/17.
 */
export interface Contact {
  name: string;
  id: number;
}


export interface Story {
  _id: string;
  title: string;
  created_at: Date;
  body: string;
  tags: string[];
  titlethemebyuserid: string;
  readscount: number;
  commentscount: number;
  likescount: number;
}

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  location: string;
  bio: string;
}
