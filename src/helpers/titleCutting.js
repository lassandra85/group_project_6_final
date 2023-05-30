const cutTitle = title => {
  if(!title){ return
  }else{
  return title.length >= 35 ? title.slice(0, 35) + ' ...' : title;
}};

export default cutTitle;
