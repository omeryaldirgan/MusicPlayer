export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  AlbumScreen:undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type AlbumType = {
  id:string;
  name:string;
  by:string;
  numberOfLikes:number;
  imageUri:string;
  artistHeadline:string;
};
export type Song={
  id:string;
  imageUri:string;
  title:string;
  artist:string;
}
